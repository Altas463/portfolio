"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "../data/content";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);
  const close = () => setOpen(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="flex items-center gap-3 font-semibold text-slate-900"
          onClick={close}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-900 text-sm uppercase tracking-[0.2em]">
            TP
          </span>
          <span className="hidden text-base sm:block">{profile.name}</span>
        </a>

        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="transition hover:text-slate-900"
                onClick={close}
              >
                {section.label}
              </a>
            ))}
          </div>

          <a
            href={profile.resumeUrl}
            className="hidden rounded-full border border-slate-900 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white md:inline-flex"
            download
          >
            Resume
          </a>

          <button
            type="button"
            className="inline-flex rounded-full border border-slate-300 p-2 text-slate-700 transition hover:border-slate-500 md:hidden"
            onClick={toggle}
            aria-label="Toggle navigation"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <div
        className={`md:hidden ${
          open
            ? "max-h-96 border-t border-slate-200"
            : "max-h-0 border-t border-transparent"
        } overflow-hidden bg-white transition-all duration-300`}
      >
        <div className="space-y-2 px-6 pb-6 pt-4 text-sm font-medium text-slate-700">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="block rounded-full px-4 py-2 transition hover:bg-slate-100"
              onClick={close}
            >
              {section.label}
            </a>
          ))}

          <a
            href={profile.resumeUrl}
            download
            className="block rounded-full border border-slate-900 px-4 py-2 text-center font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white"
            onClick={close}
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
