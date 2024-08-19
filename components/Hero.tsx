import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { BoxesCore } from "./ui/BoxesCore";
import { HeroTextMagic } from "./HeroTextMagic";
import { HeroDock } from "./HeroDock";
import { Jura } from "next/font/google";

const jura = Jura({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const Hero = () => {
  return (
    <div className="pb-20 pt-30 mt-20 h-[45rem]" id="home">
      <div className="flex flex-col justify-center items-center z-20">
        <img
          src="./arha_logo_trans.png"
          alt="logo"
          className="w-[23vh] h-[10vh] z-10"
        />
      </div>
      <div>
        <Spotlight
          className="-top-1 -right-80 md:-right-32 md:-top-20 h-screen z-20"
          fill="white"
        />{" "}
        <Spotlight
          className="-top-1 -left-80 md:-left-32 md:-top-20 h-screen z-20"
          fill="pink"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight
          className="-top-1 -right-80 h-[80vh] w-[50vw] z-20"
          fill="blue"
        />
      </div>
      <BoxesCore />

      <div className="flex flex-col justify-center items-center mt-10 z-9">
        <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 z-10 max-w-80">
          Master the art of building
        </h2>
        <HeroTextMagic />
        <p
          className={`${jura.className} text-center text-white-200 mb-4 text-xs md:text-lg lg:text-[1rem] z-10`}
        >
          <span className="font-light">Welcome to Arha Construction,</span>
          <span className="font-normal">
            where we bring your vision to life.
            <br />
          </span>
          <span className="font-medium">
            With a commitment to craftsmanship and a passion for innovation,
          </span>
          <span className="font-semibold">
            we create interiors that reflect your unique style.
            <br />
          </span>
          <span className="font-bold">
            Explore our world of interior construction,
          </span>
          <span className="font-extrabold">
            where every project is a masterpiece in the making.
          </span>
        </p>
        <div className="mt-23 pt-16">
          <HeroDock />
        </div>
      </div>
    </div>
  );
};

export default Hero;
