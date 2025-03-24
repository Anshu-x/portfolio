import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaGitAlt, FaJava, FaJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiTensorflow, SiKubernetes, SiTypescript, SiPostgresql, SiFastapi } from "react-icons/si";
import { AiOutlineOpenAI } from "react-icons/ai";
import { motion } from "framer-motion";

const techStack = [
  { icon: <FaPython size={50} color="#FFD43B" />, key: "Python", link: "https://www.python.org" },
  { icon: <FaJava size={50} color="#68aad4" />, key: "Java", link: "https://www.java.com" },
  { icon: <FaJs size={50} color="#F7DF1E" />, key: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { icon: <SiTensorflow size={50} color="#FF6F00" />, key: "TensorFlow", link: "https://www.tensorflow.org" },
  { icon: <AiOutlineOpenAI size={50} color="#10a37f" />, key: "OpenAI", link: "https://openai.com" },

  { icon: <FaNodeJs size={50} color="#8CC84B" />, key: "Node.js", link: "https://nodejs.org" },
  { icon: <SiFastapi size={50} color="#05998f" />, key: "FastAPI", link: "https://fastapi.tiangolo.com" },
  { icon: <SiMongodb size={50} color="#4DB33D" />, key: "MongoDB", link: "https://www.mongodb.com" },
  { icon: <SiPostgresql size={50} color="#336791" />, key: "PostgreSQL", link: "https://www.postgresql.org" },

  { icon: <FaAws size={50} color="#FF9900" />, key: "AWS", link: "https://aws.amazon.com" },
  { icon: <FaDocker size={50} color="#2496ED" />, key: "Docker", link: "https://www.docker.com" },
  { icon: <SiKubernetes size={50} color="#326CE5" />, key: "Kubernetes", link: "https://kubernetes.io" },
  { icon: <FaGitAlt size={50} color="#F14E32" />, key: "Git", link: "https://git-scm.com" },

  { icon: <FaReact size={50} color="#61DAFB" />, key: "React", link: "https://react.dev" },
  { icon: <SiTailwindcss size={50} color="#38BDF8" />, key: "Tailwind CSS", link: "https://tailwindcss.com" },
  { icon: <SiTypescript size={50} color="#3178C6" />, key: "TypeScript", link: "https://www.typescriptlang.org" },
];

export default function TechStack() {
  return (
    <div className="grid grid-cols-4 gap-6">
      {techStack.map((tech) => (
        <motion.a
          key={tech.key}
          href={tech.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.05,
            duration: 0.2,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.15)",
          }}
          className="group relative flex items-center justify-center bg-transparent rounded-xl p-4 shadow-md transition-all"
        >
          <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity blur-lg" />

          {tech.icon}

          <motion.span
            initial={{ opacity: 0, y: 5 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 bg-black/80 text-gray-300 text-xs font-medium px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all pointer-events-none"
          >
            {tech.key}
          </motion.span>
        </motion.a>
      ))}
    </div>
  );
} 