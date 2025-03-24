import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { User, Briefcase, Buildings, Envelope } from "phosphor-react";
import { Home, Briefcase as LucideBriefcase, Award, Building2, Mail } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(window.scrollY);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeout.current) return;

      scrollTimeout.current = setTimeout(() => {
        setScrolled(window.scrollY > 50);

        // Hide/Show Navbar based on scroll direction
        if (window.scrollY > lastScrollY.current) {
          setShow(false);
        } else {
          setShow(true);
        }

        lastScrollY.current = window.scrollY;
        scrollTimeout.current = null;
      }, 100); // Increased debounce delay for better performance
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-8 left-1/2 transform -translate-x-1/2 z-50 px-8 py-3 rounded-full backdrop-blur-lg shadow-lg transition-all duration-300 border
        ${scrolled ? "bg-gray-600/30 border-indigo-400/40" : "bg-gray-500/20 border-gray-400/30"} gray
        ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12"}
        shiny-border
      `}
    >
      <ul className="flex items-center gap-10 md:gap-12 text-gray-300 text-[16px] font-medium tracking-wide">
        {[
          {
            label: "About",
            to: "about",
            icon: <User size={20} />,
            iconMobile: <Home size={20} />,
          },
          {
            label: "Projects",
            to: "projects",
            icon: <Briefcase size={20} />,
            iconMobile: <LucideBriefcase size={20} />,
          },
          {
            label: "Certificates",
            to: "certificates",
            icon: <Award size={20} />,
            iconMobile: <Award size={20} />,
          },
          {
            label: "Experience",
            to: "experience",
            icon: <Buildings size={20} />,
            iconMobile: <Building2 size={20} />,
          },
          {
            label: "Contact",
            to: "contact",
            icon: <Envelope size={20} />,
            iconMobile: <Mail size={20} />,
          },
        ].map((item) => (
          <li key={item.to} className="group relative">
            <Link
              to={item.to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-50}
              className="cursor-pointer hover:text-white transition-all relative flex items-center gap-2"
              activeClass="text-white"
            >
              {/* Icon for mobile, text for larger screens */}
              <span className="block md:hidden">{item.iconMobile}</span>
              <span className="hidden md:block">{item.label}</span>
              {/* Animated Underline */}
              <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}