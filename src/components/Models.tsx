"use client";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useContactModal } from "./ModalContext";

const Models = () => {
  const { openModal } = useContactModal();
  return (
    <section className="bg-section-color">
      <div className="container mx-auto py-12 px-4 md:py-16 lg:py-20">
        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.3] max-w-5xl mx-auto text-center">
          Our <span className="text-primary">AI Models</span> -{" "}
          <span className="italic font-light">
            Tailored solutions for every stage of your business.
          </span>{" "}
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:place-items-center mt-12 md:mt-16 lg:mt-20">
          <div className="max-w-[450px] mx-auto lg:mx-0 bg-section-color border border-foreground/10 shadow-lg shadow-primary/10 cursor-pointer hover:shadow-primary/20 hover:shadow-xl transition-all duration-300 rounded-2xl lg:self-end hover:scale-[1.02]">
            <Image
              src={"/model-1.jpg"}
              alt="model-1"
              width={1920}
              height={1080}
              className="object-cover rounded-t-2xl"
            />
            <div className="p-6 md:p-8 space-y-4 md:space-y-6">
              <div className="space-y-2">
                <p className="text-primary font-light text-lg md:text-xl">
                  Gen-Fin
                </p>
                <p className="text-foreground/80 text-2xl md:text-3xl lg:text-4xl font-medium">
                  AI Smart Finance
                </p>
              </div>
              <p className="text-foreground/80 text-lg md:text-xl leading-[1.5]">
                Perfect for startups or teams of experts looking to simplify
                financial decisions with AI.
              </p>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary text-background rounded-full w-fit p-1 flex-shrink-0">
                    <Check size={18} />
                  </div>
                  <p className="text-base md:text-lg text-foreground/90">
                    AI-powered financial advisor
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary text-background rounded-full w-fit p-1 flex-shrink-0">
                    <Check size={18} />
                  </div>
                  <p className="text-base md:text-lg text-foreground/90">
                    Real-time budget analysis
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary text-background rounded-full w-fit p-1 flex-shrink-0">
                    <Check size={18} />
                  </div>
                  <p className="text-base md:text-lg text-foreground/90">
                    Graphical Visualization
                  </p>
                </div>
              </div>
              <button
                onClick={openModal}
                className="mt-8 md:mt-12 group flex items-center w-full mx-auto bg-foreground text-background py-2 md:py-2 px-6 justify-between rounded-full gap-4 font-semibold cursor-pointer hover:bg-primary hover:text-background transition-all duration-300 ease-in-out"
              >
                <span className="text-sm md:text-xl">Start Your Project</span>
                <div className="p-2 flex items-center justify-center bg-primary rounded-full group-hover:bg-foreground group-hover:text-primary-dark transition-all duration-300 ease-in-out border-2 border-primary group-hover:border-primary-dark">
                  <ArrowRight size={20} />
                </div>
              </button>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden bg-primary border-2 border-primary/10 shadow-lg shadow-primary/10 cursor-pointer hover:shadow-primary/20 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] max-w-[450px] mx-auto lg:mx-0">
            <h3 className="text-background text-lg md:text-xl font-semibold py-2 text-center">
              High Demand
            </h3>
            <div className="bg-section-color rounded-2xl">
              <Image
                src={"/model-1.png"}
                alt="model-2"
                width={1920}
                height={1080}
                className="object-cover rounded-t-2xl"
              />
              <div className="p-6 md:p-8 space-y-4 md:space-y-6">
                <div className="space-y-2">
                  <p className="text-primary font-light text-lg md:text-xl">
                    Genisis
                  </p>
                  <p className="text-foreground/80 text-2xl md:text-3xl lg:text-4xl font-medium">
                    AI Chatbot
                  </p>
                </div>
                <p className="text-foreground/80 text-lg md:text-xl leading-[1.5]">
                  AI chat model for custom business support using
                  custom-provided data.
                </p>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary text-background rounded-full w-fit p-1 flex-shrink-0">
                      <Check size={18} />
                    </div>
                    <p className="text-base md:text-lg text-foreground/90">
                      Customer Care Support
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary text-background rounded-full w-fit p-1 flex-shrink-0">
                      <Check size={18} />
                    </div>
                    <p className="text-base md:text-lg text-foreground/90">
                      Image Recognition
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-primary text-background rounded-full w-fit p-1 flex-shrink-0">
                      <Check size={18} />
                    </div>
                    <p className="text-base md:text-lg text-foreground/90">
                      Product Recommendation
                    </p>
                  </div>
                </div>
                <button
                  onClick={openModal}
                  className="group flex w-full justify-between items-center bg-primary text-background py-2 md:py-2 px-6 rounded-full gap-4 font-semibold cursor-pointer hover:bg-foreground hover:text-background transition-all duration-300 ease-in-out"
                >
                  <span className="text-sm md:text-xl">Start Your Project</span>
                  <div className="p-2 flex items-center justify-center bg-foreground rounded-full group-hover:bg-primary group-hover:text-primary-dark transition-all duration-300 ease-in-out border-2 border-primary group-hover:border-primary-dark -rotate-45">
                    <ArrowRight size={20} />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="max-w-[450px] mx-auto lg:mx-0 bg-section-color border border-foreground/10 shadow-lg shadow-primary/10 cursor-pointer hover:shadow-primary/20 hover:shadow-xl transition-all duration-300 rounded-2xl lg:self-end hover:scale-[1.02]">
            <Image
              src={"/model-1.svg"}
              alt="model-3"
              width={1920}
              height={1080}
              className="object-cover rounded-t-2xl"
            />
            <div className="space-y-4 md:space-y-6 p-6 md:p-8">
              <div className="space-y-2">
                <p className="text-primary font-light text-lg md:text-xl">
                  Gen-Flow
                </p>
                <p className="text-foreground/80 text-2xl md:text-3xl lg:text-4xl font-medium">
                  Email Automation
                </p>
              </div>
              <p className="text-foreground/80 text-lg md:text-xl leading-[1.5]">
                Ideal for growing businesses that want to streamline outreach
                with smart automation.
              </p>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary text-background rounded-full w-fit p-1 flex-shrink-0">
                    <Check size={18} />
                  </div>
                  <p className="text-base md:text-lg text-foreground/90">
                    AI-crafted email sequences
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary text-background rounded-full w-fit p-1 flex-shrink-0">
                    <Check size={18} />
                  </div>
                  <p className="text-base md:text-lg text-foreground/90">
                    Personalized customer flows
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary text-background rounded-full w-fit p-1 flex-shrink-0">
                    <Check size={18} />
                  </div>
                  <p className="text-base md:text-lg text-foreground/90">
                    Automated follow-ups & analytics
                  </p>
                </div>
              </div>
              <button
                onClick={openModal}
                className="mt-8 md:mt-12 group flex items-center w-full mx-auto bg-foreground text-background py-2 md:py-2 px-6 justify-between rounded-full gap-4 font-semibold cursor-pointer hover:bg-primary hover:text-background transition-all duration-300 ease-in-out"
              >
                <span className="text-sm md:text-xl">Start Your Project</span>
                <div className="p-2 flex items-center justify-center bg-primary rounded-full group-hover:bg-foreground group-hover:text-primary-dark transition-all duration-300 ease-in-out border-2 border-primary group-hover:border-primary-dark">
                  <ArrowRight size={20} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Models;
