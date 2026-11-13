
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#080b12] text-[#eef1f7]">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-64 w-64 rounded-full bg-blue-600/[0.05] blur-[90px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative mx-auto w-[min(1080px,90vw)] py-6">

        {/* Quick Links - Top */}
        <div className="flex flex-col gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white">
            Quick Links
          </h3>

          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a href="#home" className="text-[11px] text-[#8f99ad] hover:text-blue-400">Home</a>
            <a href="#about" className="text-[11px] text-[#8f99ad] hover:text-blue-400">About</a>
            <a href="#services" className="text-[11px] text-[#8f99ad] hover:text-blue-400">Services</a>
            <a href="#products" className="text-[11px] text-[#8f99ad] hover:text-blue-400">Products</a>
            <a href="#careers" className="text-[11px] text-[#8f99ad] hover:text-blue-400">Careers</a>
            <a href="#contact" className="text-[11px] text-[#8f99ad] hover:text-blue-400">Contact</a>
          </nav>
        </div>

        {/* Brand */}
        <div className="py-5">
          <a href="#home">
            <img
              src="/ventrix-technologies-logo.png"
              alt="Ventrix Technologies"
              className="h-7 w-auto object-contain"
            />
          </a>

          <p className="mt-2 max-w-md text-[11px] leading-5 text-[#8f99ad]">
            Building innovative digital solutions through creativity,
            engineering, and emerging technologies. Turning ambitious ideas
            into meaningful digital experiences.
          </p>

          <div className="mt-3 flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-1 text-[10px] font-medium text-blue-400 hover:text-blue-300"
            >
              Let's build something together
              <ArrowUpRight size={11} />
            </a>

            <a
              href="https://www.linkedin.com/company/ventrix-technologies/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[#8f99ad] transition hover:border-blue-500/40 hover:text-blue-400"
            >
              <span className="text-[11px] font-bold">in</span>
            </a>
          </div>
        </div>

        {/* Get in Touch - Bottom */}
        <div className="border-t border-white/10 pt-5">
          <h3 className="mb-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-white">
            Get in Touch
          </h3>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
            <a
              href="mailto:ventrixtechnologies@gmail.com"
              className="flex items-center gap-2 text-[11px] text-[#8f99ad] hover:text-blue-400"
            >
              <Mail size={12} className="shrink-0 text-blue-400" />
              ventrixtechnologies@gmail.com
            </a>

            <a
              href="https://wa.me/917396149431"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-[11px] text-[#8f99ad] hover:text-blue-400"
            >
              <Phone size={12} className="shrink-0 text-blue-400" />
              +91 73961 49431
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Hyderabad%2C+India"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-[11px] text-[#8f99ad] hover:text-blue-400"
            >
              <MapPin size={12} className="shrink-0 text-blue-400" />
              Hyderabad, India
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-5 flex flex-col gap-2 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[8px] text-[#718096]">
            © {new Date().getFullYear()} Ventrix Technologies. All rights reserved.
          </p>

          <p className="text-[8px] text-[#718096]">
            Ideas. Engineering. Impact.
          </p>

          <a
            href="#home"
            className="inline-flex items-center gap-1 text-[8px] text-[#8f99ad] hover:text-blue-400"
          >
            Back to top
            <ArrowUpRight size={10} />
          </a>
        </div>
      </div>
    </footer>
  );
}
