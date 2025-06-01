"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useContactModal } from "./ModalContext";

const About = () => {
  const { openModal } = useContactModal();
  return (
    <section id="#about" className="py-24 bg-section-color min-h-screen">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Main Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-foreground">
            From{" "}
            <span className="relative">
              <span className="text-primary font-medium">chat</span>
              <div className="hidden lg:block absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/60 to-transparent rounded-full"></div>
            </span>{" "}
            to{" "}
            <span className="relative">
              <span className="text-primary font-medium">cash</span>
              <div className="hidden lg:block absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/60 to-transparent rounded-full"></div>
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-foreground/70 font-light mt-6 max-w-3xl mx-auto">
            {
              "Our chatbot services are built to unlock growth, automate workflows, and drive real engagement for your business."
            }
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          {/* Hero Stats Card */}
          <div className="lg:col-span-2 relative">
            <div className="h-full min-h-[400px] bg-gradient-to-br from-primary/15 via-primary/8 to-primary/5 rounded-2xl border border-primary/10 p-8 flex flex-col justify-between overflow-hidden relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-full transform translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary rounded-full transform -translate-x-12 translate-y-12"></div>
              </div>
              <Image
                src="https://ik.imagekit.io/mhkn4hoiyk/AI%20Genisis%20(don't%20delete)/desktop.svg?updatedAt=1748748544190"
                alt="model"
                width={1920}
                height={1080}
                className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-30 object-cover absolute select-none pointer-events-none"
              />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  Projects Delivered
                </div>
              </div>

              <div className="relative z-10 text-right">
                <h3 className="text-7xl md:text-8xl font-bold text-foreground mb-2">
                  20K<span className="text-primary">+</span>
                </h3>
                <p className="text-xl text-foreground/70 font-light">
                  Successfully completed projects
                </p>
              </div>
            </div>
          </div>

          {/* Content & Stats */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            {/* Description */}
            <div className="bg-gradient-to-br from-gray-bg to-background border border-foreground/10 rounded-2xl p-8">
              <p className="text-xl md:text-2xl text-foreground/80 font-light leading-relaxed mb-6">
                We build AI chatbots that help brands, enterprises, and startups
                unlock growth, automate workflows, and drive real engagement.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium w-full lg:w-fit text-center">
                  Respond instantly
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium w-full lg:w-fit text-center">
                  Automate support
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium w-full lg:w-fit text-center">
                  Boost sales
                </span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-gray-bg/80 to-background/50 border border-foreground/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-3 h-3 bg-primary rounded-full group-hover:animate-pulse"></div>
                  <div className="text-xs text-foreground/50 font-medium tracking-wider uppercase">
                    Sessions
                  </div>
                </div>
                <h4 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  20K<span className="text-primary">+</span>
                </h4>
                <p className="text-foreground/70 font-medium uppercase">
                  Chatbot sessions handled
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-bg/80 to-background/50 border border-foreground/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-3 h-3 bg-primary rounded-full group-hover:animate-pulse"></div>
                  <div className="text-xs text-foreground/50 font-medium tracking-wider uppercase">
                    Users
                  </div>
                </div>
                <h4 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  130K<span className="text-primary">+</span>
                </h4>
                <p className="text-foreground/70 font-medium uppercase">
                  Global users engaged
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-4">
              <button
                onClick={openModal}
                className="w-full lg:w-fit justify-between group flex items-center bg-foreground text-background py-2 px-6 rounded-full gap-4 font-semibold cursor-pointer hover:bg-primary hover:text-background transition-all duration-300 ease-in-out"
              >
                <span className="text-xl">Get Started Now</span>
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

export default About;
