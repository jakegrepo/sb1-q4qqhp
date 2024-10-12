"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useRouter } from "next/navigation";
import Link from "next/link";

const mockEvents = [
  { id: 1, title: "Corporeal Beast Bingo", type: "PvM", date: "2023-05-15", participants: 50, buyIn: 10 },
  { id: 2, title: "Skilling Marathon", type: "Skilling", date: "2023-05-20", participants: 100, buyIn: 5 },
  { id: 3, title: "Wilderness Boss Challenge", type: "PvM", date: "2023-05-25", participants: 30, buyIn: 15 },
];

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [eventType, setEventType] = useState("all");
  const router = useRouter();

  const filteredEvents = mockEvents.filter(
    (event) =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (eventType === "all" || event.type.toLowerCase() === eventType.toLowerCase())
  );

  const handleJoinEvent = (eventId) => {
    // In a real application, this would make an API call to join the event
    console.log(`Joining event with ID: ${eventId}`);
    router.push(`/games/buy-in?eventId=${eventId}`);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Browse Events</h1>
      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <Label htmlFor="search">Search Events</Label>
          <Input
            id="search"
            placeholder="Search by event name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="event-type">Event Type</Label>
          <Select value={eventType} onValueChange={setEventType}>
            <SelectTrigger id="event-type">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="pvm">PvM</SelectItem>
              <SelectItem value="skilling">Skilling</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Link href="/events/create">
          <Button>Create Event</Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <Card key={event.id}>
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
              <CardDescription>{event.type} - {event.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Participants: {event.participants}</p>
              <p>Buy-in: ${event.buyIn}</p>
            </CardContent>
            <CardFooter>
              <Button onClick={() => handleJoinEvent(event.id)}>Join Event</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}