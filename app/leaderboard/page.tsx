"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function LeaderboardPage() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    // Implement API call to fetch leaderboard data
    // This is a mock response
    setLeaderboard([
      { rank: 1, username: "Player1", totalWinnings: 5000, gamesWon: 20 },
      { rank: 2, username: "Player2", totalWinnings: 4500, gamesWon: 18 },
      { rank: 3, username: "Player3", totalWinnings: 4000, gamesWon: 16 },
    ]);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Global Leaderboard</h1>
      <Card>
        <CardHeader>
          <CardTitle>Top Players</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Rank</TableHead>
                <TableHead>Username</TableHead>
                <TableHead>Total Winnings</TableHead>
                <TableHead>Games Won</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaderboard.map((player) => (
                <TableRow key={player.rank}>
                  <TableCell>{player.rank}</TableCell>
                  <TableCell>{player.username}</TableCell>
                  <TableCell>${player.totalWinnings}</TableCell>
                  <TableCell>{player.gamesWon}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}