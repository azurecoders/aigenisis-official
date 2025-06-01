"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useContactModal } from "./ModalContext";

const socialLinks = [
  {
    name: "Twitter",
    href: "https://twitter.com/",
    icon: (
      <svg
        className="w-5 h-5"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.1 9.1 0 01-2.83 1.08A4.52 4.52 0 0016.34 0c-2.63 0-4.78 2.13-4.78 4.76 0 .37.04.73.11 1.08C7.72 5.66 4.1 3.9 1.67 1.15A4.49 4.49 0 00.94 3.14c0 1.64.87 3.08 2.18 3.92A4.51 4.51 0 01.96 6v.06c0 2.29 1.63 4.2 3.8 4.63-.4.11-.83.17-1.28.17-.31 0-.6-.03-.9-.09.61 1.9 2.37 3.3 4.45 3.34A9.06 9.06 0 010 21.54C2.17 22.5 4.75 23 7.55 23c9.05 0 14.01-7.5 14.01-14 0-.21 0-.42-.02-.63A9.72 9.72 0 0023 3z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/",
    icon: (
      <svg
        className="w-5 h-5"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4V8h4v2a4.01 4.01 0 014-4zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/",
    icon: (
      <svg
        className="w-5 h-5"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.31 6.84 9.66.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.37-3.37-1.37-.46-1.2-1.13-1.51-1.13-1.51-.92-.64.07-.63.07-.63 1.02.07 1.56 1.07 1.56 1.07.9 1.57 2.36 1.12 2.94.85.09-.65.35-1.13.63-1.39-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.04 1.02-2.76-.1-.26-.44-1.3.09-2.7 0 0 .83-.27 2.75 1.04A9.24 9.24 0 0112 7.17c.84.004 1.68.11 2.47.32 1.91-1.3 2.74-1.04 2.74-1.04.53 1.4.19 2.44.1 2.7.63.72 1.02 1.64 1.02 2.76 0 3.93-2.35 4.8-4.58 5.05.36.32.68.95.68 1.91 0 1.38-.01 2.49-.01 2.83 0 .27.18.58.69.48A10.008 10.008 0 0022 12.26C22 6.58 17.52 2 12 2z" />
      </svg>
    ),
  },
];

const Footer = () => {
  const { openModal } = useContactModal();
  return (
    <footer className="relative z-10 w-full bg-section-color/80 border-t border-foreground/10 backdrop-blur-lg shadow-2xl mt-24">
      <section className="container mx-auto py-16 px-4 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-20">
        {/* Left: Big CTA */}
        <div className="flex-1">
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground mb-6">
            Let&apos;s Bring Your
            <br />
            <span className="text-primary">AI Vision to Life</span>
            <span className="inline-block bg-primary text-background rounded-full p-2 align-middle ml-2 rotate-[-15deg] shadow-lg shadow-primary/15">
              <ArrowRight size={32} />
            </span>
          </h3>
          <p className="text-lg text-foreground/70 mb-8 max-w-xl">
            We help forward-thinking teams unlock business growth with custom AI
            and automation. Ready to start?
          </p>
          <button
            onClick={openModal}
            className="group flex items-center bg-primary text-background w-fit py-3 px-6 lg:py-4 lg:px-8 rounded-full gap-3 lg:gap-4 font-semibold cursor-pointer hover:bg-foreground hover:text-background transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-primary/20 mx-auto lg:mx-0"
          >
            <span className="text-lg lg:text-xl">Get Started Now</span>
            <div className="p-2 flex items-center justify-center bg-foreground rounded-full group-hover:bg-primary group-hover:text-primary-dark transition-all duration-300 ease-in-out border-2 border-primary group-hover:border-primary-dark -rotate-45 group-hover:rotate-0">
              <ArrowRight size={20} />
            </div>
          </button>
        </div>

        {/* Center: Newsletter */}
        <div className="flex-1 flex flex-col gap-6 max-w-md w-full self-start">
          <h4 className="text-2xl font-semibold mb-2">Stay in the Loop</h4>
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              // handle subscribe logic here
            }}
          >
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="flex-1 bg-background/80 p-4 rounded-xl placeholder:text-foreground/40 text-foreground border border-foreground/10 focus:outline-none focus:border-primary text-lg transition"
            />
            <button
              type="submit"
              className="text-center w-full bg-primary text-background font-semibold px-6 py-3 rounded-xl hover:bg-primary/80 transition-all duration-300 flex justify-center items-center gap-2 shadow cursor-pointer"
            >
              Subscribe
              <ArrowRight size={18} />
            </button>
          </form>
          <p className="text-sm text-foreground/40 mt-2">
            No spam, ever. We respect your privacy.
          </p>
        </div>

        {/* Right: Links & Socials */}
        <div className="flex-1 flex flex-col gap-8 w-full max-w-xs self-start">
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link
                className="text-foreground/60 hover:text-primary transition-all duration-200 hover:translate-x-2"
                href="/terms"
              >
                Terms and Conditions
              </Link>
              <Link
                className="text-foreground/60 hover:text-primary transition-all duration-200 hover:translate-x-2"
                href="/privacy"
              >
                Privacy Policy
              </Link>
              <Link
                className="text-foreground/60 hover:text-primary transition-all duration-200 hover:translate-x-2"
                href="/404"
              >
                Error 404
              </Link>
            </nav>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-3">Connect with us</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-primary bg-background/50 rounded-full p-2 transition-colors duration-300 border border-foreground/10 hover:border-primary"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="border-t border-foreground/10 mt-12 py-6 px-4 container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/40 text-center">
        <span>
          &copy; {new Date().getFullYear()} Aigenisis. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
