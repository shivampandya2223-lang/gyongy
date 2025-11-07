import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const ScrollLine = () => {
  const linesRef = useRef([]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    sections.forEach((section, i) => {
      const line = linesRef.current[i];

      // Active line animation (grow leftward)
      gsap.fromTo(
        line,
        {
          width: "3rem",
          backgroundColor: "#9ca3af",
          opacity: 0.3,
          transformOrigin: "right center", // 👈 grow left
        },
        {
          width: "6rem",
          background: "rgb(156,111,252)", // flipped gradient
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );

      // Reset others when inactive
      gsap.to(line, {
        width: "3rem",
        backgroundColor: "#9ca3af",
        opacity: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "bottom center",
          end: "+=100",
          scrub: true,
        },
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div className=" hidden lg:flex fixed top-1/2 right-10 -translate-y-1/2 z-100  2xl:flex flex-col items-end gap-4">
      {[...Array(9)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (linesRef.current[i] = el)}
          className="h-0.5 w-12 bg-gray-400 opacity-30 rounded-full"
        />
      ))}
    </div>
  );
};

export default ScrollLine;
