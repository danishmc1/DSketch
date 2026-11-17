import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/app/lib/assets";

const openPositions = [
  {
    role: "Senior Architect",
    location: "Mongam Studio · Kerala",
    type: "Full-Time",
  },
  {
    role: "Interior Designer & 3D Visualizer",
    location: "Mongam Studio · Kerala",
    type: "Full-Time",
  },
  {
    role: "Project Site Engineer",
    location: "Kerala On-Site Projects",
    type: "Full-Time",
  },
  {
    role: "Architecture Intern",
    location: "Mongam Studio · Kerala",
    type: "Internship",
  },
];

export default function CareerPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-10">
      <div className="flex items-center gap-3">
        <div className="relative w-11 h-11 flex-shrink-0">
          <Image
            src={assetPath("/images/logo-black.png")}
            alt="D-Sketch Logo"
            fill
            className="object-contain dark:hidden"
            unoptimized
          />
          <Image
            src={assetPath("/images/logo-white.png")}
            alt="D-Sketch Logo"
            fill
            className="object-contain hidden dark:block"
            unoptimized
          />
        </div>
        <div>
          <h1 className="text-3xl font-light tracking-tight text-gray-900 dark:text-white transition-colors duration-200">
            Career at D-Sketch
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-xs uppercase tracking-widest transition-colors duration-200">
            Interior | Exterior | Construction
          </p>
        </div>
      </div>

      <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed transition-colors duration-200">
        We are always seeking creative, dedicated individuals — architects, interior designers, structural engineers, and site coordinators — who are passionate about context-driven design, craft excellence, and material innovation.
      </p>

      <div className="rounded-2xl border border-stone-200 bg-white/70 p-6 md:p-8 shadow-sm transition-colors duration-200 dark:border-stone-800 dark:bg-stone-900/60 dark:shadow-[0_18px_40px_rgba(0,0,0,0.2)] space-y-6">
        <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-4">
          <h2 className="text-xs uppercase tracking-[0.22em] text-stone-500 dark:text-stone-400 font-semibold">
            Open Opportunities
          </h2>
          <span className="text-[11px] font-mono text-stone-400 dark:text-stone-500">
            {openPositions.length} Positions Available
          </span>
        </div>

        <ul className="space-y-4">
          {openPositions.map((pos) => (
            <li
              key={pos.role}
              className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-stone-100 dark:border-stone-800/60 last:border-0 gap-2"
            >
              <div>
                <p className="font-medium text-stone-900 dark:text-white">
                  {pos.role}
                </p>
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  {pos.location}
                </p>
              </div>
              <span className="self-start sm:self-auto text-[10px] uppercase tracking-widest border border-stone-200 dark:border-stone-700 px-3 py-1 rounded-full text-stone-600 dark:text-stone-300">
                {pos.type}
              </span>
            </li>
          ))}
        </ul>

        <div className="pt-4 border-t border-stone-200 dark:border-stone-800 text-sm text-stone-600 dark:text-stone-400">
          <p className="leading-relaxed">
            To apply, email your portfolio and CV to{" "}
            <a href="mailto:dsketchmail@gmail.com" className="underline font-medium text-stone-900 dark:text-white">
              dsketchmail@gmail.com
            </a>{" "}
            with the subject line specifying the position.
          </p>
        </div>
      </div>
    </div>
  );
}