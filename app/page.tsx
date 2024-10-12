import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center">Welcome to OSRS Bingo PvM and Skilling Competitions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Browse Events</CardTitle>
            <CardDescription>Discover and join exciting OSRS competitions</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Find PvM and skilling events that match your interests and skill level.</p>
          </CardContent>
          <CardFooter>
            <Link href="/events">
              <Button>View Events</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Create Teams</CardTitle>
            <CardDescription>Form or join teams for group competitions</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Collaborate with friends or meet new players to tackle challenges together.</p>
          </CardContent>
          <CardFooter>
            <Link href="/teams">
              <Button>Manage Teams</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Leaderboards</CardTitle>
            <CardDescription>Track your progress and compete for top rankings</CardDescription>
          </CardHeader>
          <CardContent>
            <p>See real-time standings and compare your achievements with other players.</p>
          </CardContent>
          <CardFooter>
            <Link href="/leaderboards">
              <Button>View Leaderboards</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}