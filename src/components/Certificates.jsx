import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo } from "react";
import certificates from "../data/certificates";

export default function Certificates() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.4, 1]);

  // Memoize the certificate data for performance
  const certData = useMemo(() => certificates || [], []);

  if (!certData.length) return null;

  return (
    <motion.section
      id="certificates"
      style={{ opacity }}
      className="py-24 px-8 text-white"
    >
      {/* Title */}
      <h1 className="text-4xl font-bold mb-12 text-center tracking-wider">
        Certifications
      </h1>

      {/* Certificate Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certData.map((cert, index) => (
          <motion.div
            key={`${cert.title}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.1, ease: "easeOut" }}
            whileHover={{
              scale: 1.07,
              boxShadow: "0px 15px 40px rgba(255, 255, 255, 0.15)",
              borderColor: "rgba(0, 255, 255, 0.4)",
            }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-lg p-6 cursor-pointer transition-all duration-300 hover:border-blue-400"
            onClick={() => window.open(cert.link, "_blank")}
          >
            {/* Certificate Title */}
            <h2 className="text-xl font-semibold mb-2">{cert.title}</h2>
            {/* Issuer */}
            <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
            {/* Date */}
            <p className="text-gray-500 text-sm">{cert.date}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
