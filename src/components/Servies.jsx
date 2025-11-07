import React from "react";

const Servies = () => {
  return (
    <section className="min-h-screen w-full bg-[#1c1c1c] flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:bottom-0 lg:px-20 py-20 overflow-hidden">
      {/* --- Left Text Block --- */}
      <div className="flex flex-col gap-4 mb-10 lg:mb-0 lg:w-1/3 text-center lg:text-left">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white pb-4 leading-snug">
          Have a project in mind or just want to say hi?
        </h1>
        <p className="text-gray-400 text-sm sm:text-base md:text-lg">
          Drop me a message, I’d love to hear from you!
        </p>
      </div>

      {/* --- Middle Image --- */}
      <div className="flex justify-center lg:w-1/3 mb-10 lg:mb-0">
        <img
          className="h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] w-auto rounded-tl-[50px] lg:rounded-tl-[80px] object-cover shadow-lg"
          src="https://framerusercontent.com/images/KdaILJvS1jL1oh2kM3azBIKN3k.png?lossless=1&width=1792&height=2688"
          alt="Project Preview"
        />
      </div>

      {/* --- Right Text Block --- */}
      <div className="flex flex-col gap-4 text-center lg:text-left lg:w-1/3">
        <p className="text-white text-xl sm:text-2xl md:text-3xl font-medium">
          Why me?
        </p>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
          Because I bring a{" "}
          <span className="text-white font-semibold">
            multidisciplinary background
          </span>{" "}
          that bridges development, UX, UI design, and accessibility. This
          diverse experience helps me understand different perspectives and
          collaborate effectively across teams.
        </p>
        <p className="text-gray-500 text-sm sm:text-base md:text-lg">
          I enjoy hands-on design just as much as strategic thinking and
          technical problem-solving.
        </p>
      </div>
    </section>
  );
};

export default Servies;
