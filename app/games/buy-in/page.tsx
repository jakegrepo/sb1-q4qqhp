"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const mockEvents = [
  { id: 1, title: "Corporeal Beast Bingo", type: "PvM", date: "2023-05-15", participants: 50, buyIn: 10 },
  { id: 2, title: "Skilling Marathon", type: "Skilling", date: "2023-05-20", participants: 100, buyIn: 5 },
  { id: 3, title: "Wilderness Boss Challenge", type: "PvM", date: "2023-05-25", participants: 30, buyIn: 15 },
];

export default function BuyInPage() {
  const [amount, setAmount] = useState("");
  const [event, setEvent] = useState(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const eventId = searchParams.get("eventId");

  useEffect(() => {
    if (eventId) {
      const foundEvent = mockEvents.find(e => e.id === parseInt(eventId));
      if (foundEvent) {
        setEvent(foundEvent);
        setAmount(foundEvent.buyIn.toString());
      }
    }
  }, [eventId]);

  const handleBuyIn = async () => {
    try {
      // In a real application, this would make an API call to process the payment
      console.log(`Processing payment of $${amount} for event: ${event.title}`);
      // Redirect to a confirmation page or back to the events list
      router.push("/events");
    } catch (error) {
      console.error("Error processing buy-in:", error);
    }
  };

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Buy-in for {event.title}</h1>
      <Card>
        <CardHeader>
          <CardTitle>Confirm Buy-in Amount</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Event: {event.title}</p>
          <p>Date: {event.date}</p>
          <p>Type: {event.type}</p>
          <Input
            type="number"
            placeholder="Enter amount in USD"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <Button onClick={handleBuyIn}>Confirm Payment</Button>
        </CardContent>
      </Card>
    </div>
  );
}