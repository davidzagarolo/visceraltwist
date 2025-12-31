"use client";
import { useState, useRef, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && menuButtonRef.current && !menuButtonRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])  

  return (
    <header
    className={`fixed top-0 left-0 w-full z-50 transition-colors duration-1000 ${
      scrolled ? "bg-black border-b border-neutral-200 bg-opacity-90 shadow-md" : "bg-transparent"
    }`}
    >
    <nav className="flex items-center justify-between px-8 md:px-20 py-4">
      <button
      ref={menuButtonRef}
        onClick={toggleMenu}
        className="flex flex-col z-40 justify-center items-center gap-1 w-8 h-8 md:w-10 md:h-10"
      >
        <span
            className={`block w-full h-1.5 bg-white rounded-full transition-transform duration-300 ${
            menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
        ></span>
        <span
            className={`block w-full h-1.5 bg-white rounded-full transition-opacity duration-300 ${
            menuOpen ? "opacity-0" : "opacity-100"
            }`}
        ></span>
        <span
            className={`block w-full h-1.5 bg-white rounded-full transition-transform duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-3" : ""
            }`}
        ></span>
      </button>

      <a
        href="mailto:davidzagarolo@gmail.com"
        className="px-6 max-w-80 py-2 border border-white rounded-lg text-white hover:bg-white hover:text-black transition"
      >
        Email Me: davidzagarolo@gmail.com
      </a>

        <div
        ref={menuRef}
        className={`fixed top-0 left-0 h-full w-72 bg-black border-r border-neutral-200 text-white shadow-lg transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        >
        <ul className="flex flex-col pt-32 p-8 gap-6 text-xl">
          <li>
            <a href="#hero" onClick={toggleMenu}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={toggleMenu}>About</a>
          </li>
          <li>
            <a href="#projects" onClick={toggleMenu}>Projects</a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>Contact</a>
          </li>
        </ul>
        </div>

    </nav>
    </header>
  );
}
