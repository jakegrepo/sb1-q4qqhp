"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function DashboardPage() {
  const [userStats, setUserStats] = useState(null);
  const [recentGames, setRecentGames] = useState([]);

  useEffect(() => {
    fetchUserStats();
    fetchRecentGames();
  }, []);

  const fetchUserStats = async () => {
    // Implement API call to fetch user stats
    // This is a mock response
    setUserStats({
      totalGames: 50,
      gamesWon: 10,
      totalWinnings: 1000,
    });
  };

  const fetchRecentGames = async () => {
    // Implement API call to fetch recent games
    // This is a mock response
    setRecentGames([
      { id: 1, date: "2023-05-01", result: "Won", winnings: 100 },
      { id: 2, date: "2023-05-03", result: "Lost", winnings: 0 },
      { id: 3, date: "2023-05-05", result: "Won", winnings: 150 },
    ]);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Your Dashboard</h1>
      {userStats && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Total Games</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">{userStats.totalGames}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Games Won</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">{userStats.gamesWon}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Total Winnings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">${userStats.totalWinnings}</p>
            </CardContent>
          </Card>
        </div>
      )}
      <Card>
        <CardHeader>
          <CardTitle>Recent Games</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Result</TableHead>
                <TableHead>Winnings</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentGames.map((game) => (
                <TableRow key={game.id}>
                  <TableCell>{game.date}</TableCell>
                  <TableCell>{game.result}</TableCell>
                  <TableCell>${game.winnings}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}