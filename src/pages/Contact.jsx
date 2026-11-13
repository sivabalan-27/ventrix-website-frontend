
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Loader2,
} from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const contactDetails = [
  {
    icon: Mail,
    label: "Email us",
    value: "ventrixtechnologies@gmail.com",
    href: "mailto:ventrixtechnologies@gmail.com",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+91 73961 49431",
    href: "https://wa.me/917396149431",
  },
  {
    icon: MapPin,
    label: "Our location",
    value: "Hyderabad, India",
    href: "https://www.google.com/maps/search/?api=1&query=Hyderabad%2C+India",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setStatus({ type: "", message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setStatus({ type: "", message: "" });

      const response = await axios.post(
        `${API_URL}/api/contact`,
        formData
      );

      setStatus({
        type: "success",
        message:
          response.data?.message ||
          "Your message has been submitted successfully.",
      });

      // Clear success message after 3 seconds
      setTimeout(() => {
        setStatus({ type: "", message: "" });
      }, 3000);

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.response?.data?.message ||
          "Unable to send your message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#657187] focus:border-blue-500/60 focus:bg-blue-500/[0.04]";

  return (
    <main
      id="contact"
      className="relative min-h-screen overflow-hidden bg-[#070a14] text-[#eef1f7]"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-1/4 h-[400px] w-[400px] rounded-full bg-blue-600/[0.07] blur-[120px]" />

        <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-500/[0.05] blur-[120px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <section className="relative mx-auto flex min-h-screen w-[min(1080px,90vw)] flex-col justify-center py-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-7 bg-[#3b82f6]" />

            <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#8f99ad]">
              Get in touch · Contact
            </p>
          </div>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="text-[clamp(40px,5.5vw,68px)] font-semibold leading-[1.06] tracking-[-0.055em]">
              Let's start a
              <br />
              <span className="text-[#3b82f6]">conversation.</span>
            </h2>

            <p className="max-w-[340px] text-sm leading-7 text-[#8f99ad] sm:text-base">
              Have a project in mind or looking for the right
              technology partner? Let's discuss your ideas.
            </p>
          </div>
        </motion.div>

        {/* Contact Content */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            <div>
              <p className="mb-2 text-lg font-semibold">
                Let's connect.
              </p>

              <p className="max-w-sm text-sm leading-7 text-[#8f99ad]">
                Reach out to our team. We would be glad to hear
                about your project, ideas, or questions.
              </p>
            </div>

            {contactDetails.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={
                    item.label === "Our location" ||
                    item.label === "WhatsApp"
                      ? "_blank"
                      : undefined
                  }
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-white/10 bg-[#0c1220]/80 p-4 transition duration-300 hover:border-blue-500/40"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                    <Icon size={19} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] text-[#7185a5]">
                      {item.label}
                    </p>

                    <p className="mt-1 break-words text-sm font-medium text-[#dce4f1]">
                      {item.value}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={16}
                    className="shrink-0 text-[#7185a5] transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400"
                  />
                </a>
              );
            })}

            <a
              href="https://wa.me/917396149431"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-green-500/20 bg-green-500/[0.06] px-5 py-3 text-xs font-medium text-green-400 transition hover:bg-green-500/10"
            >
              <MessageCircle size={16} />
              Chat with us on WhatsApp
              <ArrowUpRight size={14} />
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl border border-white/10 bg-[#0c1220]/80 p-6 backdrop-blur-xl sm:p-8"
          >
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                <Send size={18} />
              </div>

              <div>
                <h3 className="text-base font-semibold">
                  Send us a message
                </h3>

                <p className="mt-1 text-[10px] text-[#8f99ad]">
                  Tell us a little about what you need.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-xs font-medium text-[#cbd5e1]"
                  >
                    Your Name *
                  </label>

                  <input
                    id="contact-name"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-xs font-medium text-[#cbd5e1]"
                  >
                    Email Address *
                  </label>

                  <input
                    id="contact-email"
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-xs font-medium text-[#cbd5e1]"
                >
                  Subject *
                </label>

                <input
                  id="contact-subject"
                  required
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What would you like to discuss?"
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-xs font-medium text-[#cbd5e1]"
                >
                  Your Message *
                </label>

                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or enquiry..."
                  className={`${inputClass} resize-y`}
                />
              </div>

              {/* Submission Feedback */}
              {status.message && (
                <p
                  role="status"
                  className={`rounded-xl border p-3 text-xs ${
                    status.type === "success"
                      ? "border-green-500/20 bg-green-500/[0.06] text-green-400"
                      : "border-red-500/20 bg-red-500/[0.06] text-red-400"
                  }`}
                >
                  {status.message}
                </p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#3b82f6] px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#2563eb] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 size={17} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowUpRight
                      size={17}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Statement */}
        <div className="mt-12 border-t border-white/10 pt-5">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[9px] uppercase tracking-[0.22em] text-[#7185a5]">
              Let's build something meaningful
            </p>

            <p className="text-lg font-semibold tracking-tight sm:text-xl">
              Ideas into{" "}
              <span className="text-[#3b82f6]">reality.</span>
            </p>

            <p className="text-xs text-[#8f99ad]">
              Ventrix Technologies · Hyderabad, India
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
