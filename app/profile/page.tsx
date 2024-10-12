"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const mockUserData = {
  username: "RuneWarrior99",
  email: "runewarrior99@example.com",
  totalEvents: 10,
  totalTeams: 3,
  highestRank: 2,
};

export default function ProfilePage() {
  const [username, setUsername] = useState(mockUserData.username);
  const [email, setEmail] = useState(mockUserData.email);

  const handleUpdateProfile = () => {
    // Implement profile update logic here
    console.log("Updating profile:", { username, email });
  };

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Your Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>Update your account details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/placeholder-avatar.jpg" alt={username} />
                <AvatarFallback>{username.slice(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <Button>Change Avatar</Button>
            </div>
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Button onClick={handleUpdateProfile}>Update Profile</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Statistics</CardTitle>
            <CardDescription>Your OSRS Bingo performance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>Total Events Participated: {mockUserData.totalEvents}</p>
            <p>Total Teams Joined: {mockUserData.totalTeams}</p>
            <p>Highest Rank Achieved: {mockUserData.highestRank}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}