
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

const links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Products", id: "products" },
  { name: "Careers", id: "careers" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll to the selected section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (!section) {
      console.warn(`Section with id "${id}" was not found.`);
      return;
    }

    setOpen(false);
    setActiveSection(id);

    const navbarOffset = 100;
    const sectionPosition =
      section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: Math.max(0, sectionPosition - navbarOffset),
      behavior: "smooth",
    });
  };

  // Detect active section while scrolling
  useEffect(() => {
    const updateActiveSection = () => {
      const offset = 160;
      let currentSection = "home";

      links.forEach((link) => {
        const section = document.getElementById(link.id);

        if (
          section &&
          section.getBoundingClientRect().top <= offset
        ) {
          currentSection = link.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    updateActiveSection();

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, []);

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="fixed left-0 top-0 z-50 w-full px-4 pt-5 sm:px-8"
      >
        <nav className="mx-auto flex max-w-[1450px] items-center justify-between gap-4">

          {/* BRAND LOGO */}
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="flex shrink-0 items-center"
            aria-label="Go to Home"
          >
            <img
              src="/ventrix-technologies-logo.png"
              alt="Ventrix Technologies"
              className="h-10 w-56 -translate-y-1 object-contain"
            />
          </button>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-1 rounded-full border border-white/[0.09] bg-white/[0.045] p-2 shadow-2xl shadow-black/30 backdrop-blur-2xl lg:flex">
            {links.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  className="group relative rounded-full px-4 py-2.5"
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-nav"
                      className="absolute inset-0 rounded-full border border-blue-400/20 bg-blue-500/15"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}

                  <span
                    className={`relative z-10 text-[12px] font-medium transition-colors ${
                      isActive
                        ? "text-blue-300"
                        : "text-gray-400 group-hover:text-white"
                    }`}
                  >
                    {link.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* RIGHT ACTION */}
          <div className="hidden items-center gap-5 lg:flex">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>

              <span className="text-[10px] tracking-wide text-gray-400">
                Let's build something
              </span>
            </div>

            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="group flex items-center gap-3 rounded-full bg-white py-2 pl-5 pr-2 text-black transition-all duration-300 hover:bg-blue-500 hover:text-white"
            >
              <span className="text-xs font-semibold">
                Let's Talk
              </span>

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-colors group-hover:bg-white group-hover:text-blue-600">
                <ArrowUpRight size={17} />
              </span>
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white backdrop-blur-xl lg:hidden"
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </nav>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="fixed left-4 right-4 top-20 z-40 rounded-3xl border border-white/10 bg-[#0c1424]/95 p-5 shadow-2xl backdrop-blur-2xl lg:hidden"
          >
            <p className="mb-4 text-[10px] tracking-[0.3em] text-gray-500">
              NAVIGATION
            </p>

            <div className="space-y-2">
              {links.map((link) => {
                const isActive = activeSection === link.id;

                return (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className={`flex w-full items-center justify-between rounded-xl p-4 text-left transition-colors ${
                      isActive
                        ? "bg-blue-500/10 text-blue-400"
                        : "text-gray-300 hover:bg-white/5"
                    }`}
                  >
                    <span className="text-sm font-medium">
                      {link.name}
                    </span>

                    <ArrowRight size={16} />
                  </button>
                );
              })}
            </div>

            {/* MOBILE CTA */}
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="mt-5 flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 p-4 text-white"
            >
              <span className="text-sm font-semibold">
                Start a project
              </span>

              <ArrowUpRight size={19} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
