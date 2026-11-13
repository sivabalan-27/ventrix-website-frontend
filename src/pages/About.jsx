
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Target,
  Eye,
  Lightbulb,
  ShieldCheck,
  Users,
} from "lucide-react";

const values = [
  { icon: Lightbulb, title: "Innovation" },
  { icon: ShieldCheck, title: "Integrity" },
  { icon: Users, title: "Collaboration" },
];

export default function About() {
  return (
    <main
      id="about"
      className="relative min-h-[calc(100svh-80px)] scroll-mt-24 overflow-hidden bg-[#070a14] text-[#eef1f7]"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-1/4 h-[400px] w-[400px] rounded-full bg-blue-600/[0.07] blur-[120px]" />

        <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-500/[0.05] blur-[120px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <section className="relative mx-auto flex min-h-[calc(100svh-80px)] w-[min(1080px,90vw)] flex-col justify-center py-12 sm:py-16">

        <div className="grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">

          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-7 bg-[#3b82f6]" />

              <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#8f99ad]">
                About Ventrix · Hyderabad, India
              </p>
            </div>

            <h1 className="text-[clamp(40px,5.5vw,70px)] font-semibold leading-[1.06] tracking-[-0.055em]">
              Where Ideas
              <br />
              <span className="text-[#3b82f6]">
                Become Innovation.
              </span>
            </h1>

            <p className="mt-7 max-w-[510px] text-sm leading-7 text-[#8f99ad] sm:text-base">
              We are a technology-driven company focused on building
              innovative digital solutions. We bring together creativity,
              engineering, and emerging technologies to transform ideas
              into impactful digital experiences.
            </p>

            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#3b82f6] px-6 py-3 text-xs font-medium text-white shadow-[0_8px_25px_rgba(59,130,246,0.18)] transition duration-300 hover:-translate-y-1 hover:bg-[#2f74ea] sm:text-sm"
            >
              Let's work together

              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-blue-500/[0.08] blur-[80px]" />

            <div className="relative rounded-2xl border border-white/10 bg-[#0c1220]/80 p-6 backdrop-blur-xl sm:p-8">

              <div className="mb-7 flex items-center justify-between">
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#7185a5]">
                  What defines us
                </span>

                <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_#3b82f6]" />
              </div>

              {/* Mission */}
              <div className="flex gap-4 border-b border-white/10 pb-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                  <Target size={19} />
                </div>

                <div>
                  <h3 className="mb-2 text-base font-semibold">
                    Our Mission
                  </h3>

                  <p className="text-xs leading-6 text-[#8f99ad] sm:text-sm">
                    Deliver innovative and reliable digital solutions
                    that help businesses solve challenges and grow.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="flex gap-4 border-b border-white/10 py-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                  <Eye size={19} />
                </div>

                <div>
                  <h3 className="mb-2 text-base font-semibold">
                    Our Vision
                  </h3>

                  <p className="text-xs leading-6 text-[#8f99ad] sm:text-sm">
                    Shape the future through technology, continuous
                    innovation, and meaningful digital experiences.
                  </p>
                </div>
              </div>

              {/* Core values */}
              <div className="pt-6">
                <p className="mb-4 text-[9px] uppercase tracking-[0.2em] text-[#7185a5]">
                  Our core values
                </p>

                <div className="flex flex-wrap gap-2">
                  {values.map(({ icon: Icon, title }) => (
                    <span
                      key={title}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-[10px] text-[#c3ccdc]"
                    >
                      <Icon size={13} className="text-blue-400" />
                      {title}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Bottom statement */}
        <div className="mt-12 border-t border-white/10 pt-5 sm:mt-14">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

            <p className="text-[9px] uppercase tracking-[0.22em] text-[#7185a5]">
              Built for what's next
            </p>

            <p className="text-lg font-semibold tracking-tight sm:text-xl">
              Beyond technology.{" "}
              <span className="text-[#3b82f6]">
                Real impact.
              </span>
            </p>

            <p className="text-xs text-[#8f99ad]">
              Creating smarter digital experiences.
            </p>

          </div>
        </div>

      </section>
    </main>
  );
}
