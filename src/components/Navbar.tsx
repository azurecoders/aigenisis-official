"use client";
import { ArrowRight, ChevronDown, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useContactModal } from "./ModalContext";

// Mock navigation items - replace with your actual navItems
const navItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Blog", href: "/blog" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openModal } = useContactModal();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className={`w-full transition-all duration-500 z-50`}>
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
          <div className="flex items-center justify-between">
            {/* Enhanced Logo */}
            <div className="flex items-center">
              <Link
                href="/"
                className="group flex items-center gap-3 transition-all duration-300"
              >
                <div>
                  <span className="text-2xl lg:text-3xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors duration-300">
                    Aigenisis<span className="text-primary">.</span>
                  </span>
                  <div className="text-xs text-foreground/60 font-medium tracking-wider">
                    DIGITAL AGENCY
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <ul className="flex items-center gap-8 xl:gap-12">
                {navItems.map((navItem) => (
                  <li key={navItem.title} className="relative group">
                    <a
                      className="relative text-lg font-medium text-foreground/80 hover:text-primary transition-all duration-300 py-2 px-1 overflow-hidden"
                      href={navItem.href}
                    >
                      <span className="relative z-10">{navItem.title}</span>
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/60 group-hover:w-full transition-all duration-300"></div>
                      <div className="absolute inset-0 bg-primary/5 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg"></div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enhanced CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={openModal}
                className="w-full lg:w-fit justify-between group flex items-center bg-foreground text-background py-2 px-6 rounded-full gap-4 font-semibold cursor-pointer hover:bg-primary hover:text-background transition-all duration-300 ease-in-out"
              >
                <span className="text-xl">{"Let's Talk"}</span>
                <div className="p-2 flex items-center justify-center bg-primary rounded-full group-hover:bg-foreground group-hover:text-primary-dark transition-all duration-300 ease-in-out border-2 border-primary group-hover:border-primary-dark">
                  <ArrowRight size={20} />
                </div>
              </button>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button
              className="lg:hidden relative w-12 h-12 rounded-xl border border-foreground/10 bg-section-color/50 backdrop-blur-sm text-foreground hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 flex items-center justify-center group"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute top-2 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                    mobileOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                ></span>
                <span
                  className={`absolute top-3.5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                    mobileOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`absolute top-5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                    mobileOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Enhanced Mobile Navigation */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-background/95 backdrop-blur-xl"
          onClick={() => setMobileOpen(false)}
        />

        {/* Mobile Menu Content */}
        <div
          className={`relative h-full flex flex-col transition-all duration-500 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-6 border-b border-foreground/10">
            <Link
              href="/"
              className="flex items-center gap-3"
              onClick={() => setMobileOpen(false)}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/60 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-background">A</span>
              </div>
              <span className="text-2xl font-bold text-primary">Aiby.</span>
            </Link>
            <button
              className="w-10 h-10 rounded-lg border border-foreground/10 bg-section-color/50 text-foreground hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 flex items-center justify-center"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex-1 overflow-y-auto py-8">
            <div className="px-6 space-y-2">
              {navItems.map((navItem, index) => (
                <a
                  key={navItem.title}
                  className={`group flex items-center gap-4 p-4 rounded-xl text-xl font-semibold text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 border border-transparent hover:border-primary/10 ${
                    mobileOpen ? "animate-fade-in-up" : ""
                  }`}
                  href={navItem.href}
                  onClick={() => setMobileOpen(false)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-2 h-2 rounded-full bg-primary/30 group-hover:bg-primary transition-colors duration-300"></div>
                  <span>{navItem.title}</span>
                  <ChevronDown
                    size={18}
                    className="ml-auto -rotate-90 group-hover:translate-x-1 transition-transform duration-300"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="p-6 border-t border-foreground/10">
            <a
              href="/contact"
              className="group w-full flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-primary/80 text-background py-4 px-8 rounded-2xl font-semibold text-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.02]"
              onClick={() => setMobileOpen(false)}
            >
              <span>{"Let's Talk"}</span>
              <div className="w-8 h-8 bg-background/20 rounded-full flex items-center justify-center group-hover:bg-background/30 transition-colors duration-300">
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-0.5 transition-transform duration-300"
                />
              </div>
            </a>
            <div className="mt-4 text-center">
              <p className="text-sm text-foreground/60">
                Ready to transform your digital presence?
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Navbar;
