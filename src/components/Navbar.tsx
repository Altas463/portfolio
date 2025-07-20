"use client";

import { useState } from "react";
import { Home, User, Folder, BadgeCheck, FileText } from "lucide-react";
import clsx from "clsx";

const navItems = [
  { id: "home", label: "Home", icon: <Home size={18} /> },
  { id: "about", label: "About", icon: <User size={18} /> },
  { id: "projects", label: "Projects", icon: <Folder size={18} /> },
  { id: "skills", label: "Skills", icon: <BadgeCheck size={18} /> },
];

export default function SidebarNav() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 h-full w-16 hover:w-48 transition-all duration-300 bg-white shadow z-50 flex flex-col items-start gap-4 px-2 py-6 group">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className="flex items-center gap-3 px-3 py-2 rounded-full hover:bg-blue-100 transition w-full"
          onMouseEnter={() => setHovered(item.id)}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full shrink-0">
            {item.icon}
          </div>
          <span
            className={clsx(
              "text-sm font-medium transition-opacity",
              hovered === item.id
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100"
            )}
          >
            {item.label}
          </span>
        </a>
      ))}

      <div className="mt-auto w-full">
        <a
          href="/CV-ENG_Pham-Van-A-Tu_Fullstack-developer.pdf"
          download
          className="flex items-center gap-3 px-3 py-2 transition group w-full hover:bg-blue-100 rounded-full"
          onMouseEnter={() => setHovered("cv")}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="w-10 h-10 flex items-center justify-center bg-green-600 text-white rounded-full shrink-0">
            <FileText size={18} />
          </div>
          <span
            className={clsx(
              "text-sm font-medium transition-opacity",
              hovered === "cv"
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100"
            )}
          >
            Tải CV
          </span>
        </a>
      </div>
    </nav>
  );
}
