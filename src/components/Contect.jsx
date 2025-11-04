import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Contect = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;

    // duplicate the text content for seamless looping
    text.innerHTML += text.innerHTML;

    gsap.to(text, {
      xPercent: -50, // move halfway (since we doubled text)
      repeat: -1, // infinite loop
      ease: "none",
      duration: 20, // speed of scrolling — smaller = faster
    });
  }, []);

  return (
    <div className="footer bg-linear-to-r from-[rgb(156,111,252)] to-[rgb(248,91,225)] min-h-screen w-screen flex flex-col items-center justify-center text-white px-8 py-16 overflow-hidden">
      {/* Title & Icons */}
      <div className="flex flex-col md:flex-row w-full max-w-6xl justify-between items-center mb-16 z-10">
        <h2 className="text-6xl font-bold tracking-wide text-black mb-8 md:mb-0">
          <span className="font-thin">C</span>
          <span className="font-extralight">O</span>
          <span className="font-light">N</span>
          <span className="font-normal">T</span>
          <span className="font-medium">A</span>
          <span className="font-semibold">C</span>
          <span className="font-bold">T</span>
        </h2>

        {/* Social Icons */}
        <div className="flex gap-6 md:gap-10 items-center justify-center">
          {[
            { src: "/assets/r.png" },
            { src: "/assets/r1.png" },
            { src: "/assets/hbo.svg" },
            { src: "/assets/dm.svg" },
          ].map((icon, i) => (
            <div
              key={i}
              className="relative flex items-center justify-center group"
            >
              <img
                className="h-16 w-16 transition-transform duration-300 group-hover:scale-110"
                src="/assets/circle.svg"
                alt="Circle"
              />
              <img
                className="h-8 w-8 absolute transition-transform duration-300 group-hover:rotate-12"
                src={icon.src}
                alt={`Icon ${i}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <form className="w-full max-w-3xl bg-white/10 backdrop-blur-md rounded-2xl p-10 shadow-lg flex flex-col gap-6 z-10">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-sm uppercase tracking-wide mb-2 text-gray-200">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="px-4 py-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm uppercase tracking-wide mb-2 text-gray-200">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="px-4 py-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-sm uppercase tracking-wide mb-2 text-gray-200">
            Message
          </label>
          <textarea
            rows="5"
            placeholder="Write your message..."
            className="px-4 py-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
          ></textarea>
        </div>

        <button
          type="submit"
          className="mt-4 px-8 py-3 bg-white text-pink-600 font-semibold rounded-md hover:bg-pink-100 transition-all duration-300 self-start"
        >
          Send Message
        </button>
      </form>

      {/* Moving Text */}
      <div className="absolute bottom-10 w-full overflow-hidden">
        <p
          ref={textRef}
          className="text-[200px] font-extrabold whitespace-nowrap opacity-30"
        >
          GET IN TOUCH — GET IN TOUCH — GET IN TOUCH — GET IN TOUCH —
        </p>
      </div>
    </div>
  );
};

export default Contect;
