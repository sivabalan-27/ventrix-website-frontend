
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  BrainCircuit,
  Cloud,
  MonitorCog,
} from "lucide-react";

const products = [
  {
    name: "MyServiceHub",
    category: "Service Management",
    description:
      "A digital platform to simplify service requests, management, and customer interactions.",
    tags: ["Management", "Automation"],
    icon: BriefcaseBusiness,
  },
  {
    name: "VentrixAI Platform",
    category: "Artificial Intelligence",
    description:
      "AI-powered solutions designed to streamline workflows and support smarter decisions.",
    tags: ["AI Solutions", "Intelligence"],
    icon: BrainCircuit,
  },
  {
    name: "CloudStack Pro",
    category: "Cloud Technology",
    description:
      "Cloud-focused solutions that support scalable, secure, and efficient business operations.",
    tags: ["Cloud", "Scalability"],
    icon: Cloud,
  },
  {
    name: "EnterpriseOS",
    category: "Enterprise Solutions",
    description:
      "An integrated digital solution designed to simplify enterprise processes and operations.",
    tags: ["Enterprise", "Productivity"],
    icon: MonitorCog,
  },
];

export default function Products() {
  return (
    <main
      id="products"
      className="relative min-h-screen overflow-hidden bg-[#070a14] text-[#eef1f7] lg:h-screen lg:min-h-0"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-1/4 h-[400px] w-[400px] rounded-full bg-blue-600/[0.07] blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-500/[0.05] blur-[120px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <section className="relative mx-auto flex min-h-screen w-[min(1080px,90vw)] flex-col justify-center py-16 sm:py-20 lg:h-full lg:min-h-0 lg:py-14">
        {/* Heading */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-7 bg-[#3b82f6]" />
              <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#8f99ad]">
                What we build · Our products
              </p>
            </div>

            <h2 className="text-[clamp(40px,5.5vw,68px)] font-semibold leading-[1.06] tracking-[-0.055em]">
              Products built
              <br />
              <span className="text-[#3b82f6]">for what's next.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="max-w-[340px] text-sm leading-7 text-[#8f99ad] sm:text-base"
          >
            Purpose-driven digital products designed to simplify operations,
            unlock possibilities, and create impact.
          </motion.p>
        </div>

        {/* Product Cards */}
        <div className="grid gap-3 sm:grid-cols-2">
          {products.map((product, index) => {
            const Icon = product.icon;

            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group relative flex min-h-[130px] flex-col overflow-hidden rounded-xl border border-white/[0.08] bg-[#0c1220]/75 p-4 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-[#101a2d]/90"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-500/[0.06] blur-3xl transition duration-500 group-hover:bg-blue-500/[0.12]" />

                <div className="relative flex items-start justify-between">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10 text-blue-400">
                    <Icon size={16} />
                  </div>

                  <span className="text-[9px] uppercase tracking-[0.16em] text-[#7185a5]">
                    {product.category}
                  </span>
                </div>

                <div className="relative mt-3">
                  <h3 className="text-sm font-semibold tracking-tight text-[#eef1f7]">
                    {product.name}
                  </h3>

                  <p className="mt-1 max-w-[440px] text-[11px] leading-5 text-[#8f99ad]">
                    {product.description}
                  </p>
                </div>

                <div className="relative mt-3 flex flex-wrap gap-1.5">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2 py-1 text-[9px] text-[#9ba8bd]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Statement */}
        <div className="mt-8 border-t border-white/10 pt-5 sm:mt-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[9px] uppercase tracking-[0.22em] text-[#7185a5]">
              Built with purpose
            </p>

            <p className="text-lg font-semibold tracking-tight sm:text-xl">
              Innovation.{" "}
              <span className="text-[#3b82f6]">
                Delivered through technology.
              </span>
            </p>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-xs font-medium text-[#8f99ad] transition hover:text-white"
            >
              Enquire about our products
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
