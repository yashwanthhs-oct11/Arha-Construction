"use client";
import { MaskContainer } from "./ui/MaskContainer";

export function MaskAbout() {
  return (
    <div className="relative h-[30rem] w-full flex items-center justify-center overflow-hidden p-4">
      <MaskContainer
        revealText={
          <p className="max-w-full p-4 mx-auto text-slate-800 text-center text-2xl font-bold sm:text-xl">
            We are Arha Construction, where your vision becomes reality,
            spanning from footings, foundations, and framing to interior walls,
            cabinets, flooring, millwork, pre-paint, and exterior finishes.
            Committed to unwavering craftsmanship and innovation, we craft
            exceptional constructions reflecting your unique style. Discover our
            portfolio and join us to make your dreams a reality.
          </p>
        }
        className="relative h-full w-full border rounded-md sm:h-[25rem]  transition-transform duration-500 ease-in-out"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
        <div className="relative z-10">
          We are{" "}
          <span className="text-red-500 font-bold">Arha Construction</span>,
          where your vision becomes reality, spanning from{" "}
          <span className="text-blue-500 font-bold">
            footings, foundations, and framing to interior walls
          </span>
          , cabinets, flooring, millwork, pre-paint, and exterior finishes.
          Committed to unwavering{" "}
          <span className="text-orange-500 font-bold">
            craftsmanship and innovation
          </span>
          , we craft exceptional constructions reflecting your{" "}
          <span className="text-violet-500 font-bold">unique style</span>.
          Discover our portfolio and join us to make your{" "}
          <span className="text-green-500 font-bold">dreams a reality</span>.
        </div>
      </MaskContainer>
    </div>
  );
}
