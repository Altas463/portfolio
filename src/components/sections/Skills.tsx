"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Database, Wrench } from "lucide-react";

const skills = [
  {
    title: "Programming Languages",
    icon: <Code2 className="w-6 h-6 text-blue-600" />,
    description: "Proficient in various widely-used programming languages.",
    items: ["JavaScript", "TypeScript", "C#", "Python", "PHP"],
  },
  {
    title: "Frameworks & Libraries",
    icon: <Layers className="w-6 h-6 text-purple-600" />,
    description: "Experienced with both frontend and backend frameworks.",
    items: ["Next.js", "ASP.NET MVC", "CakePHP"],
  },
  {
    title: "Databases",
    icon: <Database className="w-6 h-6 text-green-600" />,
    description: "Skilled in handling relational databases efficiently.",
    items: ["PostgreSQL", "SQL Server"],
  },
  {
    title: "Tools & DevOps",
    icon: <Wrench className="w-6 h-6 text-orange-600" />,
    description: "Familiar with development tools and containerization.",
    items: ["Git", "GitHub", "Docker", "XAMPP", "Laragon"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-white to-sky-50 px-6"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.title}
              className="p-6 rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-lg transition duration-300 text-left"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gradient-to-tr from-sky-100 to-white rounded-full shadow-sm">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {skill.title}
                </h3>
              </div>
              <p className="text-gray-500 mb-4 text-sm">{skill.description}</p>
              <ul className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full border border-blue-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
