// src/components/AnimatedText.jsx
import { useRef, useEffect } from "react";
import gsap from "gsap";

const AnimatedText = ({ text, className = "" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const letters = containerRef.current.querySelectorAll("span");

    gsap.fromTo(
      letters,
      {
        opacity: 0,
        scale: 2,
        y: 40,
        filter: "blur(10px)",
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        filter: "blur(0px)",
        stagger: 0.06,
        duration: 0.8,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div ref={containerRef} className={`flex flex-wrap ${className}`}>
      {text.split("").map((char, i) => (
        <span key={i}>{char === " " ? "\u00A0" : char}</span>
      ))}
    </div>
  );
};

export default AnimatedText;
