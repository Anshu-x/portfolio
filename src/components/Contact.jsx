import { FaEnvelope } from "react-icons/fa";
import Background from "./Background";

export default function Contact() {
  const email = "your.email@example.com";

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Background Layer */}
      <Background />

      {/* Clean One-Liner */}
      <p className="text-gray-300 text-2xl max-w-2xl text-center mb-6">
        Got a groundbreaking idea? <br/> Let’s team up and turn it into reality.
      </p>

      {/* Contact Button */}
      <a
        href={`mailto:${email}`}
        className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-gray-300 text-lg shadow-md backdrop-blur-md hover:bg-white/20 hover:border-white/30 transition-all duration-300"
      >
        <FaEnvelope className="text-xl" />
        Shoot me an email
      </a>
    </section>
  );
}
