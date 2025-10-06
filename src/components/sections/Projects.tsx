"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { experience, projects } from "../../data/content";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const ExperienceProjects = () => {
  return (
    <>
      <section
        id="experience"
        className="bg-slate-950 py-24 text-slate-100"
      >
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="max-w-3xl space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">
              Experience
            </span>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Shipping production work with care and measurable outcomes.
            </h2>
            <p className="text-base leading-relaxed text-slate-300">
              Highlights from recent collaborations and how they moved the needle for teams.
            </p>
          </motion.div>

          <div className="mt-14 space-y-8">
            {experience.map((item) => (
              <motion.div
                key={item.company}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute left-6 top-10 h-14 w-14 rounded-full border border-white/20 bg-white/10" />
                <div className="relative grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
                      <span className="font-semibold uppercase tracking-wide text-slate-200">
                        {item.role}
                      </span>
                      <span className="h-4 w-px bg-slate-700" />
                      <span>{item.company}</span>
                      <span className="h-4 w-px bg-slate-700" />
                      <span>{item.period}</span>
                    </div>
                    <p className="text-base leading-relaxed text-slate-200">
                      {item.summary}
                    </p>
                  </div>
                  <div className="space-y-4 text-sm text-slate-300">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      Outcomes delivered
                    </p>
                    <ul className="space-y-3">
                      {item.achievements.map((achievement) => (
                        <li key={achievement} className="leading-relaxed">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="bg-slate-900 py-24 text-slate-100"
      >
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            className="max-w-3xl space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">
              Projects
            </span>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Selected work blending UX polish with dependable engineering.
            </h2>
            <p className="text-base leading-relaxed text-slate-300">
              A sample of products built end-to-end, from discovery and prototyping through launch.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <motion.article
                key={project.title}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {project.image ? (
                  <div className="relative h-56 overflow-hidden border-b border-white/5">
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
                  </div>
                ) : null}

                <div className="flex flex-1 flex-col gap-6 p-8">
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                      {project.subtitle}
                    </p>
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-300">
                      {project.description}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-slate-200">
                    <p className="font-semibold text-white">Impact</p>
                    <p className="mt-2 leading-relaxed text-slate-300">
                      {project.impact}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 text-xs text-slate-200">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/10 px-3 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.links.length > 0 ? (
                    <div className="flex flex-wrap gap-3 pt-2 text-sm font-semibold">
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 transition hover:border-white/40 hover:text-white"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span>{link.label}</span>
                          <ArrowUpRight size={16} />
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ExperienceProjects;
