"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CreateEventPage() {
  const [eventTitle, setEventTitle] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [buyIn, setBuyIn] = useState("");
  const router = useRouter();

  const handleCreateEvent = async (e) => {
    e.preventDefault();
    // In a real application, this would make an API call to create the event
    console.log("Creating event:", { eventTitle, eventType, eventDate, buyIn });
    // Redirect to events page after creation
    router.push("/events");
  };

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Create New Event</h1>
      <Card>
        <CardHeader>
          <CardTitle>Event Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleCreateEvent} className="space-y-4">
            <div>
              <Label htmlFor="event-title">Event Title</Label>
              <Input
                id="event-title"
                value={eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="event-type">Event Type</Label>
              <Select value={eventType} onValueChange={setEventType} required>
                <SelectTrigger id="event-type">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pvm">PvM</SelectItem>
                  <SelectItem value="skilling">Skilling</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="event-date">Event Date</Label>
              <Input
                id="event-date"
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="buy-in">Buy-in Amount ($)</Label>
              <Input
                id="buy-in"
                type="number"
                value={buyIn}
                onChange={(e) => setBuyIn(e.target.value)}
                required
              />
            </div>
            <Button type="submit">Create Event</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}