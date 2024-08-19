"use client";
import React from "react";
import { Jura } from "next/font/google";

const jura = Jura({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export function OurWorks() {
  return (
    <div
      className="h-[10rem] w-[40rem] relative flex flex-col items-center justify-center overflow-hidden p-0 m-0"
      id="work"
    >
      <h1
        className={`${jura.className} md:text-5xl text-3xl lg:text-5xl font-bold text-center text-white z-10`}
      >
        Our Works
      </h1>
      <div className="w-[40rem] relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
      </div>
    </div>
  );
}
