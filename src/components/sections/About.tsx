"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-24 px-6 bg-gradient-to-b from-sky-50 via-white to-blue-50"
    >
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Title */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A developer passionate about building beautiful, useful, and real-world products.
          </p>
        </motion.div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Intro */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-800 leading-relaxed">
              I’m a web developer with a clear orientation toward building{" "}
              <span className="font-semibold text-blue-600">modern applications</span> and{" "}
              <span className="font-semibold text-emerald-600">great user experiences</span>.
              I especially love frontend, while also having solid backend experience.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              With skills ranging from{" "}
              <span className="font-medium text-purple-600">React / Next.js</span> to{" "}
              <span className="font-medium text-orange-500">Node.js / PostgreSQL</span>,
              I’m always learning and evolving to deliver meaningful products.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              Working with me, you’ll find someone who is{" "}
              <span className="italic text-gray-700">meticulous, logical, and highly responsible</span>.
            </p>
          </motion.div>

          {/* Right - Highlight Card */}
          <motion.div
            className="relative bg-white border border-gray-200 rounded-3xl p-8 shadow-xl overflow-hidden"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-10 -right-10 w-44 h-44 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full opacity-30 blur-3xl pointer-events-none" />
            <div className="relative z-10 space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Things I'm proud of:
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>🚀 Built a full-stack personal project from scratch (Next.js)</li>
                <li>🎨 Focused on minimalistic, clear, and user-friendly UX</li>
                <li>🛠️ Proficient in Git, RESTful APIs, databases, and basic security</li>
                <li>📚 Constantly learning and optimizing code every day</li>
              </ul>
              <p className="pt-4 text-sm text-gray-500">
                "I don't just write code—I strive to create real value."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-700 text-lg">
            If you're looking for a responsible, proactive, and creative developer...
          </p>
          <a
            href="mailto:atu3012@gmail.com"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-base px-6 py-3 rounded-xl transition duration-300 shadow-md"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
