"use client";
import { ArrowRight, X, Sparkles, Send } from "lucide-react";
import React, { useEffect } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={handleBackdropClick}
      />

      {/* Modal Container */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-2xl transform transition-all duration-300 scale-100">
          {/* Modal Content */}
          <div className="relative bg-background border border-foreground/10 rounded-3xl shadow-2xl overflow-hidden">
            {/* Decorative Header Background */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-primary/5 via-primary/10 to-transparent" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 p-2 hover:bg-foreground/10 rounded-full transition-all duration-200 group cursor-pointer"
              aria-label="Close modal"
            >
              <X
                size={24}
                className="text-foreground/70 group-hover:text-foreground transition-colors"
              />
            </button>

            <div className="relative p-8 sm:p-12">
              {/* Header Section */}
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full">
                  <Sparkles size={20} className="text-primary" />
                  <span className="text-sm font-medium text-primary">
                    Let's Connect
                  </span>
                </div>

                <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
                  <span className="text-primary">Start</span> Your{" "}
                  <span className="italic font-light text-foreground/90">
                    Journey
                  </span>
                </h2>

                <p className="text-foreground/70 text-lg max-w-md mx-auto">
                  Ready to bring your vision to life? Share your ideas with us
                  and let's create something extraordinary together.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="group">
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-foreground mb-2 group-focus-within:text-primary transition-colors"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="John Smith"
                      className="w-full bg-section-color/50 border border-foreground/10 rounded-xl px-4 py-3.5 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                      required
                    />
                  </div>

                  <div className="group">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-foreground mb-2 group-focus-within:text-primary transition-colors"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="john@example.com"
                      className="w-full bg-section-color/50 border border-foreground/10 rounded-xl px-4 py-3.5 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                {/* Phone and Website Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="group">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-foreground mb-2 group-focus-within:text-primary transition-colors"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="+1 (555) 123-4567"
                      className="w-full bg-section-color/50 border border-foreground/10 rounded-xl px-4 py-3.5 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                    />
                  </div>

                  <div className="group">
                    <label
                      htmlFor="website"
                      className="block text-sm font-semibold text-foreground mb-2 group-focus-within:text-primary transition-colors"
                    >
                      Website
                    </label>
                    <input
                      type="url"
                      name="website"
                      id="website"
                      placeholder="https://yoursite.com"
                      className="w-full bg-section-color/50 border border-foreground/10 rounded-xl px-4 py-3.5 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Budget Field */}
                <div className="group">
                  <label
                    className="block text-sm font-semibold text-foreground mb-2 group-focus-within:text-primary transition-colors"
                    htmlFor="budget"
                  >
                    Project Budget
                  </label>
                  <select
                    name="budget"
                    id="budget"
                    className="w-full bg-section-color/50 border border-foreground/10 rounded-xl px-4 py-3.5 text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 appearance-none cursor-pointer"
                  >
                    <option value="">Select your budget range</option>
                    <option value="<1000">Less than $1,000</option>
                    <option value="1000-5000">$1,000 - $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="10000+">More than $10,000</option>
                  </select>
                </div>

                {/* Message Field */}
                <div className="group">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-foreground mb-2 group-focus-within:text-primary transition-colors"
                  >
                    Tell us about your project *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    placeholder="Describe your project, goals, timeline, and any specific requirements. The more details you share, the better we can help you..."
                    className="w-full bg-section-color/50 border border-foreground/10 rounded-xl px-4 py-3.5 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="group w-full relative overflow-hidden bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-background font-bold py-4 px-8 rounded-xl transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/25 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background cursor-pointer"
                  >
                    <span className="relative flex items-center justify-center gap-3 text-lg">
                      <Send
                        size={20}
                        className="group-hover:translate-x-1 transition-transform duration-200"
                      />
                      Send Message
                      <ArrowRight
                        size={20}
                        className="group-hover:translate-x-1 transition-transform duration-200"
                      />
                    </span>

                    {/* Button shine effect */}
                    <div className="absolute inset-0 -top-full group-hover:top-0 bg-gradient-to-b from-white/20 to-transparent transition-all duration-500 ease-out" />
                  </button>
                </div>

                {/* Footer Note */}
                <p className="text-center text-sm text-foreground/60 mt-6">
                  We'll get back to you within 24 hours. Your information is
                  secure and confidential.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
