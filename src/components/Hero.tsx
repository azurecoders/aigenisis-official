"use client";
import { ArrowRight, Sparkles } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useContactModal } from "./ModalContext";

const Hero = () => {
  const { openModal } = useContactModal();
  const sliderItems = [
    {
      id: 1,
      text: "THE BEST SOLUTION",
      icon: Sparkles,
    },
    {
      id: 2,
      text: "EXPERIENCE THE DIFFERENCE",
      icon: Sparkles,
    },
    {
      id: 3,
      text: "INNOVATION AT ITS BEST",
      icon: Sparkles,
    },
  ];
  const containerRef = useRef<HTMLDivElement>(null);
  const [animationSpeed, setAnimationSpeed] = useState(60);

  const sliderItemsData = sliderItems;

  const items = sliderItemsData.map((item: any) => {
    const Icon = item.icon;
    return (
      <div
        key={item.id}
        className="flex items-center gap-2 mx-4 whitespace-nowrap"
      >
        <Icon size={24} className="text-primary" />
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold uppercase text-foreground">
          {item.text}
        </p>
      </div>
    );
  });

  const duplicatedItems = [...items, ...items];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const firstItem = container.firstChild as HTMLElement;
    if (!firstItem) return;

    const itemWidth = firstItem.offsetWidth;
    const totalContentWidth = itemWidth * items.length;
    const newSpeed = (totalContentWidth / 100) * 2;
    setAnimationSpeed(newSpeed);

    container.style.animationDuration = `${newSpeed}s`;

    const handleResize = () => {
      const updatedItemWidth = firstItem.offsetWidth;
      const updatedTotalWidth = updatedItemWidth * items.length;
      const updatedSpeed = (updatedTotalWidth / 100) * 2;
      setAnimationSpeed(updatedSpeed);
      container.style.animationDuration = `${updatedSpeed}s`;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [items.length]);

  return (
    <section id="#" className="min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-12">
        <div className="relative h-full z-20 min-h-[70vh] lg:min-h-[75vh]">
          {/* Enhanced background blur with multiple layers for depth */}
          <div className="absolute h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[600px] lg:w-[600px] z-10 bg-primary/8 rounded-full blur-3xl animate-pulse top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute h-[200px] w-[200px] sm:h-[250px] sm:w-[250px] lg:h-[350px] lg:w-[350px] z-10 bg-primary/5 rounded-full blur-2xl animate-pulse top-1/3 right-1/4 delay-1000" />

          <div className="z-20 flex flex-col lg:flex-row justify-between items-center lg:items-start min-h-[70vh] lg:min-h-[75vh] gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="flex justify-between flex-col w-full lg:w-[55%] text-center lg:text-left">
              <div className="space-y-6 lg:space-y-8">
                <div className="space-y-2 lg:space-y-4">
                  <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[70px] font-medium leading-tight">
                    Welcome to{" "}
                    <span className="font-semibold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                      Aigenisis
                    </span>
                  </h1>
                  <h2 className="text-foreground/90 text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[60px] font-light italic leading-tight">
                    - Powering the Future with AI Chatbots
                  </h2>
                </div>
                <p className="mt-6 lg:mt-8 max-w-2xl mx-auto lg:mx-0 text-foreground/80 text-lg sm:text-xl lg:text-2xl leading-relaxed">
                  {
                    "We build smart, human-like AI chatbots that help businesses automate, engage, and grow."
                  }
                </p>
              </div>

              {/* CTA Button */}
              <div className="mt-8 lg:mt-12">
                <button
                  onClick={openModal}
                  className="group flex items-center bg-primary text-background py-3 px-6 lg:py-4 lg:px-8 rounded-full gap-3 lg:gap-4 font-semibold cursor-pointer hover:bg-foreground hover:text-background transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-primary/20 mx-auto lg:mx-0"
                >
                  <span className="text-lg lg:text-xl">Get Started Now</span>
                  <div className="p-2 flex items-center justify-center bg-foreground rounded-full group-hover:bg-primary group-hover:text-primary-dark transition-all duration-300 ease-in-out border-2 border-primary group-hover:border-primary-dark -rotate-45 group-hover:rotate-0">
                    <ArrowRight size={20} />
                  </div>
                </button>
              </div>
            </div>

            {/* Right Content Card */}
            <div className="hidden lg:block border border-primary/20 w-full lg:w-[40%] rounded-2xl p-3 sm:p-4 backdrop-blur-sm bg-background/5 hover:bg-background/10 transition-all duration-300">
              <div className="h-full flex items-center justify-between flex-col rounded-2xl bg-gradient-to-br from-gray-bg to-gray-bg/60 p-4 sm:p-6 min-h-[400px] lg:min-h-[500px] space-y-6">
                <h3 className="text-foreground/90 text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] font-light leading-tight text-center">
                  {"AI that works while you sleep"}
                </h3>

                <div className="flex items-center justify-center flex-wrap gap-3 sm:gap-4 lg:gap-5">
                  {[
                    "AI Chatbots",
                    "Custom Bot Development",
                    "E-commerce Automation",
                    "Customer Support Bots",
                    "Smart Integrations",
                    "Text Assistants",
                    "Data Automation",
                    "AI Strategy for Growth",
                    "Finance Automation",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-primary/15 to-primary/5 py-2 px-3 sm:px-4 rounded-full text-foreground text-sm sm:text-base lg:text-lg xl:text-xl font-light border border-primary/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-200 cursor-default"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scrolling Banner */}
      <div className="min-h-[15vh] sm:min-h-[17vh] w-full bg-section-color overflow-hidden relative border-t border-primary/10">
        <div
          ref={containerRef}
          className="flex absolute top-0 left-0 h-full items-center"
          style={{
            animation: `scroll ${animationSpeed}s linear infinite`,
          }}
        >
          {duplicatedItems.map((item, index) => (
            <div key={index} className="mx-4 sm:mx-6 lg:mx-8">
              {item}
            </div>
          ))}
        </div>

        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute top-0 left-0 h-full w-20 sm:w-32 bg-gradient-to-r from-section-color to-transparent z-10" />
        <div className="absolute top-0 right-0 h-full w-20 sm:w-32 bg-gradient-to-l from-section-color to-transparent z-10" />

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          @media (max-width: 640px) {
            @keyframes scroll {
              0% {
                transform: translateX(0%);
              }
              100% {
                transform: translateX(-100%);
              }
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Hero;
