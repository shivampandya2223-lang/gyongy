import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

const Details = () => {
  const textRef = useRef(null);
  const lineRef = useRef(null);
  const yearRef = useRef(null);
  const labelRef = useRef(null);
  const detailRef = useRef(null);
  const sections = [
    { year: "2025", label: "Now" },
    { year: "2024", label: "Now" },
    { year: "2022", label: "2023" },
    { year: "2017", label: "2019" },
    { year: "2012", label: "2017" },
    { year: "2007", label: "2012" },
    { year: "2006", label: "2007" },
    { year: "2001", label: "2006" },
  ];
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const blocks = gsap.utils.toArray(".info-block");
    const lastBlock = blocks[blocks.length - 1];

    // Move the year/label text as the user scrolls
    gsap.to(textRef.current, {
      y: () => {
        const h = window.innerHeight;

        if (window.innerWidth >= 1536) {
          return h * 1.5;
        } else {
          return h * 2.28;
        }
      },
      ease: "none",
      scrollTrigger: {
        trigger: blocks[0],
        start: "top center",
        endTrigger: lastBlock,
        end: "bottom center",
        scrub: true,
      },
    });

    // Animate each info-block
    blocks.forEach((block, i) => {
      // === Year & Label Change ===
      ScrollTrigger.create({
        trigger: block,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          yearRef.current.textContent = sections[i].year;
          labelRef.current.textContent = sections[i].label;
        },
        onEnterBack: () => {
          yearRef.current.textContent = sections[i].year;
          labelRef.current.textContent = sections[i].label;
        },
      });

      // === Pop-in Animation ===
      gsap.fromTo(
        block,
        { opacity: 0, scale: 0.95, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: block,
            start: "top 80%",
            toggleActions: "restart none restart reverse", // plays when enters, reverses when leaves
          },
        }
      );
    });
  });

  return (
    <div
      ref={detailRef}
      className="experience h-full w-screen bg-black pt-4 pb-8"
    >
      <div className="flex flex-row">
        <div className=" lg:w-[25%] text-white  lg:text-4xl items-center lg:pl-20">
          <div ref={textRef} className="flex items-center">
            <div>
              {" "}
              <h1 ref={yearRef} className="year hidden lg:flex  ">
                2025
              </h1>
              <h1 ref={labelRef} className="label hidden lg:flex  ">
                Now
              </h1>
            </div>
            <img
              ref={lineRef}
              src="/assets/line.svg"
              className="h-7 w-full hidden lg:flex  "
            />
          </div>
        </div>
        <div className="w-full  lg:w-[75%] text-white text-center md:text-left lg:text-left pr-4 pl-4 sm:items-center lg:pr-50">
          {/* 1 */}
          <div className="info-block">
            <h1 className="text-4xl bg-linear-to-b from-[rgb(248,91,225)] to-[rgb(156,111,252)] bg-clip-text text-transparent p-4">
              IxDF Country Manager for Hungary
            </h1>

            <h2 className="text-white text-2xl p-4">
              IxDF - Interaction Design Foundation
            </h2>

            <p className="text-gray-400 pb-2">
              As the IxDF Country Manager for Hungary, I support and empower
              local leaders to foster connections among design professionals,
              enthusiasts, and curious minds, with the goal of building a
              vibrant and inclusive design community. I encourage and assist
              them in organizing impactful events—both online and in person—that
              inspire engagement and learning.
              <br />
              My role involves driving community involvement, promoting
              collaboration, and ensuring the growth and success of IxDF
              Hungary. Through these efforts, I aim to contribute to a thriving
              and dynamic design ecosystem that supports learning, knowledge
              sharing, and professional growth.
            </p>
          </div>
          {/* 2 */}
          <div className="info-block">
            <h1 className="text-4xl bg-linear-to-b from-[rgb(248,91,225)] to-[rgb(156,111,252)] bg-clip-text text-transparent p-4">
              Design System Specialist / Director of Visual Design
            </h1>
            <h2 className="text-white text-2xl p-4">
              platformOS • United States
            </h2>
            <p className="text-gray-400 pb-2">
              Develop and manage the multi-brand, modular platformOS design
              system, along with the products built on it, including the
              marketplace, community, documentation, course solutions. <br />
              Ensure the design system streamlines processes, speeds up
              customization and delivery, and results in consistent,
              high-quality and accessible user interfaces.
              <br />
              Lead the user interface design phase of client projects, from
              product customization to successful completion.
            </p>
          </div>
          {/* 3 */}
          <div className="info-block">
            <h1 className="text-4xl bg-linear-to-b from-[rgb(248,91,225)] to-[rgb(156,111,252)] bg-clip-text text-transparent p-4">
              UXUI Auditor, Accessibility consultant
            </h1>
            <h2 className="text-white text-2xl p-4">Confidential • Hungary</h2>
            <p className="text-gray-400 pb-2">
              As part of the broader digitalisation of Europe efforts, I
              conducted comprehensive audits of digital products (web portals
              and mobile applications) to ensure they meet the highest standards
              of user experience, user interface, and inclusive design. The
              audits also took into account the eGovernment Benchmark, which
              monitors the digitalisation of public services across Europe to
              ensure that digital solutions are user-centric, accessible, and
              effective.
              <br />
              My evaluations focused on identifying usability and accessibility
              issues, detecting visual inconsistencies, incorporating usability
              test results, and providing actionable recommendations to enhance
              UX and UI design.
            </p>
          </div>
          {/* 4 */}
          <div className="info-block">
            <h1 className="text-4xl bg-linear-to-b from-[rgb(248,91,225)] to-[rgb(156,111,252)] bg-clip-text text-transparent p-4">
              Lead User Interface Designer
            </h1>
            <h2 className="text-white text-2xl p-4">
              Pronovix • Belgium, Hungary
            </h2>
            <p className="text-gray-400 pb-2">
              I established efficient workflows and processes between
              developers, UX, and UI teams by introducing effective
              collaboration tools and methods, and ensured that additional team
              members experienced smooth onboarding and mentoring.
              <br />
              While leading the development of the design system, I also took
              ownership of the Developer Portal product design. Additionally, I
              managed client projects, ensuring the product was aligned with the
              client’s branding and tailored to their specific requirements.
            </p>
          </div>
          {/* 5 */}
          <div className="info-block">
            <h1 className="text-4xl bg-linear-to-b from-[rgb(248,91,225)] to-[rgb(156,111,252)] bg-clip-text text-transparent p-4">
              UXUI Designer
            </h1>
            <h2 className="text-white text-2xl p-4">
              CAS Software Ag. • Germany, Hungary
            </h2>
            <p className="text-gray-400 pb-2">
              Thanks to the company’s innovative culture, I had the opportunity
              to work with cutting-edge technologies and devices, including
              smartwatches, smart TVs, phones, tablets, and touch displays. I
              contributed to the full design process, from conceptualizing and
              wireframing to designing, prototyping, and testing new features,
              products and apps —such as the genesisWorld CRM, smartWe CRM, CAS
              CardScanner, and a web portal solution tailored for TV channels,
              with matching mobile and tablet applications. I enhanced these
              projects with interface animations and interaction design to boost
              user engagement.In collaboration with the University of Szeged, I
              held design workshops, mentored students, and actively supported
              junior designers.
            </p>
          </div>
          {/* 6 */}
          <div className="info-block">
            <h1 className="text-4xl bg-linear-to-b from-[rgb(248,91,225)] to-[rgb(156,111,252)] bg-clip-text text-transparent p-4">
              Webdesigner
            </h1>
            <h2 className="text-white text-2xl p-4">
              Factory Creative Studio • Hungary
            </h2>
            <p className="text-gray-400 pb-2">
              At this creative agency, I had the opportunity to contribute to
              projects for major global brands such as Sony Pictures Television,
              HBO, AXN, Da Vinci Learning, L'Oréal, and DM drogerie markt. I
              played an active role in designing microsites for TV series,
              contest platforms, online games, and various design assets.
            </p>
          </div>
          {/* 7 */}
          <div className="info-block">
            <h1 className="text-4xl bg-linear-to-b from-[rgb(248,91,225)] to-[rgb(156,111,252)] bg-clip-text text-transparent p-4">
              Graphic Designer, Webdesigner
            </h1>
            <h2 className="text-white text-2xl p-4">
              I-Design Studio • Hungary
            </h2>
            <p className="text-gray-400 pb-2">
              Through self-directed learning and hands-on projects, I’ve gained
              experience designing both print and digital brand materials, as
              well as websites for small to medium-sized local businesses.
            </p>
          </div>
          {/* 8 */}
          <div className="info-block">
            <h1 className="text-4xl bg-linear-to-b from-[rgb(248,91,225)] to-[rgb(156,111,252)] bg-clip-text text-transparent p-4">
              University of Szeged
            </h1>
            <h2 className="text-white text-2xl p-4">
              Master's degree • Computer Program Designer • Image Processing
              Specialization
            </h2>
            <p className="text-gray-400 pb-2">
              Although I hold an MSc in Computer Program Design, I discovered my
              passion for creative tasks during my studies and chose image
              processing as my specialization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
