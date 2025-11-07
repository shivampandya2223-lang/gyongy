import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Horizontalscroll = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const text = textRef.current;

      // Calculate how far the text needs to move
      const scrollWidth = text.scrollWidth - section.offsetWidth;

      gsap.to(text, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${scrollWidth}`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hidden lg:flex  h-screen bg-black text-white overflow-hidden  items-center"
    >
      <h1
        ref={textRef}
        className="text-[30vw] font-extrabold whitespace-nowrap px-[10vw]"
      >
        !! this website created in GSAP !!
      </h1>
    </section>
  );
};

export default Horizontalscroll;
