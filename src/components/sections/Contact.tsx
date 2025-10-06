"use client";

import { motion } from "framer-motion";
import { contact, profile } from "../../data/content";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 py-24 text-slate-100"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-sky-500/40 blur-[120px]" />
        <div className="absolute bottom-10 right-20 h-64 w-64 rounded-full bg-indigo-500/40 blur-[100px]" />
      </div>
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          className="rounded-[2.5rem] border border-white/10 bg-white/5 p-12 text-center backdrop-blur"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">
            Contact
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            {contact.headline}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-200">
            {contact.subheadline}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {contact.actions.map((action, index) => {
              const isPrimary = index === 0;
              const isDownload = action.url.endsWith(".pdf");

              return (
                <a
                  key={action.label}
                  href={action.url}
                  className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${
                    isPrimary
                      ? "border border-white/10 bg-sky-400 text-slate-950 hover:bg-sky-300"
                      : "border border-white/30 text-slate-100 hover:border-white/60"
                  }`}
                  download={isDownload ? "" : undefined}
                >
                  {action.label}
                </a>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-200">
            <a
              href={`mailto:${profile.email}`}
              className="underline-offset-4 hover:underline"
            >
              {profile.email}
            </a>
            <span className="hidden h-4 w-px bg-white/20 sm:block" />
            <a
              href={`tel:${profile.phone.split(" ").join("")}`}
              className="underline-offset-4 hover:underline"
            >
              {profile.phone}
            </a>
            <span className="hidden h-4 w-px bg-white/20 sm:block" />
            <span>{profile.location}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
