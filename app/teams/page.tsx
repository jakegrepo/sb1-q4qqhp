"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const mockTeams = [
  { id: 1, name: "Dragon Slayers", members: 5, event: "Corporeal Beast Bingo" },
  { id: 2, name: "Skilling Legends", members: 3, event: "Skilling Marathon" },
  { id: 3, name: "Wilderness Warriors", members: 4, event: "Wilderness Boss Challenge" },
];

export default function TeamsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [newTeamName, setNewTeamName] = useState("");

  const filteredTeams = mockTeams.filter((team) =>
    team.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateTeam = () => {
    // Implement team creation logic here
    console.log("Creating team:", newTeamName);
    setNewTeamName("");
  };

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Manage Teams</h1>
      <div className="flex justify-between items-center">
        <div className="w-full md:w-1/2">
          <Label htmlFor="search">Search Teams</Label>
          <Input
            id="search"
            placeholder="Search by team name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Create Team</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create a New Team</DialogTitle>
              <DialogDescription>
                Enter a name for your new team. You can invite members after creation.
              </DialogDescription>
            </DialogHeader>
            <Input
              placeholder="Team Name"
              value={newTeamName}
              onChange={(e) => setNewTeamName(e.target.value)}
            />
            <DialogFooter>
              <Button onClick={handleCreateTeam}>Create Team</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTeams.map((team) => (
          <Card key={team.id}>
            <CardHeader>
              <CardTitle>{team.name}</CardTitle>
              <CardDescription>Event: {team.event}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Members: {team.members}</p>
            </CardContent>
            <CardFooter>
              <Button>Manage Team</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}