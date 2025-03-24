import { useEffect, useState, useRef } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      // Use requestAnimationFrame for better performance
      requestAnimationFrame(() => setPosition({ x, y }));
    };

    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    window.addEventListener("mousemove", handleMouseMove);

    // Hover Effect on Interactive Elements
    document.querySelectorAll("a, button, .hoverable").forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.querySelectorAll("a, button, .hoverable").forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`pointer-events-none fixed w-[24px] h-[24px] rounded-full transition-transform duration-200 ease-out mix-blend-difference z-[99999]
        ${hovered ? "bg-blue-400/90 scale-150 blur-lg" : "bg-blue-400/70 blur-md"}`}
      style={{
        left: `${position.x - 12}px`,
        top: `${position.y - 12}px`,
        transform: hovered ? "scale(1.2)" : "scale(1)",
      }}
    />
  );
};

export default Cursor;
