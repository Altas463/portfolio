import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/content";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-300">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">
            {profile.name}
          </p>
          <p className="text-sm text-slate-400">
            © {year} {profile.name}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4 text-slate-200">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="rounded-full border border-white/10 p-2 transition hover:border-white/40 hover:text-white"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://github.com/Altas463"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-white/10 p-2 transition hover:border-white/40 hover:text-white"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/pham-van-a-tu-ba7308322/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-white/10 p-2 transition hover:border-white/40 hover:text-white"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
