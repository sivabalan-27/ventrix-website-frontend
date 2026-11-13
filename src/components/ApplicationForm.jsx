
import { useState } from "react";
import axios from "axios";
import {
  ArrowUpRight,
  FileUp,
  FileText,
  X,
  User,
  BriefcaseBusiness,
  GraduationCap,
  CheckCircle2,
  Loader2,
} from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default function ApplicationForm({ position, onClose }) {
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    qualification: "",
    linkedin: "",
    portfolio: "",
    message: "",
  });

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#657187] focus:border-blue-500/60 focus:bg-blue-500/[0.04]";

  const labelClass =
    "mb-2 block text-xs font-medium text-[#cbd5e1]";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setStatus({ type: "", message: "" });
  };

  const handleResume = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const allowedExtensions = /\.(pdf|doc|docx)$/i;
    const isValidType =
      allowedExtensions.test(file.name);

    if (!isValidType) {
      setStatus({
        type: "error",
        message: "Please upload a PDF or Word document.",
      });
      e.target.value = "";
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setStatus({
        type: "error",
        message: "Resume must be smaller than 5 MB.",
      });
      e.target.value = "";
      return;
    }

    setResume(file);
    setStatus({ type: "", message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!resume) {
      setStatus({
        type: "error",
        message: "Please upload your resume.",
      });
      return;
    }

    try {
      setLoading(true);
      setStatus({ type: "", message: "" });

      const applicationData = new FormData();

      applicationData.append("position", position);
      applicationData.append("fullName", formData.fullName);
      applicationData.append("email", formData.email);
      applicationData.append("phone", formData.phone);
      applicationData.append("location", formData.location);
      applicationData.append("qualification", formData.qualification);
      applicationData.append("linkedin", formData.linkedin);
      applicationData.append("portfolio", formData.portfolio);
      applicationData.append("message", formData.message);
      applicationData.append("resume", resume);

      const response = await axios.post(
        `${API_URL}/api/applications`,
        applicationData
      );

      setStatus({
        type: "success",
        message:
          response.data?.message ||
          "Your application has been submitted successfully.",
      });
      setTimeout(() => {
        onClose();
      }, 2000);

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        location: "",
        qualification: "",
        linkedin: "",
        portfolio: "",
        message: "",
      });

      setResume(null);

      const fileInput = document.getElementById("resume");
      if (fileInput) fileInput.value = "";
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.response?.data?.message ||
          "Unable to submit your application. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c1220] text-[#eef1f7] shadow-2xl">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-600/[0.08] blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative p-6 sm:p-9">
        {/* Header */}
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="h-px w-6 bg-blue-500" />
              <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#8f99ad]">
                Ventrix Technologies · Careers
              </p>
            </div>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Let's get to know
              <br />
              <span className="text-blue-400">you.</span>
            </h2>

            <p className="mt-3 max-w-md text-xs leading-6 text-[#8f99ad] sm:text-sm">
              Complete the application form below. Our team will
              review your details.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close application form"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#8f99ad] transition hover:bg-white/10 hover:text-white"
          >
            <X size={17} />
          </button>
        </div>

        {/* Selected Position */}
        <div className="mb-8 flex items-center gap-3 rounded-xl border border-blue-500/20 bg-blue-500/[0.06] p-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
            <BriefcaseBusiness size={19} />
          </div>

          <div className="min-w-0">
            <p className="text-[9px] uppercase tracking-[0.16em] text-[#7185a5]">
              Applying for
            </p>
            <p className="mt-1 text-sm font-semibold">
              {position}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <section>
            <div className="mb-5 flex items-center gap-3">
              <User size={16} className="text-blue-400" />
              <h3 className="text-sm font-semibold">
                Personal Information
              </h3>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="fullName">
                  Full Name *
                </label>
                <input
                  id="fullName"
                  required
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="email">
                  Email Address *
                </label>
                <input
                  id="email"
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="phone">
                  Phone Number *
                </label>
                <input
                  id="phone"
                  required
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="location">
                  Location *
                </label>
                <input
                  id="location"
                  required
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="City, Country"
                  className={inputClass}
                />
              </div>
            </div>
          </section>

          <div className="border-t border-white/10" />

          {/* Professional Information */}
          <section>
            <div className="mb-5 flex items-center gap-3">
              <GraduationCap size={16} className="text-blue-400" />
              <h3 className="text-sm font-semibold">
                Professional Information
              </h3>
            </div>

            <div className="space-y-5">
              <div>
                <label className={labelClass} htmlFor="qualification">
                  Qualification *
                </label>
                <input
                  id="qualification"
                  required
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  placeholder="e.g. B.Tech in Computer Science"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="linkedin">
                  LinkedIn Profile
                </label>
                <input
                  id="linkedin"
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/in/your-profile"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="portfolio">
                  Portfolio / GitHub
                </label>
                <input
                  id="portfolio"
                  type="url"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  placeholder="https://github.com/your-profile"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass} htmlFor="message">
                  Why should we consider your application? *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us briefly about yourself and why you're interested in this role..."
                  className={`${inputClass} resize-y`}
                />
              </div>
            </div>
          </section>

          <div className="border-t border-white/10" />

          {/* Resume Upload */}
          <section>
            <div className="mb-4 flex items-center gap-3">
              <FileText size={16} className="text-blue-400" />
              <h3 className="text-sm font-semibold">
                Resume
              </h3>
            </div>

            <label
              htmlFor="resume"
              className="flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-white/20 bg-white/[0.02] px-5 py-8 text-center transition hover:border-blue-500/50 hover:bg-blue-500/[0.04]"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                <FileUp size={23} />
              </div>

              <p className="text-sm font-medium text-white">
                {resume ? resume.name : "Upload your resume"}
              </p>

              <p className="mt-2 text-[10px] text-[#8f99ad]">
                PDF or Word document · Maximum 5 MB
              </p>

              <input
                id="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleResume}
                className="hidden"
              />
            </label>

            {resume && (
              <div className="mt-3 flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] p-3">
                <div className="flex min-w-0 items-center gap-2">
                  <FileText
                    size={16}
                    className="shrink-0 text-blue-400"
                  />
                  <span className="truncate text-xs text-[#cbd5e1]">
                    {resume.name}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setResume(null);
                    const input = document.getElementById("resume");
                    if (input) input.value = "";
                  }}
                  className="text-[#8f99ad] hover:text-red-400"
                  aria-label="Remove resume"
                >
                  <X size={15} />
                </button>
              </div>
            )}
          </section>

          {/* Submission Feedback */}
          {status.message && (
            <div
              role="status"
              className={`rounded-xl border p-4 text-xs leading-6 ${
                status.type === "success"
                  ? "border-green-500/20 bg-green-500/[0.06] text-green-400"
                  : "border-red-500/20 bg-red-500/[0.06] text-red-400"
              }`}
            >
              {status.message}
            </div>
          )}

          {/* Submit */}
          <div className="border-t border-white/10 pt-6">
            <button
              type="submit"
              disabled={loading}
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-4 text-sm font-semibold text-white shadow-[0_8px_25px_rgba(59,130,246,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 size={17} className="animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Submit Application
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </>
              )}
            </button>

            <p className="mt-4 text-center text-[10px] leading-5 text-[#7185a5]">
              Your information will be used for recruitment purposes.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
