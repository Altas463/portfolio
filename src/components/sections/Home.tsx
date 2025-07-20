// src/components/sections/Home.tsx
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex justify-center items-center bg-gradient-to-b from-white to-sky-50 px-6"
    >
      <div className="max-w-3xl text-center">
        <motion.img
          src="/avatar.jpg"
          alt="Avatar"
          className="w-36 h-36 md:w-44 md:h-44 rounded-full mx-auto mb-6 shadow-xl object-cover border-4 border-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        />

        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Hi, I'm <span className="text-blue-600">Tứ Phạm</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          A web developer passionate about crafting minimal interfaces and smooth user experiences. I focus on modern frontend development, performance optimization, and simplicity.
        </motion.p>

        <motion.p
          className="text-base text-gray-500 italic mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          “Clean code, clear mind.”
        </motion.p>

        {/* Contact Info */}
        <motion.div
          className="space-y-2 text-gray-700 text-sm md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex justify-center items-center gap-2">
            <Phone className="w-5 h-5 text-blue-600" />
            <span>0329 265 343</span>
          </div>
          <div className="flex justify-center items-center gap-2">
            <Mail className="w-5 h-5 text-blue-600" />
            <span>atu3012@gmail.com</span>
          </div>
          <div className="flex justify-center items-center gap-2">
            <MapPin className="w-5 h-5 text-blue-600" />
            <span>District 10, Ho Chi Minh City</span>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <a
            href="https://github.com/Altas463"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/pham-van-a-tu-ba7308322/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:atu3012@gmail.com"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
