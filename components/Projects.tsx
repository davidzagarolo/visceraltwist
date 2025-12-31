"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useWindowSize } from "@/components/WindowSize";

const projects = [
  {
    title: "SDP/SI E-Store",
    description: "Magento 2 e-commerce store built on a LAMP stack, featuring a full catalog and secure checkout system. I built several new components, including an automatic SEO tool, best seller functionality, and upgraded the checkout logic. I used my skills in PHP, Javascript, and MySQL to keep the E-store running smoothly and efficiently. I learned a lot about enterprise-level e-commerce working on this project.",
    image: "/images/projects-sdpsi-shop.jpg",
    url: "https://shop.sdp-si.com/"
  },
  {
    title: "92nd Street Y",
    description: "Custom PHP and JavaScript website for a cultural and community center, offering event listings and membership functionality. I worked on the class scheduling system, which was built in custom Javascript and Jquery. I was also part of a site-wide redesign and rebranding, which took 92nd Street Y into the modern era with 92NY.com. This site was an exercise in both style and functionality.",
    image: "/images/projects-92ny.jpg",
    url: "https://www.92ny.org/"
  },
  {
    title: "SDP/SI",
    description: "PHP and JavaScript site with interactive features using jQuery, providing company information and service listings. I redesigned most of the site, including the home page, and worked on several of the web applications, including the center distance designer and the coupling selector. I also redid the proudcts, about, contacts, and download pages.",
    image: "/images/projects-sdpsi.jpg",
    url: "https://sdp-si.com/"
  },
  {
    title: "Resideo",
    description: "WordPress site for a global technology company, with custom themes and content management for marketing pages. I worked on many pages throughout the site, learning the codebase and how an enterprise-level Wordpress site functions with custom theming and applications.",
    image: "/images/projects-resideo.jpg",
    url: "https://www.resideo.com/us/en/"
  },
  {
    title: "Rose Fence",
    description: "WordPress website for a fencing company, featuring responsive design, product galleries, and contact forms. This is an example of my earlier freelance and agency work, building out a complete site for small businesses that meet their needs.",
    image: "/images/projects-rose.jpg",
    url: "https://rosefence.com/"
  }
];

export default function Projects() {
  const { width: windowWidth = 1200 } = useWindowSize();
  const containerRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [slides, setSlides] = useState([...projects, ...projects, ...projects]);
  const [currentIndex, setCurrentIndex] = useState(projects.length);
  const isMobile = windowWidth < 768;
  const slideMargin = 24;
  const slideWidth = isMobile ? windowWidth * 0.85 : 800;
  const centerOffset = (windowWidth - slideWidth) / 2;
  const nextSlide = () => setCurrentIndex((prev) => prev + 1);
  const prevSlide = () => setCurrentIndex((prev) => prev - 1);

  const handleDragEnd = (endX: number) => {
    if (dragStartX.current === null) return;
    const diff = dragStartX.current - endX;
    const threshold = 50;
    if (diff > threshold) nextSlide();
    else if (diff < -threshold) prevSlide();
    dragStartX.current = null;
    setTimeout(() => setIsDragging(false), 50);
  };
  
  const onMouseDown = (e: React.MouseEvent) => { dragStartX.current = e.clientX; setIsDragging(false); };
  const onTouchStart = (e: React.TouchEvent) => { dragStartX.current = e.touches[0].clientX; setIsDragging(false); };
  const onTouchEnd = (e: React.TouchEvent) => { handleDragEnd(e.changedTouches[0].clientX); };

  useEffect(() => {
    const handleGlobalMouseUp = (e: MouseEvent) => { if (dragStartX.current !== null) handleDragEnd(e.clientX); };
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (dragStartX.current !== null) {
        if (Math.abs(dragStartX.current - e.clientX) > 10) setIsDragging(true);
      }
    };
    window.addEventListener("mouseup", handleGlobalMouseUp);
    window.addEventListener("mousemove", handleGlobalMouseMove);
    return () => {
      window.removeEventListener("mouseup", handleGlobalMouseUp);
      window.removeEventListener("mousemove", handleGlobalMouseMove);
    };
  }, [currentIndex]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (currentIndex + 2 >= slides.length) setSlides((prev) => [...prev, ...projects]);
    if (currentIndex < 2) {
      setSlides((prev) => [...projects, ...prev]);
      setCurrentIndex((prev) => prev + projects.length);
    }
  }, [currentIndex, slides.length]);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.style.transition = "transform 0.5s cubic-bezier(0.2, 0, 0, 1)";
    
    const xPosition = -(currentIndex * (slideWidth + slideMargin)) + centerOffset;
    containerRef.current.style.transform = `translateX(${xPosition}px)`;
  }, [currentIndex, slideWidth, centerOffset]);

  return (
    <section id="projects" className="w-full h-screen py-24 bg-gray-900 relative select-none overflow-hidden">
      <h2 className="text-6xl font-bold text-white mb-12 text-center">Projects</h2>

      <button onClick={prevSlide} className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 bg-gray-800/80 text-white p-2 rounded-full hover:bg-gray-700 text-4xl md:text-6xl">
        <div style={{ transform: "translateY(-8%)" }}>&#8249;</div>
      </button>
      <button onClick={nextSlide} className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 bg-gray-800/80 text-white p-2 rounded-full hover:bg-gray-700 text-4xl md:text-6xl">
        <div style={{ transform: "translateY(-8%)" }}>&#8250;</div>
      </button>

      <div 
        className="cursor-grab active:cursor-grabbing w-full"
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          ref={containerRef}
          className="flex items-center"
          style={{ pointerEvents: isDragging ? 'none' : 'auto' }} 
        >
          {slides.map((project, i) => (
            <div
              key={i}
              className="shrink-0 transition-opacity duration-500"
              style={{ 
                width: slideWidth, 
                marginRight: slideMargin,
                opacity: i === currentIndex ? 1 : 0.4
              }}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => { if (isDragging) e.preventDefault(); }}
                className="block bg-gray-800 rounded-xl overflow-hidden pointer-events-auto shadow-2xl"
              >
                <div className="h-64 md:h-110 w-full relative">
                  <Image src={project.image} alt={project.title} fill className="object-cover" draggable={false} />
                </div>
                <div className="p-6 bg-gray-800 text-white min-h-50">
                  <h3 className="text-xl md:text-2xl font-bold">{project.title}</h3>
                  <p className="mt-2 text-xs md:text-base opacity-70 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}