"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/TextRevealCard";
import { Spotlight } from "./ui/Spotlight";

export function HeroTextMagic() {
  return (
    <div className="flex justify-center items-center z-10">
      <TextRevealCard
        text="Lose Yourself in the Art of Construction"
        revealText=" Find Your Purpose with Arha Constructions"
      ></TextRevealCard>
    </div>
  );
}
