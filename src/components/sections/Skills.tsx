"use client";

import { motion } from "framer-motion";
import { skills } from "../../data/content";

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="max-w-3xl space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-600">
            Skills
          </span>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            A reliable toolkit for product teams that ship fast and iterate often.
          </h2>
          <p className="text-base leading-relaxed text-slate-600">
            From design systems to infrastructure handoffs, I focus on pairing thoughtful UX with maintainable engineering practices.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              className="flex h-full flex-col gap-6 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  {skill.category}
                </p>
                <p className="text-sm leading-relaxed text-slate-600">
                  {skill.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 text-sm text-slate-700">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-white px-4 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-auto rounded-2xl border border-dashed border-slate-200 bg-white/80 p-4 text-xs text-slate-500">
                <p>
                  These skills are reinforced through regular pair programming, code reviews, and keeping a sharp eye on developer experience.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
