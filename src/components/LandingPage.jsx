import anime from "animejs/lib/anime.es.js";
import { useEffect, useRef } from "react";

// import "../styles/LandingPage.css";

import img1 from "../assets/leader.png";


const LandingPage = () => {
  const containerRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          hasAnimated.current = true;

          anime
            .timeline({
              easing: "easeOutQuart",
              duration: 200,
            })
            .add({
              targets: el.querySelectorAll(".animate-text"),
              translateY: [50, 0],
              opacity: [0, 1],
              delay: anime.stagger(150),
            })
            .add(
              {
                targets: el.querySelector(".animate-img"),
                scale: [0.8, 1],
                opacity: [0, 1],
                duration: 300,
              },
              "-=400"
            );

          // observer.unobserve(el);
        }
      },
      { root: null, threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (


    <div
      id="home"
      ref={containerRef}
      className=" text-black w-full xs:pt-[8rem] xs:m-auto xs:w-[80%] lg:w-[90%] xs:px-4 xs:mb-relative overflow-hidden"
    >
      
      

      {/* Content - with higher z-index */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between md:px-10 md:py-8 w-full">
        {/* Left Column */}
        <div className="md:w-1/2 text-center md:text-center space-y-4">
          <h1
            className="opacity-0 animate-text text-xl font-title leading-tight 
          xs:text-[1.5rem] xs:leading-[1.3] xs:mb-[1.5rem]
          xl:text-[2rem]"
          >
            We work with celebrities to build iconic images. <br /> We work with labels and brands to craft viral campaigns.
            <br /> And in our free time, we solve real-world problems because we can, and we love it!
          </h1>
        </div>

        {/* Right Column */}
        <div className="xs:w-[73%] relative w-full max-w-[500px] mt-8 md:mt-0">
          {/* Blurred background image */}
          <div className="absolute inset-0 z-0 overflow-hidden rounded-lg">
            <img
              src={img1}
              alt="blur-bg"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Foreground image */}
          <img
            src={img1}
            alt="HeroImg"
            className="opacity-0 animate-img relative z-10 w-full h-auto object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;


{/* <div className="absolute inset-0 z-0">
        <img
          src={backgroundImg}
          alt="background"
          className="w-full h-full object-cover blur-sm opacity-80 scale-110"
        />
</div>  */}