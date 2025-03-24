import { motion } from "framer-motion";
import experience from "../data/experience";

export default function Experience() {
  if (!experience || experience.length === 0) return null;

  return (
    <section id="experience" className="py-24 px-6 md:px-16 text-white">
      <h1 className="text-4xl font-bold mb-12 text-center tracking-wider">
        Experience
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {experience.map((exp, index) => (
          <motion.div
            key={`${exp.company}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.1,
              duration: 0.3,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 8px 20px rgba(255, 255, 255, 0.08)",
            }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg shadow-md p-5 transition-all"
          >
            <h2 className="text-xl font-semibold mb-2">{exp.position}</h2>
            <p className="text-gray-400">{exp.company}</p>
            <p className="text-gray-500 text-sm">{exp.date}</p>
            <p className="text-gray-400 mt-3 leading-relaxed">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
