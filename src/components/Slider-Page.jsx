import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
const SliderPage = () => {
  const sliderRef = useRef(null);
  const videoSlider = useRef(null);
  const slider3Ref = useRef(null);
  const slider1 = [
    { src: "img1.png" },
    { src: "img2.png" },
    { src: "img3.png" },
    { src: "img4.png" },
    { src: "img5.png" },
    { src: "img6.png" },
    { src: "img7.png" },
    { src: "img8.png" },
    { src: "img9.png" },
    { src: "img10.png" },
    { src: "img11.png" },
    { src: "img12.png" },
  ];
  const slider2 = [
    { src: "v1.mp4" },
    { src: "v2,pm4" },
    { src: "v3.mp4" },
    { src: "v4.mp4" },
    { src: "v5.mp4" },
    { src: "v6.mp4" },
    { src: "v7.mp4" },
    { src: "v8.mp4" },
    { src: "v9.mp4" },
    { src: "v10.mp4" },
    { src: "v11.mp4" },
    { src: "v12.mp4" },
  ];
  const slider3 = [
    { src: "im1.png" },
    { src: "im2.png" },
    { src: "im3.png" },
    { src: "im4.png" },
    { src: "im5.png" },
    { src: "im6.png" },
    { src: "im7.png" },
    { src: "im8.png" },
    { src: "im9.png" },
    { src: "im10.png" },
    { src: "im11.png" },
    { src: "im12.png" },
  ];
  useGSAP(() => {
    const sliders = [
      { ref: sliderRef, direction: "left", duration: 65 },
      { ref: videoSlider, direction: "right", duration: 75 },
      { ref: slider3Ref, direction: "left", duration: 65 },
    ];

    sliders.forEach(({ ref, direction, duration }) => {
      const el = ref.current;
      if (!el) return;

      const totalWidth = el.scrollWidth;
      const viewportWidth = window.innerWidth;
      const startX = direction === "left" ? 0 : -(totalWidth - viewportWidth);
      const endX = direction === "left" ? -(totalWidth - viewportWidth) : 0;

      // Create infinite loop animation
      const tl = gsap.fromTo(
        el,
        { x: startX },
        {
          x: endX,
          duration,
          ease: "none",
          repeat: -1,
          paused: true,
        }
      );

      ScrollTrigger.create({
        trigger: el,
        start: "top 90%",
        onEnter: () => tl.play(),
        onLeaveBack: () => tl.pause(),
      });
    });
  });
  return (
    <div className="portfolio overflow-x-hidden bg-black h-full w-screen">
      <div className="flex flex-col gap-12 pt-50">
        {/* first slider */}
        <div className="relative h-full w-full  flex items-center justify-center bg-black   ">
          <div ref={sliderRef} className="  w-full flex flex-row gap-4  p-4 ">
            {[...slider1, ...slider1].map((item, index) => (
              <div key={index} className="h-[350px] w-[350px] shrink-0 ">
                <img
                  src={`/assets/${item.src}`}
                  alt={`slide-${index}`}
                  className="h-full w-full object-cover "
                />
              </div>
            ))}
          </div>
          <div className="absolute h-full w-[20%] lg:w-[60%] 2xl:w-[70%] md:w-[50%] sm:w-[10%] flex items-center  bg-linear-to-r from-black via-black to-transparent z-10 left-0 text-white">
            <div className="pl-2 lg:pl-20 2xl:pl-30 md:pl-10">
              <h1 className="text-2xl lg:text-6xl 2xl:text-9xl md:text-2xl sm:text-2xl   text-white">
                UXUI
              </h1>
              <div className="flex flex-row gap-1 w-full whitespace-nowrap items-center">
                <p className="hidden md:flex lg:flex 2xl:flex lg:text-sm 2xl:text-xl  md:text-[8px] text-gray-400">
                  Explore my journey with UXUI
                </p>
                <img src="/assets/line.svg" alt="line" className="h-6 w-full" />
              </div>
            </div>
          </div>
        </div>
        {/* slider video 2 */}
        <div className="relative min-h-full w-full  flex items-center justify-center bg-black   ">
          <div ref={videoSlider} className="  w-full flex flex-row gap-4  p-4 ">
            {[...slider2, ...slider2, ...slider2, ...slider2].map(
              (item, index) => (
                <div key={index} className="h-[350px] w-[350px] shrink-0 ">
                  <video
                    src={`/assets/${item.src}`}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover rounded-2xl"
                  />
                </div>
              )
            )}
          </div>
          <div className="absolute h-full w-[20%] lg:w-[60%] 2xl:w-[70%] md:w-[50%] sm:w-[10%] flex items-center pt-10 justify-end bg-linear-to-l from-black via-black to-transparent z-10 right-0 top-0 text-white">
            <div className="pr-4 lg:pr-20 md:pr-10 text-right">
              <h1 className="text-2xl lg:text-6xl 2xl:text-9xl md:text-2xl text-white">
                MOTION
              </h1>
              <div className="flex flex-row-reverse gap-1 w-full whitespace-nowrap items-center">
                <p className="hidden md:flex lg:flex 2xl:flex lg:text-sm 2xl:text-xl md:text-[8px] text-gray-400">
                  Explore my journey with motion
                </p>
                <img
                  src="/assets/line.svg"
                  alt="line"
                  className="h-6 w-full transform-[scaleX(-1)]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* slider 3 */}
        <div className="relative min-h-full w-full  flex items-center justify-center bg-black  ">
          <div ref={slider3Ref} className="  w-full flex flex-row gap-4  p-4 ">
            {[...slider3, ...slider3].map((item, index) => (
              <div key={index} className="h-[350px] w-[350px] shrink-0 ">
                <img
                  src={`/assets/${item.src}`}
                  alt={`slide-${index}`}
                  className="h-full w-full object-cover "
                />
              </div>
            ))}
          </div>
          <div className="absolute h-full w-[20%] lg:w-[60%] 2xl:w-[70%] md:w-[50%] sm:w-[10%] flex items-center  bg-linear-to-r from-black via-black to-transparent z-10 left-0 text-white">
            <div className="lg:pl-20 2xl:pl-30 md:pl-10 pl-2">
              <h1 className="text-2xl lg:text-6xl 2xl:text-9xl md:text-2xl sm:text-2xl  text-white">
                GEN AI
              </h1>
              <div className="flex flex-row gap-1 w-full whitespace-nowrap items-center">
                <p className="hidden md:flex lg:flex 2xl:flex lg:text-sm 2xl:text-xl  md:text-[8px] text-gray-400">
                  Explore my journey with GENAI
                </p>
                <img
                  src="/assets/line.svg"
                  alt="line"
                  className="h-6 w-full "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderPage;
