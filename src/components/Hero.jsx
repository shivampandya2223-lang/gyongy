import Spline from "@splinetool/react-spline";
import Tpage from "./T-page";

const Hero = () => {
  return (
    <>
      <Tpage />
      <div
        id="hero"
        className="relative h-screen w-full bg-gray-700 overflow-hidden"
      >
        {/* === Background 3D Spline Scene (Right Side) === */}
        <div className="absolute right-0 top-0 w-1/2 h-full pointer-events-none">
          <Spline scene="https://prod.spline.design/aNGDIMdNaJW38uXu/scene.splinecode" />
        </div>

        {/* === Text Overlay (Left Side) === */}
        <div className="relative z-10 flex flex-col justify-center h-full pl-20 text-white w-1/2">
          <h1 className="text-6xl font-bold mb-4 bg-linear-to-b from-pink-600     to-blue-600 bg-clip-text text-transparent animate-gradient-x">
            Let's
          </h1>

          <div className="text-[200px] leading-none flex">
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
