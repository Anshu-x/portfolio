import { FaArrowUp, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Footer({ resetHeroState }) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Ensure Hero becomes visible after scrolling back to top
    setTimeout(() => resetHeroState(), 100); // Slight delay to sync with scroll animation
  };

  return (
    <footer className="relative w-full py-8 flex flex-col items-center bg-transparent text-gray-400 text-sm">
      {/* Footer Content */}
      <p className="mb-2 text-gray-400 tracking-wide">
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-semibold">Azrithyx</span>. Built with passion and precision.
      </p>

      {/* Social Links */}
      <div className="flex gap-6 mt-4">
        {[
          { icon: <FaGithub className="text-2xl"/>, link: "https://github.com/yourprofile", color: "text-white" },
          { icon: <FaLinkedin className="text-2xl"/>, link: "https://linkedin.com/in/yourprofile", color: "text-blue-400" },
          { icon: <SiLeetcode className="text-2xl"/>, link: "https://leetcode.com/yourprofile", color: "text-yellow-400" },
          { icon: <FaEnvelope className="text-2xl"/>, link: "mailto:your.email@example.com", color: "text-gray-300" },
        ].map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-transform duration-200 hover:scale-110 ${item.color}`}
          >
            {item.icon}
          </a>
        ))}
      </div>

      {/* Back to Top Button */}
      <button
        onClick={handleScrollToTop}
        className="mt-8 bg-white/5 backdrop-blur-lg border border-white/15 shadow-xl rounded-full p-3 transition-all hover:bg-white/10 hover:border-white/30 hover:scale-110"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-2xl text-gray-300" />
      </button>
    </footer>
  );
}