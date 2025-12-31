import React from "react";
import Hero from "@/components/Hero";
import SkylineAnimation from "@/components/SkylineAnimation/SkylineAnimation";
import Navbar from  "@/components/Navbar";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <header className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </header>
      <div className="relative min-h-screen">
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        { /*   <SkylineAnimation /> */ }
        </div>
        <div className="relative inset-0 z-10">
          <Hero />
        </div>
      </div>
      <div className="relative">
        <div className="relative min-h-screen z-11">
          <About />
        </div>
        <div className="relative min-h-screen z-11">
          <Projects />
        </div>
        <div className="relative min-h-screen z-11">
          <Contact />
        </div>
      </div>
    </main>
  );
}
