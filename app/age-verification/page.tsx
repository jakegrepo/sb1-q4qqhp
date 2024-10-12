"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AgeVerificationPage() {
  const [birthdate, setBirthdate] = useState("");

  const handleVerify = () => {
    const birthDate = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    if (age >= 18) {
      // Implement logic to mark user as age-verified
      console.log("Age verified");
    } else {
      console.log("User is under 18");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Age Verification</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Please enter your date of birth to verify your age:</p>
          <Input
            type="date"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
          <Button onClick={handleVerify} className="w-full">Verify Age</Button>
        </CardContent>
      </Card>
    </div>
  );
}