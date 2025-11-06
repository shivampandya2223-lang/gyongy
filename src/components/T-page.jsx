import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Tpage = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const bars = gsap.utils.toArray(".bar");

      const tl = gsap.timeline({ delay: 2 });

      // Step 1: Shrink height slightly
      tl.fromTo(
        bars,
        { scaleY: 1, transformOrigin: "end", delay: 5, display: "block" },
        {
          scaleY: (i) => 0.1 + i * 0.15,
          duration: 1.4,

          ease: "power4.inOut",
          stagger: 0.1,
          display: "none",
        }
      );

      // Step 2: Move fully out of the screen (down)
      tl.to(
        bars,
        {
          y: "120vh", // move beyond viewport height
          delay: 0.7,
          duration: 1.6,
          ease: "power4.inOut",
          stagger: 0.08,
        },
        "<0.3" // overlap with shrink animation
      );
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="absolute z-200 h-screen w-screen overflow-hidden flex flex-col"
    >
      <div className="bar bg-black h-[20%] w-full"></div>
      <div className="bar bg-black h-[20%] w-full"></div>
      <div className="bar bg-black h-[20%] w-full"></div>
      <div className="bar bg-black h-[20%] w-full"></div>
      <div className="bar bg-black h-[20%] w-full"></div>
    </div>
  );
};

export default Tpage;
