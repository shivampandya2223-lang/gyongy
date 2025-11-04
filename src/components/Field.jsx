import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Field = () => {
  const sliderRef = useRef(null);
  const lineRef = useRef(null);

  useGSAP(() => {
    const el = sliderRef.current;
    if (!el) return;

    // Infinite logo slider
    gsap.fromTo(
      el,
      { xPercent: 0 },
      { xPercent: -50, duration: 25, ease: "none", repeat: -1 }
    );

    // Scroll-based line animation
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const direction = currentScroll > lastScroll ? "down" : "up";
      lastScroll = currentScroll;

      const line = lineRef.current;
      if (!line) return;

      if (direction === "down") {
        gsap.to(line, {
          top: "calc(100% - 2.5rem)",
          duration: 0.2,
          ease: "none",
        });
      } else {
        gsap.to(line, { top: "0%", duration: 0.2, ease: "none" });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const tools = [
    {
      name: "ChatGPT",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
    },
    {
      name: "Figma",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    },
    {
      name: "Framer",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framer/framer-original.svg",
    },
    {
      name: "Adobe",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Adobe_Corporate_Logo.png/640px-Adobe_Corporate_Logo.png",
    },
    {
      name: "Midjourney",
      logo: "https://seeklogo.com/images/M/midjourney-logo-1A21C3A3A6-seeklogo.com.png",
    },
  ];

  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center">
      <div className="h-[450px] w-[90%] flex flex-row items-start justify-center">
        {/* Left border with vertical line */}
        <div className="relative h-full w-[30%] border-r border-gray-600 flex justify-end pr-4">
          <img
            ref={lineRef}
            src="/assets/line.svg"
            alt="line"
            className="absolute top-0 right-[3px] h-9 object-contain opacity-50"
          />
        </div>

        {/* Right side */}
        <div className="h-full w-[70%] text-gray-400 flex flex-col justify-center pl-10 text-lg space-y-10">
          <ul className="space-y-3">
            {[
              "Visual UI Design",
              "UX Design",
              "Design System",
              "Accessibility",
              "Generative AI",
              "Motion & Interaction",
              "Touchscreen Design",
            ].map((item, index) => (
              <li
                key={index}
                className="relative cursor-pointer w-fit transition-all duration-300 ease-in-out 
    hover:text-white hover:scale-110
    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 
    after:bg-linear-to-r after:from-blue-600 after:to-pink-600 
    hover:after:w-[200%] after:transition-all after:duration-300"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Logo slider */}
          <div className="overflow-hidden w-full relative mt-6">
            <div
              ref={sliderRef}
              className="flex flex-row gap-6 items-center w-[200%]"
            >
              {[...tools, ...tools].map((tool, index) => (
                <div
                  key={index}
                  className="flex flex-row gap-2 items-center justify-center text-center min-w-[150px]"
                >
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="h-14 w-14 object-contain mb-2 bg-white rounded-xl p-2"
                  />
                  <p className="text-sm text-gray-300">{tool.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Field;
