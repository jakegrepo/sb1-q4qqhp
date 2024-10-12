"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CreateBoardPage() {
  const [boardSize, setBoardSize] = useState(5);
  const [theme, setTheme] = useState("classic");
  const [cells, setCells] = useState(Array(25).fill(""));

  const handleCellChange = (index, value) => {
    const newCells = [...cells];
    newCells[index] = value;
    setCells(newCells);
  };

  const handleSaveBoard = async () => {
    // Implement API call to save the board
    console.log("Saving board:", { boardSize, theme, cells });
  };

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Create Custom Bingo Board</h1>
      <div className="flex space-x-4">
        <Select value={boardSize.toString()} onValueChange={(value) => setBoardSize(parseInt(value))}>
          <SelectTrigger>
            <SelectValue placeholder="Board Size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="3">3x3</SelectItem>
            <SelectItem value="4">4x4</SelectItem>
            <SelectItem value="5">5x5</SelectItem>
          </SelectContent>
        </Select>
        <Select value={theme} onValueChange={setTheme}>
          <SelectTrigger>
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="classic">Classic</SelectItem>
            <SelectItem value="osrs">OSRS</SelectItem>
            <SelectItem value="custom">Custom</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Board Preview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className={`grid grid-cols-${boardSize} gap-2`}>
            {cells.slice(0, boardSize * boardSize).map((cell, index) => (
              <Input
                key={index}
                value={cell}
                onChange={(e) => handleCellChange(index, e.target.value)}
                className="w-full h-20 text-center"
              />
            ))}
          </div>
        </CardContent>
      </Card>
      <Button onClick={handleSaveBoard}>Save Board</Button>
    </div>
  );
}