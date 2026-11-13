
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Smartphone,
  BrainCircuit,
  Blocks,
  Megaphone,
  Lightbulb,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Web Development",
    description: "Responsive websites and modern web applications.",
    icon: Code2,
  },
  {
    number: "02",
    title: "Mobile Application Development",
    description: "Intuitive mobile apps for seamless user experiences.",
    icon: Smartphone,
  },
  {
    number: "03",
    title: "AI & Automation Solutions",
    description: "Intelligent systems that simplify workflows.",
    icon: BrainCircuit,
  },
  {
    number: "04",
    title: "Software Development",
    description: "Custom software built around business requirements.",
    icon: Blocks,
  },
  {
    number: "05",
    title: "Digital Marketing",
    description: "Digital strategies that improve online visibility.",
    icon: Megaphone,
  },
  {
    number: "06",
    title: "IT Consulting",
    description: "Technology guidance for smarter business decisions.",
    icon: Lightbulb,
  },
];

export default function Services() {
  return (
    <main
      id="services"
      className="relative min-h-screen overflow-hidden bg-[#070a14] text-[#eef1f7] lg:h-screen lg:min-h-0"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-1/4 h-[350px] w-[350px] rounded-full bg-blue-600/[0.07] blur-[110px]" />

        <div className="absolute -right-40 bottom-0 h-[350px] w-[350px] rounded-full bg-cyan-500/[0.05] blur-[110px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <section className="relative mx-auto flex min-h-screen w-[min(1080px,90vw)] flex-col justify-center py-20 lg:h-full lg:min-h-0 lg:py-14">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-7 bg-[#3b82f6]" />

            <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#8f99ad]">
              What we do · Our services
            </p>
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="text-[clamp(40px,5.5vw,68px)] font-semibold leading-[1.06] tracking-[-0.055em]">
              Technology that
              <br />
              <span className="text-[#3b82f6]">
                moves you forward.
              </span>
            </h2>

            <p className="max-w-[340px] text-sm leading-7 text-[#8f99ad] sm:text-base">
              Digital solutions designed to solve challenges and create
              meaningful business impact.
            </p>
          </div>
        </motion.div>

        {/* Services grid */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                className="group relative flex min-h-[145px] flex-col rounded-xl border border-white/[0.08] bg-[#0c1220]/70 p-4 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-[#101a2d]/90 lg:h-[145px] lg:min-h-0"
              >
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10 text-blue-400 transition group-hover:bg-blue-500/20">
                    <Icon size={18} strokeWidth={1.7} />
                  </div>

                  <span className="text-[9px] tracking-widest text-[#52617b]">
                    / {service.number}
                  </span>
                </div>

                <h3 className="mb-1.5 text-sm font-semibold tracking-tight sm:text-base">
                  {service.title}
                </h3>

                <p className="text-[11px] leading-[1.6] text-[#8f99ad] sm:text-xs">
                  {service.description}
                </p>

                <div className="absolute bottom-0 left-4 right-4 h-px origin-left scale-x-0 bg-gradient-to-r from-blue-500/70 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              </motion.article>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-5 flex flex-col gap-2 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[9px] uppercase tracking-[0.2em] text-[#7185a5]">
            Our capabilities
          </p>

          <p className="text-base font-semibold">
            One vision.{" "}
            <span className="text-[#3b82f6]">
              Multiple possibilities.
            </span>
          </p>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-xs text-[#8f99ad] transition hover:text-blue-400"
          >
            Discuss your project

            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </div>
      </section>
    </main>
  );
}


