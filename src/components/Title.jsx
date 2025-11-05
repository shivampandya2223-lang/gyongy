import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import AnimatedText from "./AnimatedText";

const Title = () => {
  const obj = [
    {
      title: "Visual Design",
      des: "I design user interfaces for websites, products, and applications, and create marketing materials and social media content. To make them more engaging, I enhance these designs with micro-animations, interactions. With a deep understanding of design systems, I ensure that the final product is consistent and aligns seamlessly with your brand identity.",
    },
    {
      title: "Design System Management",
      des: "Consistency is key! I help teams build, scale, and maintain design systems that streamline workflows, improve collaboration, and ensure cohesive branding across products—whether starting from scratch or refining existing systems.",
    },
    {
      title: "Accessibility Testing",
      des: "Great design is for everyone, ensuring an inclusive experience for all users, including those with disabilities. I assess digital products for accessibility compliance, identifying not just visual barriers but also screen reader and keyboard navigation issues—helping you build truly accessible experiences.",
    },
    {
      title: "Heuristic Analysis",
      des: "Through expert analysis, I evaluate interfaces against best practices to identify pain points and suggest improvements that enhance the user experience. My heuristic reviews go beyond usability, also addressing visual refinements for a more consistent and user-friendly design.",
    },
    {
      title: "AI Assisted Assets",
      des: "Leveraging generative AI, I create high-quality digital assets—from concept visuals, product promo images to illustrations and brand imagery. Each piece is carefully tailored to match your branding, color palette, and identity. I also handle post-processing to refine details and eliminate common AI glitches—no extra fingers, just polished visuals.",
    },
    {
      title: "Mentoring",
      des: "I provide professional guidance for designers at all levels—whether it’s project support, technical skills, tool usage, inspiration, or overcoming creative roadblocks. I offer both one-time feedback and long-term mentoring, helping designers grow and refine their skills over time. Whether you need a fresh perspective on your work or career advice, I’m here to help.",
    },
  ];

  const contentRefs = useRef([]);
  const buttonRefs = useRef([]);
  const bannerRef = useRef(null);

  const toggleDescription = (index) => {
    const el = contentRefs.current[index];
    const btn = buttonRefs.current[index];
    const isOpen = el.classList.contains("open");

    if (isOpen) {
      gsap.to(el, {
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => ScrollTrigger.refresh(true),
      });
      gsap.to(btn, { rotate: 0, duration: 0.4, ease: "power2.inOut" });
      el.classList.remove("open");
    } else {
      gsap.to(el, {
        height: "auto",
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => ScrollTrigger.refresh(true),
      });
      gsap.to(btn, { rotate: 45, duration: 0.4, ease: "power2.inOut" });
      el.classList.add("open");
    }
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // --- Title intro animation ---

    // --- Arrow Scroll Animation ---
    const servicesContainer = document.querySelector(".services-container");
    const serviceItems = gsap.utils.toArray(".service-item");
    const arrow = document.querySelector(".moving-arrow");

    if (!servicesContainer || serviceItems.length < 2 || !arrow) return;

    const firstTitle = serviceItems[0].querySelector("h2");
    const lastTitle = serviceItems[serviceItems.length - 1].querySelector("h2");

    // Use getBoundingClientRect for precise position tracking
    const getFirstY = () =>
      firstTitle.offsetTop +
      firstTitle.offsetHeight / 2 -
      arrow.offsetHeight / 2;
    const getLastY = () =>
      lastTitle.offsetTop + lastTitle.offsetHeight / 2 - arrow.offsetHeight / 2;

    const updateArrow = () => {
      const firstY = getFirstY();
      const lastY = getLastY();
      gsap.fromTo(
        arrow,
        { y: firstY },
        {
          y: lastY,
          ease: "none",
          scrollTrigger: {
            trigger: servicesContainer,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    };

    updateArrow();

    ScrollTrigger.addEventListener("refreshInit", updateArrow);
  });

  return (
    <div className="services min-h-full w-full bg-black text-white px-20 py-32 pb-10">
      {/* TITLE SECTION */}
      <div className="mb-20">
        <p
          ref={bannerRef}
          className="text-2xl font-bold bg-linear-to-b from-pink-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x"
        >
          Creative
        </p>
        <AnimatedText
          text="service"
          className="text-[80px] leading-none tracking-tight"
        />
      </div>

      {/* SERVICES SECTION */}
      <div className="services-container relative w-full flex flex-col items-end text-right space-y-20 pr-40">
        {/* MOVING ARROW */}
        <div className="absolute pr-200 top-0 bottom-0 w-full flex items-start justify-end  pointer-events-none">
          <img
            className="moving-arrow h-12 w-auto"
            src="/assets/line.svg"
            alt="line"
          />
        </div>

        {/* Service Items */}
        {obj.map((data, index) => (
          <div
            key={index}
            className="service-item max-w-3xl border-b border-gray-700 w-full"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-pink-400 mb-3">
                {data.title}
              </h2>
              <button
                ref={(el) => (buttonRefs.current[index] = el)}
                onClick={() => toggleDescription(index)}
                className="text-3xl text-gray-400 hover:text-white transition origin-center"
              >
                +
              </button>
            </div>

            <div
              ref={(el) => (contentRefs.current[index] = el)}
              className="overflow-hidden h-0 opacity-0 text-gray-300 leading-relaxed"
            >
              {data.des}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Title;
