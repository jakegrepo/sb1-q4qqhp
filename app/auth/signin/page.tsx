"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function SignIn() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      username: e.target.username.value,
      password: e.target.password.value,
      callbackUrl: "/",
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
          <CardDescription>Enter your credentials or use a social login</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input name="username" placeholder="Username" required />
            <Input name="password" type="password" placeholder="Password" required />
            <Button type="submit" className="w-full">Sign In</Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Button onClick={() => signIn("google")} className="w-full">Sign in with Google</Button>
          <Button onClick={() => signIn("discord")} className="w-full">Sign in with Discord</Button>
        </CardFooter>
      </Card>
    </div>
  );
}