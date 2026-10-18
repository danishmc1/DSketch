import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/app/lib/assets";

const services = [
  {
    title: "Architecture",
    subtitle: "Interior · Exterior · Planning",
    desc: "Context-responsive residential, commercial, and institutional architectural design. We deliver cohesive structural planning, elevation studies, and working drawings attuned to tropical and modern sensibilities.",
  },
  {
    title: "Construction Management",
    subtitle: "Turnkey Execution · Quality Assurance",
    desc: "Rigorous site execution and project management from groundbreaking to handover. Ensuring material integrity, structural safety, cost transparency, and adherence to architectural vision.",
  },
  {
    title: "Interior Design",
    subtitle: "Spatial Flow · Bespoke Millwork · Lighting",
    desc: "Crafted interior environments emphasizing tactile warmth, tailored cabinetry, natural illumination, and functional elegance tailored to contemporary living and commercial hospitality.",
  },
  {
    title: "Landscape Architecture",
    subtitle: "Biophilic Integration · Outdoor Living",
    desc: "Seamless harmony between the built environment and nature. Designing verdant courtyards, sustainable drainage, indigenous planting palettes, and tranquil outdoor living spaces.",
  },
];

export default function ServicesPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Banner */}
      <div className="relative w-full aspect-[16/6] min-h-[180px] max-h-[300px] rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-900 shadow-sm">
        <Image
          src={assetPath("/images/banner.jpeg")}
          alt="D-SKETCH Architecture Services"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 896px"
          unoptimized
        />
      </div>

      <div className="space-y-4">
        <h1 className="text-4xl font-light tracking-tight text-gray-900 dark:text-white transition-colors duration-200">
          Our Services
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed transition-colors duration-200 max-w-2xl">
          <strong>D-SKETCH</strong> provides end-to-end design and execution consultancy across 
          <strong> Architecture</strong>, <strong>Construction</strong>, <strong>Interior Design</strong>, and 
          <strong> Landscape Architecture</strong> — guiding vision from initial sketch to final occupancy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((s, idx) => (
          <div
            key={s.title}
            className="rounded-2xl border border-stone-200 bg-white/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-stone-300 hover:shadow-md dark:border-stone-800 dark:bg-stone-900/60 dark:hover:border-stone-700"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-mono tracking-widest text-stone-400 dark:text-stone-500 uppercase">
                0{idx + 1}
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400 border border-stone-200 dark:border-stone-700 px-2.5 py-0.5 rounded-full">
                {s.subtitle}
              </span>
            </div>
            <h3 className="text-xl font-medium tracking-tight text-stone-900 dark:text-white mb-2">
              {s.title}
            </h3>
            <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
              {s.desc}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Box */}
      <div className="text-center p-8 rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-50/60 dark:bg-stone-900/40">
        <h3 className="text-lg font-medium text-stone-900 dark:text-white mb-2">
          Have an upcoming project in mind?
        </h3>
        <p className="text-sm text-stone-500 dark:text-stone-400 mb-5">
          Schedule an initial consultation with our principal design team.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-black dark:bg-white text-white dark:text-black px-8 py-3 text-xs uppercase tracking-widest font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-200 hover:scale-105"
        >
          Consult Our Studio
        </Link>
      </div>
    </div>
  );
}