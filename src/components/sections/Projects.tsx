"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const ExperienceProjects = () => {
  return (
    <section
      id="experience"
      className="py-20 px-6 bg-gradient-to-t from-white to-sky-50 transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto space-y-16">
        <motion.h1
          className="text-4xl font-bold text-center text-gray-900 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Experience & Projects
        </motion.h1>

        {/* Work Experience */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 border-b border-gray-200 pb-2">
            💼 Work Experience
          </h2>

          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
            <p className="text-sm text-gray-500">Sep 2024 – Feb 2025</p>
            <h3 className="text-xl font-semibold text-gray-800">
              Full-stack Developer Intern –{" "}
              <span className="text-blue-600">Nhat Nguyen Technology</span>
            </h3>
            <ul className="list-disc ml-5 mt-3 text-gray-700 space-y-1">
              <li>
                Built a civil status data system using <strong>CakePHP</strong>.
              </li>
              <li>
                Integrated <strong>Elasticsearch</strong> to optimize complex search queries.
              </li>
              <li>
                Used <strong>MongoDB</strong> for auxiliary data flexibility.
              </li>
              <li>
                Delivered responsive UI to improve workflow efficiency.
              </li>
            </ul>
            <p className="mt-2 text-sm text-gray-500">
              <strong>Tech Stack:</strong> CakePHP, Elasticsearch, MongoDB, HTML/CSS
            </p>
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div
          id="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 border-b border-gray-200 pb-2">
            🛠️ Projects
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-xl p-6 shadow-md border border-gray-200">
            {/* Text */}
            <div className="md:w-1/2 space-y-3">
              <h3 className="text-xl font-bold text-gray-800">
                Daily Focus – Time Management Website
              </h3>
              <p className="text-gray-700 text-sm">
                A personal productivity app using the Pomodoro technique. Includes task
                management, performance analytics, and email reminders to help users stay focused.
              </p>

              <ul className="list-disc ml-5 text-sm text-gray-600 space-y-1">
                <li>Secure login with JWT and Google OAuth</li>
                <li>Task management (CRUD) with PostgreSQL and Prisma</li>
                <li>Pomodoro timer with session tracking</li>
                <li>Email reminders using Nodemailer</li>
              </ul>

              <p className="text-sm text-gray-500">
                <strong>Tech Stack:</strong> Next.js, TailwindCSS, PostgreSQL, REST API, JWT, OAuth
              </p>

              <div className="flex gap-4 mt-3">
                <a
                  href="https://daily-focus-six.vercel.app/"
                  target="_blank"
                  className="text-blue-600 hover:underline text-sm flex items-center gap-1"
                >
                  <FaExternalLinkAlt className="inline-block" /> Live Demo
                </a>
                <a
                  href="https://github.com/Altas463/daily-focus-Time-Management-Website"
                  target="_blank"
                  className="text-gray-800 hover:underline text-sm flex items-center gap-1"
                >
                  <FaGithub className="inline-block" /> GitHub
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceProjects;
