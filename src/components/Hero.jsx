import Spline from "@splinetool/react-spline";
import Tpage from "./T-page";

const Hero = () => {
  return (
    <>
      <Tpage />
      <div
        id="hero"
        className="relative h-screen w-full bg-black overflow-hidden"
      >
        {/* === Background 3D Spline Scene (Right Side) === */}
        <div className="absolute  top-0 w-1/2 h-full  pointer-events-none right-0 sm:scale-75 ">
          <Spline
            scene="https://prod.spline.design/aNGDIMdNaJW38uXu/scene.splinecode"
            className=""
          />
        </div>

        {/* === Text Overlay (Left Side) === */}
        <div
          className="relative z-10 flex flex-col justify-center h-full text-white w-1/2 pl-20 2xl:scale-150 2xl:origin-left
  sm:w-2/3 sm:pl-10
  xs:pl-6 xs:-mt-10
  max-sm:absolute max-sm:top-[15%] max-sm:left-5 max-sm:w-[90%]"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-linear-to-b from-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
            Let's
          </h1>

          <div className="flex leading-none text-[60px] lg:text-[200px]   sm:text-[200px]  md:text-[100px]">
            <span className="font-thin">C</span>
            <span className="font-light">R</span>
            <span className="font-normal">E</span>
            <span className="font-medium">A</span>
            <span className="font-semibold">T</span>
            <span className="font-bold">E</span>
          </div>
        </div>

        {/* Optional Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-transparent pointer-events-none"></div>
      </div>
    </>
  );
};

export default Hero;
