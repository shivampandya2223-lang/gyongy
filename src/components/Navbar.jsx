import { Link } from "react-scroll";
import { FaHome, FaBars } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Hide navbar on scroll to #about
    gsap.to(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#about",
        start: "top 10%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full backdrop-blur-md text-white flex items-center justify-between px-6 sm:px-10 py-4 z-50"
    >
      {/* --- Left: Logo Section --- */}
      <div className="relative flex items-center justify-center group">
        <div className="relative h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 flex items-center justify-center pr-5 sm:pr-7 2xl:h-20">
          <img
            src="/assets/logo.svg"
            alt="Logo"
            className="h-full w-full object-cover rounded-full transition-all duration-700 ease-[cubic-bezier(0.20,0.1,0.20,1)] 
             drop-shadow-[0_0_30px_rgba(236,72,153,0.7)] group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]"
          />
          <FaHome className="absolute text-white text-lg sm:text-xl md:text-2xl opacity-90 transition-all duration-700 group-hover:scale-110" />
        </div>

        <div className="absolute flex flex-row items-center gap-1 sm:gap-2 text-center transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:translate-x-10 sm:group-hover:translate-x-14 2xl:h-20">
          <img
            src="/assets/circle.svg"
            alt="Circle"
            className="h-8 w-8 sm:h-10 sm:w-10 object-contain transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:rotate-25"
          />
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide text-white transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:text-pink-200">
            <span className="font-medium">G</span>
            <span className="font-normal">E</span>
            <span className="font-light">N</span>
            <span className="font-extralight">A</span>
            <span className="font-thin">I</span>
          </h1>
        </div>
      </div>

      {/* --- Right: Menu --- */}
      <div className="hidden md:flex items-center gap-6 lg:gap-10 2xl:gap-50 2xl:text-5xl text-base lg:text-lg ">
        {[
          { name: "About", to: "about" },
          { name: "Services", to: "services" },
          { name: "Portfolio", to: "portfolio" },
          { name: "Experience", to: "experience" },
        ].map((item, i) => (
          <Link
            key={i}
            to={item.to}
            smooth={true}
            duration={600}
            offset={-80}
            className="cursor-pointer hover:text-pink-500  transition"
          >
            {item.name}
          </Link>
        ))}

        <Link
          to="footer"
          smooth={true}
          duration={600}
          offset={1000}
          className="cursor-pointer px-4 py-2 rounded-full bg-linear-to-r from-pink-600 to-blue-600 hover:opacity-90 transition font-semibold text-sm sm:text-base 2xl:text-4xl 2xl:py-8 2xl:px-12 2xl:m-2"
        >
          Contact
        </Link>
      </div>

      {/* --- Mobile Menu Toggle --- */}
      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FaBars />
      </button>

      {/* --- Mobile Menu --- */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/80 backdrop-blur-md flex flex-col items-center gap-6 py-6 text-lg transition-all duration-500 md:hidden">
          {[
            { name: "About", to: "about" },
            { name: "Services", to: "services" },
            { name: "Portfolio", to: "portfolio" },
            { name: "Experience", to: "experience" },
          ].map((item, i) => (
            <Link
              key={i}
              to={item.to}
              smooth={true}
              duration={600}
              offset={-80}
              className="cursor-pointer hover:text-pink-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <Link
            to="footer"
            smooth={true}
            duration={600}
            offset={1000}
            className="cursor-pointer px-6 py-2 rounded-full bg-linear-to-r from-pink-600 to-blue-600 hover:opacity-90 transition font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
