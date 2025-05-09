import { TypeAnimation } from "react-type-animation";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "../styles/Hero.css"; // Import the glitch CSS

export default function Hero() {
  const { scrollY } = useScroll();
  const [glitch, setGlitch] = useState(false);

  // Smooth opacity and position transition
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const yPosition = useTransform(scrollY, [0, 300], [0, -50]);

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let stars = [];
    const numStars = window.innerWidth < 768 ? 20 : 80;

    const createStars = () => {
      stars = Array.from({ length: numStars }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * (window.innerWidth < 768 ? 1 : 2),
        speed: Math.random() * 0.5 + 0.1, // Increased speed
      }));
    };

    let frame;
    let lastTime = 0;

    const drawStars = (time) => {
      if (time - lastTime < 16) {
        frame = requestAnimationFrame(drawStars);
        return;
      }
      lastTime = time;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });

      frame = requestAnimationFrame(drawStars);
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createStars();
    };

    resizeCanvas();
    frame = requestAnimationFrame(drawStars);

    window.addEventListener("resize", resizeCanvas);
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitch(true);
      const glitchDuration = Math.random() * (1000 - 500) + 500; // Random duration between 0.5s to 1s
      setTimeout(() => setGlitch(false), glitchDuration);
    }, Math.random() * (4000 - 2000) + 2000); // Random interval between 2s to 4s

    return () => clearInterval(glitchInterval);
  }, []);

  const resetHeroState = () => {
    scrollY.set(0);
  };

  return (
    <motion.section
      style={{
        opacity,
        y: yPosition,
        visibility: opacity.get() === 0 ? "hidden" : "visible",
        pointerEvents: opacity.get() === 0 ? "none" : "auto",
      }}
      className="min-h-[100svh] flex flex-col items-center justify-center text-center relative overflow-hidden bg-[#000]"
    >
      {/* Space Background Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* "I am" + Wave Icon */}
      <motion.div
        className="text-2xl md:text-3xl font-semibold text-gray-400 flex items-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        I am
      </motion.div>

      {/* Name with Glitch Effect */}
      <motion.h1
        className={`text-[clamp(50px,12vw,90px)] font-extrabold bg-clip-text text-transparent bg-linear-to-r from-indigo-600 via-blue-700 to-blue-900 drop-shadow-[0_5px_20px_rgba(255,255,255,0.1)] ${glitch ? "glitch" : ""}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Anshuman Nayak
      </motion.h1>

      {/* Typing Effect */}
      <TypeAnimation
        sequence={["Full-Stack Developer & AI Innovator"]}
        wrapper="span"
        speed={60}
        className="text-xl md:text-3xl font-medium text-indigo-300 mt-3"
        repeat={0}
      />

      {/* CTA Button */}
      <motion.a
        href="#projects"
        whileHover={{
          scale: 1.08,
          boxShadow: "0px 0px 20px rgba(75, 0, 130, 0.4)", // Soft indigo glow
        }}
        whileTap={{ scale: 0.95 }}
        className="mt-10 px-8 py-3 bg-transparent border border-indigo-400 rounded-full text-gray-300 font-semibold hover:bg-indigo-400/10 transition-all backdrop-blur-lg "
      >
        My Work
      </motion.a>

      {/* Masking Gradient */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-[#000] to-transparent pointer-events-none"
        style={{ opacity }}
      />
    </motion.section>
  );
}