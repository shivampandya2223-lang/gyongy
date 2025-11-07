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
        end: "+=800",
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

      .to("#line1", { color: "#ffffff", ease: "expo.inOut" })
      // Line 1 back to gray, Line 2 highlight
      .to("#line1", { color: "#707070", ease: "expo.inOut" })
      .to("#line2", { color: "#ffffff", ease: "expo.inOut" })
      // Line 2 back to gray, Line 3 highlight
      .to("#line2", { color: "#707070", ease: "expo.inOut" })
      .to("#line3", { color: "#ffffff", ease: "expo.inOut" });
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
    <div ref={aboutRef} className="about h-full w-screen bg-black ">
      <div className="pl-6 pr-4 lg:pl-20 sm:pl-20 sm:pr-20 lg:pt-35 md:pt-3 2xl:pb-40">
        <div ref={textDivRef}>
          <p
            ref={textRef}
            className="lg:pb-5 lg:text-2xl font-bold bg-linear-to-b from-pink-600  to-blue-600 bg-clip-text text-transparent animate-gradient-x md:text-[20px]"
          >
            Hi, I'm Gyöngy
          </p>
          <div
            ref={titleRef}
            className="hidden lg:text-[80px] md:text-[30px] space-x-2.5 sm:text-white leading-none lg:flex md:flex tracking-tight"
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
          <div className="flex flex-row justify-between lg:pl-50 lg:pr-100  md:pr-50 items-center">
            <div className="flex items-center gap-9">
              <img
                className="h-14 w-14 lg:h-30 lg:w-30  md:h-15 md:w-15 sm:h-12 sm:w-12  rounded-full"
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
            <div className="lg:flex hidden md:flex  h-10 w-10 gap-5 lg:h-13 lg:w-13 md:h-9 md:w-9  opacity-50 ">
              <img src="https://framerusercontent.com/images/uMLlm5CiNgjx3hyfiA6c1KmJmoo.png" />
              <img src="https://framerusercontent.com/images/801ESF8qsdY28Az0my3MNUOSS0.png" />
            </div>
          </div>
          <div
            ref={peregraphRef}
            className="sm:text-white lg:pl-50 lg:pr-80 lg:text-2xl  lg:pt-10  lg:leading-12 "
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
          <div className="relative overflow-hidden w-full mt-16 lg:pb-20">
            <div className="absolute left-0 top-0 h-full w-100  bg-linear-to-r from-black/80 to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 h-full w-100 bg-linear-to-l from-black/80 to-transparent pointer-events-none z-10"></div>
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
