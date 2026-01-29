
import { useEffect, useRef } from "react";
import anime from "animejs";

import img1 from "../assets/AboutSectionImage/aboutUs.png";

const About = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);
  let observer;

 

  // Function to set initial “hidden/off‑screen” styles
  const resetElements = () => {
    if (imgRef.current && textRef.current) {
      Object.assign(imgRef.current.style, {
        opacity: 0,
        transform: "translateX(-200px)",
      });
      Object.assign(textRef.current.style, {
        opacity: 0,
        transform: "translateX(200px)",
      });
    }
  };

  // Function to run the anime.js timeline
  const runAnimation = () => {
    const tl = anime.timeline({
      easing: "easeOutQuad",
      duration: 1000,
    });

    tl.add({
      targets: imgRef.current,
      translateX: [ -200, 0 ],
      opacity: [ 0, 1 ],
    })
    .add({
      targets: textRef.current,
      translateX: [ 200, 0 ],
      opacity: [ 0, 1 ],
    }, "-=700");
  };

  useEffect(() => {
    resetElements(); // ensure hidden at mount

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runAnimation();
        } else {
          resetElements();
        }
      },
      {
        root: null,           // viewport
        threshold: 0.2,       // 20% visible
      }
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      id="about-us"
      ref={sectionRef}
      className=" bg-white text-black w-full overflow-x-hidden
        xs:w-[80%] xs:m-auto xs:mt-[3rem] 
        md:min-h-screen  md:px-10 md:py-10 
        xl:pt-0 xl:min-h-0 "
    >
      
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 w-full">
        {/* Left Column */}
        <div
          ref={imgRef}
          className=" xs:w-[73%] md:w-1/2 w-full max-w-[500px] relative"
        >
          <div className="absolute inset-0 z-0 overflow-hidden rounded-lg">
            <img
              src={img1}
              alt="blur-bg"
              className="w-full h-full object-cover scale-110 opacity-60 brightness-[1.1] blur-3xl rounded-lg"
            />
          </div>
          <img
            src={img1}
            alt="About"
            className="relative z-10 w-full h-auto object-contain drop-shadow-2xl rounded-lg"
          />
        </div>

        {/* Right Column */}
        <div
          ref={textRef}
          className="md:w-1/2 text-center md:text-left mt-[2rem] "
        >
          <h1 className="text-4xl font-title mb-4 leading-tight
            xs:text-[2.5rem] xs:leading-[1.3rem] xs:font-[700]  
            md:text-6xl 
            xl:text-[2.5rem] "
          >
            About Us
          </h1>

          <h2 className=" text-3xl xs:text-[1.25rem] xs:mt-[2rem] font-title mb-4">
            We're a Think Tank — built for celebrities, brands, and change-makers
          </h2>

          <p className=" xs:text-[1rem] font-title  text-justify 
            md:text-left
            xl:text-[1.125rem]"
          >
            Aether Strategies Think Tank Studio is a behavior-first consultancy. <br />
            We believe the world doesn't move on logic — it moves on emotions, stories, and belief.
            <br />
            So we go beyond marketing — into minds, memories, and meaning. <br />
            We blend psychology with creativity to shape perception — from image-building and viral 
            campaigns to solving real-world problems that demand attention
            <br /> 
          </p>

          {/* our secret section  */}
            <p className=" xs:mt-[2rem] xl:mt-[3rem]" >
                <span className="xs:text-[1.5rem] xs:font-[600] font-title ">Our secret?</span>
            </p>
            <p>A rare mix of psychological insight, creative storytelling, and tech-powered execution <br /> </p>
        </div>
          

      </div>

    </div>
  );
};


export default About;

