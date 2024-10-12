"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold">
            OSRS Bingo
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/events" passHref>
              <Button variant={pathname === "/events" ? "default" : "ghost"}>
                Events
              </Button>
            </Link>
            <Link href="/teams" passHref>
              <Button variant={pathname === "/teams" ? "default" : "ghost"}>
                Teams
              </Button>
            </Link>
            <Link href="/leaderboards" passHref>
              <Button variant={pathname === "/leaderboards" ? "default" : "ghost"}>
                Leaderboards
              </Button>
            </Link>
            <Link href="/profile" passHref>
              <Button variant={pathname === "/profile" ? "default" : "ghost"}>
                Profile
              </Button>
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;