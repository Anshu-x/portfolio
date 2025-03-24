import { useState, useCallback } from "react";
import {
  FaBrain,
  FaCode,
  FaRocket,
  FaLaptopCode,
  FaEnvelope,
} from "react-icons/fa";
import TechStack from "./TechStack";

export default function About() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = useCallback(() => {
    navigator.clipboard.writeText("ansumanreet333@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40 2xl:px-56 bg-transparent"
    >
      {/* Left Side - About Section */}
      <div className="max-w-2xl w-full space-y-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
          About Me
        </h1>

        <div className="space-y-6 text-gray-300 text-base md:text-lg leading-relaxed">
          {[
            {
              icon: <FaBrain size={22} className="text-blue-400" />,
              title: "Passionate Problem Solver:",
              description:
                "I thrive on tackling complex challenges and crafting efficient, scalable solutions.",
            },
            {
              icon: <FaCode size={22} className="text-green-400" />,
              title: "Strong Foundation in DSA:",
              description:
                "Deep understanding of algorithms, data structures, and problem-solving patterns.",
            },
            {
              icon: <FaRocket size={22} className="text-red-400" />,
              title: "AI and ML Enthusiast:",
              description:
                "Actively exploring Machine Learning, TensorFlow, and AI-powered solutions.",
            },
            {
              icon: <FaLaptopCode size={22} className="text-yellow-400" />,
              title: "Full-Stack Developer:",
              description:
                "Proficient in both frontend and backend development using modern frameworks and tools.",
            },
          ].map(({ icon, title, description }, index) => (
            <div key={index} className="flex items-start gap-3">
              {icon}
              <div>
                <span className="font-semibold text-white">{title} </span>
                {description}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Line + Gradient Border Button */}
        <div className="mt-6">
          <p className="text-gray-300 text-base md:text-lg">
            Got similar interests? Let’s start a project together!
          </p>
          <button
            onClick={handleCopyEmail}
            className={`mt-4 text-white px-6 md:px-8 py-3 rounded-full transition-all border-2 ${
              copied
                ? "bg-gradient-to-r from-cyan-900 to-blue-900 border-transparent"
                : "bg-transparent border-gray-700 hover:bg-opacity-20"
            } flex items-center gap-2`}
          >
            <FaEnvelope size={18} className="text-blue-400" />
            {copied ? "Email Copied!" : "Copy My Email Address"}
          </button>
        </div>
      </div>

      {/* Right Side - Tech Stack Section */}
      <div className="mt-12 lg:mt-0 lg:ml-16 w-full max-w-lg">
        <TechStack />
      </div>
    </section>
  );
}
