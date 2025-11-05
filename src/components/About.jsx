import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

const About = () => {
  const textRef = useRef(null);
  const aboutRef = useRef(null);
  const titleRef = useRef(null);
  const textDivRef = useRef(null);
  const greenDotRef = useRef(null);
  const logosRef = useRef(null);
  const peregraphRef = useRef(null);
  const mainRef = useRef(null);
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const letters = titleRef.current.querySelectorAll("span");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 60%", // animation starts when section enters viewport
        toggleActions: "restart restart restart none",
        // ↑ means: play once on enter, don't repeat on scroll back
        markers: false, // remove this later
      },
    });

    // Animate text heading
    tl.from(textRef.current, {
      opacity: 0,
      y: 50,
      scale: 1.2,
      duration: 0.6,
      ease: "power2.out",
      filter: "blur(10px)",
    });

    // Animate each letter in sequence
    tl.fromTo(
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
      },
      "-=0.3"
    );
    //disaper
    gsap.to(textDivRef.current, {
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      y: -200,
      ease: "back.out",
    });
    //greenDot
    gsap.to(greenDotRef.current, {
      scale: 7,
      opacity: 0,
      delay: 2,
      duration: 1.3,
      repeat: -1,
      yoyo: false,
    });
    //logo animation
    gsap.to(logosRef.current, {
      xPercent: -50,
      repeat: -1,
      duration: 25,
      ease: "none",
    });

    const maintl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "center center",
        end: "+=700",
        pinSpacing: true,
        pin: mainRef.current,
        toggleActions: "play none play reverse",
      },
    });

    maintl.to(textDivRef.current, {
      yPercent: -100,
      duration: 1,
      ease: "power2.inOut",
    });
    maintl
      // Line 1 highlight
      .to("#line1", { color: "#707070", duration: 0.1, ease: "power4.out" })
      // Line 1 back to gray, Line 2 highlight
      .to("#line1", { color: "#ffffff", duration: 0.1, ease: "power4.out" })
      .to("#line2", { color: "#ffffff", duration: 0.1, ease: "power4.out" })
      // Line 2 back to gray, Line 3 highlight
      .to("#line2", { color: "##707070", duration: 0.1, ease: "power4.out" })
      .to("#line3", { color: "#ffffff", duration: 0.1, ease: "power4.out" });
  }, []);

  //logos
  const logos = [
    "axn",
    "dhl",
    "dm",
    "hbo",
    "loreal",
    "merck",
    "star",
    "vodafone",
    "yara",
  ];

  return (
    <div ref={aboutRef} className="about h-full w-screen bg-black">
      <div className=" pl-20 pt-35">
        <div ref={textDivRef}>
          <p
            ref={textRef}
            className="pb-5 text-2xl font-bold bg-linear-to-b from-pink-600     to-blue-600 bg-clip-text text-transparent animate-gradient-x"
          >
            Hi, I'm Gyöngy
          </p>
          <div
            ref={titleRef}
            className="text-[80px] space-x-2.5 text-white leading-none flex tracking-tight"
          >
            <span className="font-thin">V</span>
            <span className="font-extralight">I</span>
            <span className="font-light">S</span>
            <span className="font-normal">U</span>
            <span className="font-medium">A</span>
            <span className="font-semibold">L</span>
            <span className="font-bold pl-5">D</span>
            <span className="font-extrabold">E</span>
            <span className="font-black">S</span>
            <span className="font-black">I</span>
            <span className="font-black">G</span>
            <span className="font-black">N</span>
            <span className="font-black">E</span>
            <span className="font-black">R</span>
          </div>
        </div>
        <div ref={mainRef} className="pt-25">
          <div className="flex flex-row justify-between pl-50 pr-100 items-center">
            <div className="flex items-center gap-9">
              <img
                className="h-30 w-30 rounded-full"
                src="https://framerusercontent.com/images/FdSvnaCnrFIBEkT78qa1MVb9ME.png?width=500&height=505"
              />
              <div>
                <div className="flex items-center gap-4 justify-center">
                  <div className="bg-green-500 h-2 w-2 rounded-full">
                    <img
                      ref={greenDotRef}
                      src="/assets/circle.svg"
                      className="text-green-500"
                    />
                  </div>
                  <p className="text-white pb-1 opacity-55 text-sm">
                    open to create
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-5 h-13 w-13 opacity-50 ">
              <img src="https://framerusercontent.com/images/uMLlm5CiNgjx3hyfiA6c1KmJmoo.png" />
              <img src="https://framerusercontent.com/images/801ESF8qsdY28Az0my3MNUOSS0.png" />
            </div>
          </div>
          <div
            ref={peregraphRef}
            className="text-white pl-50 pr-80 text-2xl pt-10 leading-12"
          >
            <p>
              <span className=" text-gray-500 " id="line1">
                With 15+ years in visual design, I am dedicated to creating user
                interfaces that balance functionality and aesthetics.
              </span>
              <span className="text-gray-500" id="line2">
                Shaping design systems and overseeing design processes with a
                DesignOps mindset has deepened my focus on building consistent,
                scalable solutions, and efficient workflows across projects.
              </span>
              <span className="text-gray-500" id="line3">
                While I bring my own clean design per spective and a strong
                focus on usability and accessibility, I’m highly{" "}
              </span>
            </p>
          </div>
          <div className="relative overflow-hidden w-full mt-16 pb-20">
            <div className="absolute left-0 top-0 h-full w-100  bg-linear-to-r from-black to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 h-full w-100 bg-linear-to-l from-black to-transparent pointer-events-none z-10"></div>
            <div
              ref={logosRef}
              className="flex gap-20 items-center w-max opacity-50"
            >
              {[...logos, ...logos].map((logo, index) => (
                <img
                  key={index}
                  src={`/assets/${logo}.svg`}
                  alt={logo}
                  className="h-6 w-auto object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
