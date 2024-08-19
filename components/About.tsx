import React from "react";
import { MaskAbout } from "./MaskAbout";
import { Jura } from "next/font/google";

const jura = Jura({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const About = () => {
  return (
    <section id="about" className="p-4 sm:p-2">
      <div className="flex justify-center z-50 items-center flex-col">
        <h1
          className={`${jura.className} md:text-5xl text-3xl lg:text-5xl font-bold text-center text-white z-20`}
        >
          About us
        </h1>
        <div className="w-[40rem] relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        </div>
        <MaskAbout />
      </div>
    </section>
  );
};

export default About;
