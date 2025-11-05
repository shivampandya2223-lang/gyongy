import { Link } from "react-scroll";
import { FaHome } from "react-icons/fa";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    // Animate navbar when second component (About section) reaches 50%
    gsap.to(navRef.current, {
      y: -100, // move up
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#about", // the section id of your 2nd component
        start: "top 10%", // when About section is 50% into view
        toggleActions: "play none none reverse",
      },
    });
  }, []);
  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full backdrop-blur-md text-white flex items-center justify-between px-10 py-4 z-10"
    >
      {/* --- Left: Logo --- */}
      <div className="relative flex items-center justify-center group">
        {/* --- Base Layer: Logo + Home Icon --- */}
        <div className="relative h-20 w-20 flex items-center justify-center pr-7">
          {/* Logo (bottom layer) */}
          <img
            src="/assets/logo.svg"
            alt="Logo"
            className="h-full w-full object-cover rounded-full transition-all duration-700 ease-[cubic-bezier(0.20,0.1,0.20,1)] 
               drop-shadow-[0_0_40px_rgba(236,72,153,0.7)] group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]"
          />

          {/* Home Icon (middle layer) */}
          <FaHome
            className="absolute text-white text-2xl opacity-90 transition-all duration-700 
                  group-hover:scale-110"
          />
        </div>

        {/* --- Top Layer: Circle + Text --- */}
        <div
          className="absolute flex flex-row items-center gap-2  text-center transition-all duration-700 
                  ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:translate-x-14"
        >
          {/* Circle above logo */}
          <img
            src="/assets/circle.svg"
            alt="Circle"
            className="h-12 w-12 object-contain transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:rotate-25"
          />

          {/* Text under circle */}
          <h1
            className="text-2xl font-bold tracking-wide text-white transition-all duration-700 
                   ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:text-pink-200"
          >
            <span className="font-medium">G</span>
            <span className="font-normal">E</span>
            <span className="font-light">N</span>
            <span className="font-extralight">A</span>
            <span className="font-thin">I</span>
          </h1>
        </div>
      </div>

      {/* --- Right: Menu --- */}
      <div className="flex items-center gap-10 text-lg">
        <Link
          to="about"
          smooth={true}
          duration={600}
          offset={-80} // adjust for fixed navbar height
          className="cursor-pointer hover:text-pink-500 transition"
        >
          About
        </Link>
        <Link
          to="services"
          smooth={true}
          duration={600}
          offset={-80}
          className="cursor-pointer hover:text-pink-500 transition"
        >
          Services
        </Link>
        <Link
          to="portfolio"
          smooth={true}
          duration={600}
          offset={-80}
          className="cursor-pointer hover:text-pink-500 transition"
        >
          Portfolio
        </Link>
        <Link
          to="experience"
          smooth={true}
          duration={600}
          offset={-80}
          className="cursor-pointer hover:text-pink-500 transition"
        >
          Experience
        </Link>

        {/* --- Contact Button --- */}
        <Link
          to="footer"
          smooth={true}
          duration={600}
          offset={1000}
          className="cursor-pointer px-5 py-2 rounded-full bg-linear-to-r from-pink-600 to-blue-600 hover:opacity-90 transition font-semibold"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
