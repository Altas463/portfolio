"use client";

import { motion } from "framer-motion";
import { profile, principles, heroHighlights } from "../../data/content";

const About = () => {
  return (
    <section
      id="about"
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
            About
          </span>
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Building calm, resilient products with empathy and strong craft.
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            {profile.tagline}
          </p>
        </motion.div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            className="space-y-8 rounded-3xl border border-slate-200 bg-slate-50 p-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4 text-slate-700">
              <p className="text-lg leading-relaxed">
                {profile.summary}
              </p>
              <p className="text-sm leading-relaxed text-slate-500">
                My background spans frontend craft, backend integrations, and supportive stakeholder communication. I am happiest when collaborating with product, design, and data teams to ship ideas that matter.
              </p>
            </div>

            <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Focus areas
              </p>
              <div className="flex flex-wrap gap-2">
                {heroHighlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-100 px-4 py-1 text-sm text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  Location
                </p>
                <p className="mt-1 font-semibold text-slate-700">
                  {profile.location}
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  Collaboration style
                </p>
                <p className="mt-1 font-semibold text-slate-700">
                  Calm, transparent, outcomes-driven
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-slate-600">
              {profile.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 transition hover:border-slate-400 hover:text-slate-900"
                >
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    {social.label}
                  </span>
                  <span className="font-medium">{social.handle}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">
                Working principles
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Each project is guided by a few non-negotiables that keep delivery sharp and thoughtful.
              </p>
              <div className="mt-6 space-y-6">
                {principles.map((principle) => (
                  <div key={principle.title} className="space-y-2">
                    <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                      {principle.title}
                    </p>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Availability
              </p>
              <p className="mt-3 text-lg font-semibold text-slate-800">
                Open to full-time opportunities and select freelance collaborations.
              </p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center justify-center rounded-full border border-slate-900 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white"
              >
                Let us collaborate
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
