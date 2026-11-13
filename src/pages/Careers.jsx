
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Palette,
  Smartphone,
  MapPin,
  Clock3,
  X,
  GraduationCap,
  BriefcaseBusiness,
} from "lucide-react";
import ApplicationForm from "../components/ApplicationForm";

const jobs = [
  {
    id: 1,
    title: "Full Stack Developer",
    category: "Full Stack Development",
    description:
      "Build scalable web applications by developing frontend interfaces, backend services, and database integrations.",
    icon: Code2,
    location: "Hyderabad, India",
    duration: "Full-time",
    skills: ["React.js", "JavaScript", "Node.js", "Express.js", "MongoDB", "MySQL"],
    responsibilities: [
      "Develop responsive frontend interfaces using React.js.",
      "Build backend services and REST APIs.",
      "Integrate databases with web applications.",
      "Debug, test, and optimize application performance.",
      "Collaborate with the development team.",
    ],
    requirements: [
      "Strong knowledge of HTML, CSS, and JavaScript.",
      "Understanding of React.js and Node.js.",
      "Familiarity with REST APIs and databases.",
      "Problem-solving and communication skills.",
    ],
  },
  {
    id: 2,
    title: "UI/UX Designer",
    category: "UI/UX Design",
    description:
      "Create intuitive, visually appealing, and user-friendly digital experiences through thoughtful design.",
    icon: Palette,
    location: "Hyderabad, India",
    duration: "Full-time",
    skills: ["Figma", "Wireframing", "Prototyping", "UI Design", "UX Research", "Responsive Design"],
    responsibilities: [
      "Design user-friendly interfaces for web and mobile applications.",
      "Create wireframes, prototypes, and design layouts.",
      "Improve user experience through design iterations.",
      "Collaborate with developers to implement designs.",
      "Maintain consistency across digital products.",
    ],
    requirements: [
      "Knowledge of UI/UX design principles.",
      "Familiarity with Figma or similar design tools.",
      "Understanding of responsive design.",
      "Creativity and attention to detail.",
    ],
  },
  {
    id: 3,
    title: "Application Developer",
    category: "Application Development",
    description:
      "Develop and maintain applications with a focus on functionality, performance, and user experience.",
    icon: Smartphone,
    location: "Hyderabad, India",
    duration: "Full-time",
    skills: ["JavaScript", "React Native", "Dart", "APIs", "Database", "Problem Solving"],
    responsibilities: [
      "Develop and maintain application features.",
      "Integrate APIs and database services.",
      "Test applications and resolve technical issues.",
      "Improve application functionality and performance.",
      "Collaborate with the development team.",
    ],
    requirements: [
      "Knowledge of programming fundamentals.",
      "Familiarity with application development.",
      "Understanding of APIs and databases.",
      "Willingness to learn and solve problems.",
    ],
  },
];

const internships = [
  {
    id: 4,
    title: "Full Stack Developer Intern",
    category: "Full Stack Development",
    description:
      "Build modern web applications by working on frontend interfaces, backend APIs, and database integration.",
    icon: Code2,
    location: "Remote",
    duration: "3–6 Months",
    skills: ["React.js", "JavaScript", "Node.js", "Express.js", "MongoDB", "MySQL"],
    responsibilities: [
      "Develop responsive frontend interfaces using React.js.",
      "Build backend logic and REST APIs.",
      "Integrate databases with web applications.",
      "Debug, test, and improve application performance.",
      "Collaborate with the development team.",
    ],
    requirements: [
      "Knowledge of HTML, CSS, and JavaScript.",
      "Basic understanding of React.js and Node.js.",
      "Familiarity with REST APIs and databases.",
      "Problem-solving skills and willingness to learn.",
    ],
  },
  {
    id: 5,
    title: "UI/UX Developer Intern",
    category: "UI/UX Design",
    description:
      "Create intuitive, visually appealing, and user-friendly digital experiences through thoughtful design.",
    icon: Palette,
    location: "Remote",
    duration: "3–6 Months",
    skills: ["Figma", "Wireframing", "Prototyping", "UI Design", "UX Research", "Responsive Design"],
    responsibilities: [
      "Design user-friendly interfaces for web and mobile applications.",
      "Create wireframes, prototypes, and design layouts.",
      "Improve user experience through design iterations.",
      "Collaborate with developers to implement designs.",
      "Maintain consistency across digital products.",
    ],
    requirements: [
      "Basic understanding of UI/UX design principles.",
      "Familiarity with Figma or similar design tools.",
      "Understanding of responsive design.",
      "Creativity and attention to detail.",
    ],
  },
  {
    id: 6,
    title: "Application Developer Intern",
    category: "Application Development",
    description:
      "Develop and maintain applications with a focus on functionality, performance, and user experience.",
    icon: Smartphone,
    location: "Remote",
    duration: "3–6 Months",
    skills: ["JavaScript", "React Native", "Dart", "APIs", "Database", "Problem Solving"],
    responsibilities: [
      "Assist in developing and maintaining applications.",
      "Build and improve application features.",
      "Integrate APIs and database services.",
      "Test applications and fix technical issues.",
      "Work with the team to deliver reliable solutions.",
    ],
    requirements: [
      "Basic knowledge of programming fundamentals.",
      "Familiarity with application development concepts.",
      "Understanding of APIs and databases.",
      "Willingness to learn new technologies.",
    ],
  },
];

function OpportunityCard({ position, index, type, onApply }) {
  const Icon = position.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group flex flex-col rounded-2xl border border-white/10 bg-[#0c1220]/80 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-500/40"
    >
      <div className="mb-5 flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
          <Icon size={21} />
        </div>

        <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-[9px] font-medium text-blue-400">
          {type}
        </span>
      </div>

      <p className="mb-2 text-[9px] uppercase tracking-[0.16em] text-[#7185a5]">
        {position.category}
      </p>

      <h3 className="text-lg font-semibold tracking-tight">
        {position.title}
      </h3>

      <p className="mt-3 min-h-[66px] text-xs leading-6 text-[#8f99ad]">
        {position.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {position.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[9px] text-[#aeb9cb]"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-white/10 pt-4 text-[10px] text-[#8f99ad]">
        <span className="flex items-center gap-1.5">
          <MapPin size={12} className="text-blue-400" />
          {position.location}
        </span>

        <span className="flex items-center gap-1.5">
          <Clock3 size={12} className="text-blue-400" />
          {position.duration}
        </span>
      </div>

      <button
        onClick={() => onApply(position)}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#3b82f6] px-5 py-3 text-xs font-medium text-white transition duration-300 hover:bg-[#2563eb]"
      >
        Apply Now
        <ArrowUpRight size={14} />
      </button>
    </motion.div>
  );
}

function JobDescription({ position, onApply }) {
  return (
    <details className="group rounded-xl border border-white/10 bg-white/[0.02] p-4">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-xs font-medium text-[#cbd5e1]">
        {position.title}
        <span className="text-blue-400 transition-transform group-open:rotate-45">
          +
        </span>
      </summary>

      <div className="mt-4 border-t border-white/10 pt-4">
        <p className="mb-2 text-[10px] font-semibold text-white">
          Responsibilities
        </p>

        <ul className="space-y-2 text-[10px] leading-5 text-[#8f99ad]">
          {position.responsibilities.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>

        <p className="mb-2 mt-4 text-[10px] font-semibold text-white">
          Requirements
        </p>

        <ul className="space-y-2 text-[10px] leading-5 text-[#8f99ad]">
          {position.requirements.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>

        <button
          onClick={() => onApply(position)}
          className="mt-5 inline-flex items-center gap-2 text-[10px] font-medium text-blue-400 transition hover:text-blue-300"
        >
          Apply for this role
          <ArrowUpRight size={13} />
        </button>
      </div>
    </details>
  );
}

export default function Careers() {
  const [activeTab, setActiveTab] = useState("jobs");
  const [selectedPosition, setSelectedPosition] = useState(null);

  const activePositions = activeTab === "jobs" ? jobs : internships;
  const activeType = activeTab === "jobs" ? "Full-time" : "Internship";

  const handleApply = (position) => {
    setSelectedPosition(position);
  };

  const closeApplication = () => {
    setSelectedPosition(null);
  };

  return (
    <main
      id="careers"
      className="relative min-h-screen overflow-x-hidden bg-[#070a14] text-[#eef1f7]"
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
          className="mb-9"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-7 bg-[#3b82f6]" />
            <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#8f99ad]">
              Join our team · Careers
            </p>
          </div>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="text-[clamp(40px,5.5vw,68px)] font-semibold leading-[1.06] tracking-[-0.055em]">
              Build your
              <br />
              <span className="text-[#3b82f6]">future with us.</span>
            </h2>

            <p className="max-w-[340px] text-sm leading-7 text-[#8f99ad] sm:text-base">
              Explore opportunities, develop your skills, and work
              on meaningful technology solutions.
            </p>
          </div>
        </motion.div>

        {/* Opportunity Tabs */}
        <div className="mb-8 flex flex-wrap gap-3">
          <button
            onClick={() => setActiveTab("jobs")}
            className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-xs font-medium transition duration-300 ${
              activeTab === "jobs"
                ? "border-blue-500 bg-blue-600 text-white shadow-[0_8px_25px_rgba(59,130,246,0.18)]"
                : "border-white/10 bg-white/[0.03] text-[#8f99ad] hover:border-blue-500/40 hover:text-white"
            }`}
          >
            <BriefcaseBusiness size={15} />
            Job Opportunities
          </button>

          <button
            onClick={() => setActiveTab("internships")}
            className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-xs font-medium transition duration-300 ${
              activeTab === "internships"
                ? "border-blue-500 bg-blue-600 text-white shadow-[0_8px_25px_rgba(59,130,246,0.18)]"
                : "border-white/10 bg-white/[0.03] text-[#8f99ad] hover:border-blue-500/40 hover:text-white"
            }`}
          >
            <GraduationCap size={15} />
            Internship Opportunities
          </button>
        </div>

        {/* Active Opportunities */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">
                {activeTab === "jobs"
                  ? "Job Opportunities"
                  : "Internship Opportunities"}
              </h3>

              <p className="mt-1 text-xs text-[#8f99ad]">
                {activeTab === "jobs"
                  ? "Explore full-time career opportunities."
                  : "Explore opportunities to learn, build, and grow."}
              </p>
            </div>

            <span className="text-[10px] text-[#7185a5]">
              {activePositions.length} roles
            </span>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {activePositions.map((position, index) => (
              <OpportunityCard
                key={position.id}
                position={position}
                index={index}
                type={activeType}
                onApply={handleApply}
              />
            ))}
          </div>

          {/* Job Descriptions */}
          <div className="mt-8">
            <p className="mb-3 text-[9px] font-medium uppercase tracking-[0.2em] text-[#7185a5]">
              Explore role details
            </p>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
              {activePositions.map((position) => (
                <JobDescription
                  key={position.id}
                  position={position}
                  onApply={handleApply}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Statement */}
        <div className="mt-10 border-t border-white/10 pt-5">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[9px] uppercase tracking-[0.22em] text-[#7185a5]">
              Your future starts here
            </p>

            <p className="text-lg font-semibold tracking-tight sm:text-xl">
              Learn. Build.{" "}
              <span className="text-[#3b82f6]">Grow.</span>
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs text-[#8f99ad] transition hover:text-blue-400"
            >
              Contact Ventrix
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      <AnimatePresence>
        {selectedPosition && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] overflow-y-auto bg-[#070a14]/95 px-4 py-8 backdrop-blur-md"
          >
            <div className="mx-auto w-full max-w-3xl">

              <ApplicationForm
                position={selectedPosition.title}
                onClose={closeApplication}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
