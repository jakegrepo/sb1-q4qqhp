"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import io from "socket.io-client";

let socket;

export default function JoinGamePage() {
  const [gameId, setGameId] = useState("");
  const [availableGames, setAvailableGames] = useState([]);

  useEffect(() => {
    socketInitializer();
  }, []);

  const socketInitializer = async () => {
    await fetch("/api/socket");
    socket = io();

    socket.on("connect", () => {
      console.log("Connected to socket");
    });

    socket.on("available-games", (games) => {
      setAvailableGames(games);
    });
  };

  const handleJoinGame = () => {
    if (gameId) {
      socket.emit("join-game", gameId);
      // Redirect to game page
    }
  };

  const handleCreateGame = () => {
    socket.emit("create-game");
    // Handle game creation and redirection
  };

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Join or Create a Game</h1>
      <Card>
        <CardHeader>
          <CardTitle>Join Existing Game</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="Enter Game ID"
            value={gameId}
            onChange={(e) => setGameId(e.target.value)}
          />
          <Button onClick={handleJoinGame}>Join Game</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Create New Game</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={handleCreateGame}>Create Game</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Available Games</CardTitle>
        </CardHeader>
        <CardContent>
          {availableGames.map((game) => (
            <Button key={game.id} onClick={() => setGameId(game.id)}>
              Join Game {game.id}
            </Button>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}