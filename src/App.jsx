import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import { useGSAP } from "@gsap/react";

import Hero from "./components/Hero";
import About from "./components/About";
import Servies from "./components/Servies";
import Title from "./components/Title";
import SliderPage from "./components/Slider-Page";
import Field from "./components/Field";
import Details from "./components/Details";
import Contect from "./components/Contect";
import Navbar from "./components/Navbar";
import Horizontalscroll from "./components/Horizontal-scroll";
import ScrollLine from "./components/ScrollLine";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  const navRef = useRef(null);
  useGSAP(() => {
    // Create smoother effect
    const smoother = ScrollSmoother.create({
      smooth: 3,
      effects: true,
      smoothTouch: 0.1,
      normalizeScroll: true,
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
    });
    // Pin the Hero section at the start
    ScrollTrigger.create({
      trigger: "#hero",
      pin: true,
      start: "top top",
      end: "+=100%", // keeps it pinned for one full viewport height
      pinSpacing: false, // disables the extra white space after pin
      anticipatePin: 1,
      scrub: true,
      markers: false,
    });

    // Pin footer
    ScrollTrigger.create({
      trigger: "#footer",
      pin: true,
      start: "bottom bottom",
      end: "+=100%",
      markers: false,
    });

    return () => {
      smoother.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={navRef} id="smooth-wrapper" className="h-full w-full bg-black">
      <Navbar />
      <ScrollLine />
      <div id="smooth-content" className="relative">
        <div className="content wrapper">
          {/* Each section mimics .section style */}
          <section
            id="hero"
            className="flex items-center justify-center -z-10 "
          >
            <Hero />
          </section>

          <section id="about" className=" flex items-center justify-center ">
            <About />
          </section>

          <section className="flex items-center justify-center -mt-px-1">
            <Title />
          </section>

          <section className="flex items-center justify-center  ">
            <SliderPage />
          </section>
          <section className="items-center justify-center z-60">
            <Horizontalscroll />
          </section>

          <section className="flex items-center justify-center ">
            <Field />
          </section>

          <section className="flex items-center justify-center ">
            <Details />
          </section>

          <section className="flex items-center justify-center ">
            <Servies />
          </section>
        </div>

        {/* Footer */}
        <footer
          id="footer"
          className="relative mt-[-100vh] w-full h-screen z-[-1] box-border p-0 flex items-center justify-center "
        >
          <Contect />
        </footer>
      </div>
    </div>
  );
};

export default App;
