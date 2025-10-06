import { motion } from "framer-motion";
import { profile, heroHighlights, stats } from "../../data/content";

const Home = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-950 text-slate-100"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-24 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-500/40 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 translate-x-24 translate-y-24 rounded-full bg-indigo-500/30 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_65%)]" />
      </div>

      <div className="mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center gap-16 px-6 pt-32 pb-24 lg:flex-row lg:items-center">
        <motion.div
          className="max-w-xl space-y-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">
            {profile.role}
          </span>

          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Hi, I am <span className="text-sky-300">{profile.name}</span>. I design and
            build thoughtful digital products.
          </h1>

          <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
            {profile.summary}
          </p>

          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              What teams count on me for
            </p>
            <div className="flex flex-wrap gap-2">
              {heroHighlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-700/70 bg-slate-900/70 px-4 py-1 text-sm text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
            >
              Start a project
            </a>
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-sky-300 hover:text-sky-200"
              download
            >
              View resume
            </a>
          </div>

          <div className="grid gap-4 rounded-3xl border border-white/5 bg-white/5 p-6 backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <p className="text-3xl font-semibold text-white">{stat.value}</p>
                  <p className="text-xs uppercase tracking-wide text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-slate-300">
              <span>{profile.location}</span>
              <span className="hidden h-4 w-px bg-slate-700 sm:block" />
              <a
                href={`mailto:${profile.email}`}
                className="underline-offset-4 hover:underline"
              >
                {profile.email}
              </a>
              <span className="hidden h-4 w-px bg-slate-700 sm:block" />
              <a href={`tel:${profile.phone.split(" ").join("")}`} className="underline-offset-4 hover:underline">
                {profile.phone}
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative flex w-full max-w-md justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="absolute -top-8 -right-8 h-48 w-48 rounded-full bg-sky-400/30 blur-[80px]" />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.6)] backdrop-blur">
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.25),_transparent_70%)]" />
              <img
                src="/avatar.jpg"
                alt="Portrait of Tuc Pham"
                className="relative h-72 w-72 object-cover sm:h-80 sm:w-80"
              />
            </div>
            <div className="mt-6 space-y-2 text-sm text-slate-200">
              <p className="font-semibold">Currently exploring</p>
              <p className="text-slate-300">
                AI assisted product discovery and ways to surface insights faster for product teams.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
