import About from "@/components/About";
import { Gallery } from "@/components/Gallery";
import Hero from "@/components/Hero";
import { Boxes, BoxesCore } from "@/components/ui/BoxesCore";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full relative z-10">
        <FloatingNav navItems={navItems} />
        <BoxesCore />
        <Hero />
        <About />
        <Gallery />
      </div>
    </main>
  );
}
