import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import projects from "../data/projects";
import Background from "./Background";

export default function Projects() {
  if (!projects || projects.length === 0) return null;

  return (
    <section id="projects" className="relative min-h-screen py-24 px-6 md:px-12 overflow-hidden">
      {/* Background Layer */}
      <Background />

      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-100 tracking-wide">
        My Work
      </h1>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={`${project.title}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.05,
              duration: 0.2,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.04,
              rotateY: 5,
              boxShadow: "0 14px 40px rgba(255, 255, 255, 0.15)",
              transition: { duration: 0.2, ease: "easeInOut" },
            }}
            whileTap={{ scale: 0.97 }}
            className="bg-white/10 backdrop-blur-lg border border-white/15 shadow-xl rounded-3xl overflow-hidden cursor-pointer transition-transform"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
                loading="lazy"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />

              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{
                  opacity: 1,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}
                className="absolute inset-0 flex items-center justify-center transition-opacity"
              >
                <motion.h2
                  initial={{ scale: 0.9 }}
                  whileHover={{
                    scale: 1,
                    textShadow: "0px 0px 15px rgba(255, 255, 255, 0.7)",
                  }}
                  className="text-2xl font-semibold text-white"
                >
                  {project.title}
                </motion.h2>
              </motion.div>
            </div>

            {/* Project Info */}
            <div className="p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
                {project.title}
              </h2>
              <p className="text-gray-400 leading-relaxed mb-3">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack?.map((tech, i) => (
                  <span
                    key={`${project.title}-${tech}-${i}`}
                    className="text-xs md:text-sm bg-gray-700/50 text-gray-300 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* ✅ Action Buttons */}
              <div className="flex justify-end gap-2 mt-2">
                {/* Live Link Button */}
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/15 transition-all backdrop-blur-md"
                >
                  <ExternalLink size={18} />
                </motion.a>

                {/* GitHub Button */}
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/15 transition-all backdrop-blur-md"
                >
                  <Github size={18} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
