"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const mockLeaderboardData = {
  "Corporeal Beast Bingo": [
    { rank: 1, name: "Player1", score: 1500 },
    { rank: 2, name: "Player2", score: 1400 },
    { rank: 3, name: "Player3", score: 1300 },
  ],
  "Skilling Marathon": [
    { rank: 1, name: "Player4", score: 2000 },
    { rank: 2, name: "Player5", score: 1900 },
    { rank: 3, name: "Player6", score: 1800 },
  ],
  "Wilderness Boss Challenge": [
    { rank: 1, name: "Player7", score: 1200 },
    { rank: 2, name: "Player8", score: 1100 },
    { rank: 3, name: "Player9", score: 1000 },
  ],
};

export default function LeaderboardsPage() {
  const [selectedEvent, setSelectedEvent] = useState(Object.keys(mockLeaderboardData)[0]);

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Leaderboards</h1>
      <Card>
        <CardHeader>
          <CardTitle>Select Event</CardTitle>
        </CardHeader>
        <CardContent>
          <Select value={selectedEvent} onValueChange={setSelectedEvent}>
            <SelectTrigger>
              <SelectValue placeholder="Select an event" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(mockLeaderboardData).map((event) => (
                <SelectItem key={event} value={event}>
                  {event}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>{selectedEvent} Leaderboard</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Rank</TableHead>
                <TableHead>Player</TableHead>
                <TableHead>Score</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockLeaderboardData[selectedEvent].map((entry) => (
                <TableRow key={entry.rank}>
                  <TableCell>{entry.rank}</TableCell>
                  <TableCell>{entry.name}</TableCell>
                  <TableCell>{entry.score}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}