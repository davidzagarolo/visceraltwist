// components/Hero.tsx
"use client";

const Hero = () => {
  return (
    <section className="relative flex h-screen w-full z-10 flex-col lg:flex-row items-center justify-between px-8 lg:px-20" id="hero">
      <div className="flex-1 space-y-6 text-center md:text-left flex py-6 flex-col justify-center pt-24 lg:pt-0">
        <div className="h-full rounded-3xl bg-black/50 backdrop-blur-xl border border-white/20 shadow-xl px-10 py-12 flex flex-col justify-center">
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 text-shadow">Hi, my name is Dave!</h1>
          <p className="text-lg md:text-3xl text-white font-roboto mb-2 text-shadow">I&apos;m a Frontend &amp; Fullstack Developer from New York.</p>
          <a href="#projects" className="">
            <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">View Projects</button>
          </a>
        </div>
      </div>
      <div className="flex-1  mt-12 md:mt-0 flex justify-center">
        <div className="w-80 h-80 md:w-96 md:h-96 relative"></div>
      </div>
    </section>
  );
};

export default Hero;
