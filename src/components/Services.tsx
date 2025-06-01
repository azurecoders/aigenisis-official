"use client";
import {
  ArrowRight,
  Bot,
  Camera,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { useContactModal } from "./ModalContext";

const Services = () => {
  const { openModal } = useContactModal();
  const serviceIcons = {
    blockchain: Zap,
    chatbot: Bot,
    generation: Camera,
    leads: TrendingUp,
    consultation: Users,
  };

  return (
    <section className="bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-primary/2 rounded-full blur-2xl"></div>
      </div>

      {/* Mobile Layout */}
      <div className="block lg:hidden py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Mobile Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles size={16} className="animate-pulse" />
              Our Services
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight mb-4">
              What we{" "}
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Offer
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-foreground/70 italic font-light max-w-2xl mx-auto">
              AI Solutions that think, speak and grow with your business
            </p>
          </div>

          {/* Mobile Services Grid */}
          <div className="space-y-6 sm:space-y-8 mb-12">
            {[
              {
                title: "AI Chatbot",
                description:
                  "Engage your customers with human-like conversations. Our AI chatbot works around the clock to support and convert.",
                image:
                  "https://ik.imagekit.io/mhkn4hoiyk/AI%20Genisis%20(don't%20delete)/blockchain-integration.jpg?updatedAt=1748748543961",
                icon: serviceIcons.blockchain,
              },
              {
                title: "Email Automation",
                description:
                  "Never miss an email opportunity again. Get smart, real-time responses powered by AI.",
                image:
                  "https://ik.imagekit.io/mhkn4hoiyk/AI%20Genisis%20(don't%20delete)/chatbot.jpg?updatedAt=1748748543909",
                icon: serviceIcons.chatbot,
              },
              {
                title: "Financial Advisory",
                description:
                  "Make smarter financial decisions with AI insights. Your personal finance guide — available 24/7.",
                image:
                  "https://ik.imagekit.io/mhkn4hoiyk/AI%20Genisis%20(don't%20delete)/image-generation.jpg?updatedAt=1748748543936",
                icon: serviceIcons.generation,
              },
              {
                title: "Seamless Integration",
                description:
                  "Connect your chatbot with your favorite tools — from CRMs to eCommerce platforms.",
                image:
                  "https://ik.imagekit.io/mhkn4hoiyk/AI%20Genisis%20(don't%20delete)/lead-generation.jpg?updatedAt=1748748543933",
                icon: serviceIcons.leads,
              },
              {
                title: "100% Customizable",
                description:
                  "No templates, no limits. We design AI solutions fully customized to your business, goals, and workflow.",
                image:
                  "https://ik.imagekit.io/mhkn4hoiyk/AI%20Genisis%20(don't%20delete)/ai-agent.jpg?updatedAt=1748748543907",
                icon: serviceIcons.consultation,
              },
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-section-color border border-foreground/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 cursor-pointer"
                >
                  <div className="relative h-48 sm:h-56 w-full mb-6 overflow-hidden rounded-xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={1920}
                      height={1080}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 p-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-lg">
                      <Icon size={20} className="text-primary" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl sm:text-3xl font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-foreground/80 text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Target Audience */}
          <div className="bg-gradient-to-br from-primary-dark to-primary-dark/80 border border-primary/20 rounded-2xl p-6 mb-12">
            <h3 className="text-center text-2xl font-medium mb-6 text-foreground">
              We are suitable for:
            </h3>
            <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent mb-6"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Creative Agency",
                "Creators and Marketers",
                "Smart Startup",
                "Small Businesses",
                "Product Teams",
                "Enterprise Solutions",
              ].map((audience, index) => (
                <div
                  key={index}
                  className="bg-primary/25 border border-primary/60 rounded-full text-center py-3 px-4 text-foreground font-medium hover:bg-primary/35 transition-colors duration-200"
                >
                  {audience}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="text-center">
            <p className="text-foreground/80 text-lg sm:text-xl mb-6 max-w-2xl mx-auto leading-relaxed">
              We provide intelligent solutions to help brands think fast, build
              smart, and grow beyond boundaries.
            </p>
            <button
              onClick={openModal}
              className="group flex items-center mx-auto bg-foreground text-background py-3 px-6 sm:py-4 sm:px-8 rounded-full gap-4 font-semibold cursor-pointer hover:bg-primary hover:text-background transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-foreground/20"
            >
              <span className="text-lg sm:text-xl">{"Let's Talk"}</span>
              <div className="p-2 flex items-center justify-center bg-primary rounded-full group-hover:bg-foreground group-hover:text-primary-dark transition-all duration-300 ease-in-out border-2 border-primary group-hover:border-foreground group-hover:-rotate-45">
                <ArrowRight size={20} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-3 grid-rows-9 container mx-auto px-4 xl:px-8 place-items-center text-left py-20 relative z-10">
        {/* Main Heading */}
        <div className="grid-sec-1 relative">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            <Sparkles size={16} className="animate-pulse" />
            Our Services
          </div>
          <h2 className="text-4xl xl:text-5xl 2xl:text-6xl font-medium max-w-4xl leading-[1.2]">
            What we{" "}
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Offer
            </span>{" "}
            -{" "}
            <span className="italic font-light text-foreground/90">
              AI Solutions that think, speak and grow with your business
            </span>
          </h2>
          <div className="absolute -bottom-4 left-0 w-32 h-1 bg-gradient-to-r from-primary/80 to-transparent rounded-full"></div>
        </div>

        {/* Service Cards */}
        <div className="grid-sec-2 flex justify-start">
          <div className="group bg-section-color p-6 xl:p-8 rounded-2xl max-w-[85%] border border-foreground/10 shadow-lg shadow-primary/5 hover:shadow-primary/15 hover:shadow-xl cursor-pointer transition-all duration-500 hover:border-primary/30 hover:-translate-y-2">
            <div className="relative h-[220px] xl:h-[250px] w-full overflow-hidden rounded-xl">
              <Image
                src={
                  "https://ik.imagekit.io/mhkn4hoiyk/AI%20Genisis%20(don't%20delete)/blockchain-integration.jpg?updatedAt=1748748543961"
                }
                alt="blockchain"
                width={1920}
                height={1080}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 p-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Zap size={20} className="text-primary" />
              </div>
            </div>
            <div className="space-y-3 mt-6">
              <h3 className="text-[28px] xl:text-[32px] font-medium group-hover:text-primary transition-colors duration-300">
                AI Chatbot
              </h3>
              <p className="text-foreground/80 text-lg xl:text-xl leading-relaxed">
                Engage your customers with human-like conversations. Our AI
                chatbot works around the clock to support and convert.
              </p>
            </div>
          </div>
        </div>

        <div className="grid-sec-3 flex justify-end">
          <div className="group bg-section-color p-6 xl:p-8 rounded-2xl max-w-[85%] border border-foreground/10 shadow-lg shadow-primary/5 hover:shadow-primary/15 hover:shadow-xl cursor-pointer transition-all duration-500 hover:border-primary/30 hover:-translate-y-2">
            <div className="relative h-[220px] xl:h-[250px] w-full overflow-hidden rounded-xl">
              <Image
                src={
                  "https://ik.imagekit.io/mhkn4hoiyk/AI%20Genisis%20(don't%20delete)/chatbot.jpg?updatedAt=1748748543909"
                }
                alt="chatbot"
                width={1920}
                height={1080}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 p-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Bot size={20} className="text-primary" />
              </div>
            </div>
            <div className="space-y-3 mt-6">
              <h3 className="text-[28px] xl:text-[32px] font-medium group-hover:text-primary transition-colors duration-300">
                Email Automation
              </h3>
              <p className="text-foreground/80 text-lg xl:text-xl leading-relaxed">
                Never miss an email opportunity again. Get smart, real-time
                responses powered by AI.
              </p>
            </div>
          </div>
        </div>

        <div className="grid-sec-4 flex justify-center">
          <div className="group bg-section-color p-6 xl:p-8 rounded-2xl max-w-[85%] border border-foreground/10 shadow-lg shadow-primary/5 hover:shadow-primary/15 hover:shadow-xl cursor-pointer transition-all duration-500 hover:border-primary/30 hover:-translate-y-2">
            <div className="relative h-[220px] xl:h-[250px] w-full overflow-hidden rounded-xl">
              <Image
                src={
                  "https://ik.imagekit.io/mhkn4hoiyk/AI%20Genisis%20(don't%20delete)/image-generation.jpg?updatedAt=1748748543936"
                }
                alt="image generation"
                width={1920}
                height={1080}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 p-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Camera size={20} className="text-primary" />
              </div>
            </div>
            <div className="space-y-3 mt-6">
              <h3 className="text-[28px] xl:text-[32px] font-medium group-hover:text-primary transition-colors duration-300">
                Financial Advisory
              </h3>
              <p className="text-foreground/80 text-lg xl:text-xl leading-relaxed">
                Make smarter financial decisions with AI insights. Your personal
                finance guide — available 24/7.
              </p>
            </div>
          </div>
        </div>

        <div className="grid-sec-5 flex justify-start">
          <div className="group bg-section-color p-6 xl:p-8 rounded-2xl max-w-[85%] border border-foreground/10 shadow-lg shadow-primary/5 hover:shadow-primary/15 hover:shadow-xl cursor-pointer transition-all duration-500 hover:border-primary/30 hover:-translate-y-2">
            <div className="relative h-[220px] xl:h-[250px] w-full overflow-hidden rounded-xl">
              <Image
                src={
                  "https://ik.imagekit.io/mhkn4hoiyk/AI%20Genisis%20(don't%20delete)/lead-generation.jpg?updatedAt=1748748543933"
                }
                alt="lead generation"
                width={1920}
                height={1080}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 p-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <TrendingUp size={20} className="text-primary" />
              </div>
            </div>
            <div className="space-y-3 mt-6">
              <h3 className="text-[28px] xl:text-[32px] font-medium group-hover:text-primary transition-colors duration-300">
                Seamless Integration
              </h3>
              <p className="text-foreground/80 text-lg xl:text-xl leading-relaxed">
                Connect your chatbot with your favorite tools — from CRMs to
                eCommerce platforms.
              </p>
            </div>
          </div>
        </div>

        {/* Target Audience Card */}
        <div className="grid-sec-6 flex place-self-end">
          <div className="bg-gradient-to-br from-primary-dark to-primary-dark/80 p-6 xl:p-8 rounded-2xl ml-16 w-[330px] xl:w-[380px] border border-primary/20 shadow-lg shadow-primary/10 hover:shadow-primary/20 hover:shadow-xl cursor-pointer transition-all duration-500 backdrop-blur-sm hover:scale-105">
            <div>
              <div className="flex items-center justify-center gap-2 mb-6">
                <Users size={24} className="text-primary" />
                <h3 className="text-center text-2xl xl:text-3xl font-medium text-foreground">
                  We are suitable for:
                </h3>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent my-6"></div>
              <div className="space-y-3">
                {[
                  "Creative Agency",
                  "Creators and Marketers",
                  "Smart Startup",
                  "Small Businesses",
                  "Product Teams",
                  "Enterprise Solutions",
                ].map((audience, index) => (
                  <div
                    key={index}
                    className="bg-primary/25 border border-primary/60 rounded-full text-lg text-foreground p-3 text-center font-medium hover:bg-primary/35 transition-all duration-200 hover:scale-105"
                  >
                    {audience}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid-sec-7 flex justify-center">
          <div className="group bg-section-color p-6 xl:p-8 rounded-2xl max-w-[85%] border border-foreground/10 shadow-lg shadow-primary/5 hover:shadow-primary/15 hover:shadow-xl cursor-pointer transition-all duration-500 hover:border-primary/30 hover:-translate-y-2">
            <div className="relative h-[220px] xl:h-[250px] w-full overflow-hidden rounded-xl">
              <Image
                src={
                  "https://ik.imagekit.io/mhkn4hoiyk/AI%20Genisis%20(don't%20delete)/ai-agent.jpg?updatedAt=1748748543907"
                }
                alt="ai agent"
                width={1920}
                height={1080}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 right-4 p-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Users size={20} className="text-primary" />
              </div>
            </div>
            <div className="space-y-3 mt-6">
              <h3 className="text-[28px] xl:text-[32px] font-medium group-hover:text-primary transition-colors duration-300">
                100% Customizable
              </h3>
              <p className="text-foreground/80 text-lg xl:text-xl leading-relaxed">
                No templates, no limits. We design AI solutions fully customized
                to your business, goals, and workflow.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="grid-sec-8 flex items-end flex-col place-self-end gap-6 mb-6">
          <div className="text-right">
            <p className="text-foreground/80 text-xl xl:text-2xl leading-relaxed max-w-lg">
              AI tools that help businesses connect, respond, and grow — from
              chatbots to automation.
            </p>
            <div className="mt-4 w-full h-px bg-gradient-to-l from-primary/40 to-transparent"></div>
          </div>
          <div className="flex flex-col justify-start w-full">
            <button
              onClick={openModal}
              className="group flex items-center w-fit bg-foreground text-background py-3 px-6 xl:py-4 xl:px-8 rounded-full gap-4 font-semibold cursor-pointer hover:bg-primary hover:text-back transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-foreground/20"
            >
              <span className="text-xl">{"Let's Talk"}</span>
              <div className="p-2 flex items-center justify-center bg-primary rounded-full group-hover:bg-foreground group-hover:text-primary-dark transition-all duration-300 ease-in-out border-2 border-primary group-hover:border-foreground group-hover:-rotate-45">
                <ArrowRight size={20} />
              </div>
            </button>
            <p className="text-foreground/50 text-sm mt-3 ml-2">
              Free consultation • Custom solutions • Expert guidance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
