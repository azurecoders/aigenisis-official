"use client";
import { ArrowRight, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useContactModal } from "./ModalContext";

const testimonials = [
  {
    quote: "Aigenisis revolutionized our support.",
    text: `Our response time dropped by 80%, and customer satisfaction went through the roof. The chatbot feels like a real team member!`,
    name: "Jessica Moore",
    title: "E-commerce Store Owner",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: "Their email reply bot is a lifesaver.",
    text: `We used to lose leads to slow replies — now we never miss a message, and our inbox runs on autopilot. Highly recommended.`,
    name: "David Carter",
    title: "Marketing Director",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: "Best decision we made for our finances.",
    text: `The financial advisor bot helped us streamline budgeting and provided real-time insights. It's like having a CFO on call 24/7.`,
    name: "Amanda Lee",
    title: "Startup Founder",
    image:
      "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: "Our onboarding process is now 10x faster.",
    text: `Thanks to Aigenisis, new clients get instant answers and personalized support — without overwhelming our team.`,
    name: "Michael Thompson",
    title: "SaaS Founder",
    image:
      "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: "Finally, AI that fits.",
    text: `Everything was tailor-made — from chatbot tone to integrations. It feels like it was built just for us.`,
    name: "Rachel Bennett",
    title: "Operations Manager",
    image:
      "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Testimonial = () => {
  const { openModal } = useContactModal();
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const next = () =>
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <section className="bg-background py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16">
          {/* Left Side */}
          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-12 w-full lg:w-[45%] text-center lg:text-left">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] max-w-4xl mx-auto lg:mx-0">
              What Our <span className="text-primary">Clients Say</span> -{" "}
              <span className="italic font-light">
                Real results. Real voices.
              </span>{" "}
            </h3>

            <button
              onClick={openModal}
              className="group flex items-center w-fit mx-auto lg:mx-0 bg-foreground text-background py-2 sm:py-3 px-4 sm:px-6 rounded-full gap-3 sm:gap-4 font-semibold cursor-pointer hover:bg-primary hover:text-background transition-all duration-300 ease-in-out"
            >
              <span className="text-base sm:text-lg lg:text-xl">
                Get Started Now
              </span>
              <div className="p-1.5 sm:p-2 flex items-center justify-center bg-primary rounded-full group-hover:bg-foreground group-hover:text-primary-dark transition-all duration-300 ease-in-out border-2 border-primary group-hover:border-primary-dark">
                <ArrowRight size={16} className="sm:hidden" />
                <ArrowRight size={20} className="hidden sm:block" />
              </div>
            </button>
          </div>

          {/* Right Side: Carousel */}
          <div className="w-full lg:w-[50%] flex flex-col items-center relative min-h-[280px] sm:min-h-[320px] lg:min-h-[340px]">
            <div className="relative w-full max-w-xl px-8 sm:px-12">
              {/* Carousel Controls */}
              <button
                className="absolute -left-2 sm:-left-6 top-1/2 -translate-y-1/2 z-10 bg-section-color border border-foreground/10 rounded-full p-1.5 sm:p-2 hover:bg-primary hover:text-background transition cursor-pointer"
                onClick={prev}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} className="sm:hidden" />
                <ChevronLeft size={24} className="hidden sm:block" />
              </button>
              <button
                className="absolute -right-2 sm:-right-6 top-1/2 -translate-y-1/2 z-10 bg-section-color border border-foreground/10 rounded-full p-1.5 sm:p-2 hover:bg-primary hover:text-background transition cursor-pointer"
                onClick={next}
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} className="sm:hidden" />
                <ChevronRight size={24} className="hidden sm:block" />
              </button>

              {/* Testimonial Card */}
              <div
                key={testimonials[current].name}
                className="transition-all duration-500 ease-in-out bg-section-color p-4 sm:p-6 md:p-8 lg:p-10 rounded-2xl shadow-2xl shadow-primary/10 border border-foreground/20 hover:shadow-primary/20 hover:shadow-xl"
              >
                <Quote className="text-primary mb-2" size={32} />
                <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary font-semibold leading-tight mb-2">
                  {`"${testimonials[current].quote}"`}
                </h4>
                <p className="text-sm sm:text-base lg:text-lg text-foreground/80 mb-4 sm:mb-6 leading-relaxed">
                  {testimonials[current].text}
                </p>
                <div className="flex items-center gap-3 sm:gap-4">
                  <Image
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    width={50}
                    height={50}
                    className="h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] object-cover rounded-full border-2 border-primary flex-shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <h5 className="text-base sm:text-lg lg:text-xl font-semibold truncate">
                      {testimonials[current].name}
                    </h5>
                    <p className="text-xs sm:text-sm text-foreground/60 truncate">
                      {testimonials[current].title}
                    </p>
                  </div>
                </div>
              </div>

              {/* Carousel Dots */}
              <div className="flex justify-center mt-4 sm:mt-6 gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full transition-all duration-300 border border-primary ${
                      current === idx
                        ? "bg-primary scale-110 shadow"
                        : "bg-section-color opacity-80"
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
