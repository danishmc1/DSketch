import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/app/lib/assets";

const coreServices = [
  {
    number: "01",
    title: "Architecture & Planning",
    subtitle: "Residential · Commercial · Institutional",
    desc: "We create functional, thoughtfully designed spaces that respond to their surroundings, lifestyle requirements, and architectural preferences. Our services include architectural planning, interior and exterior design coordination, elevation development, and detailed working drawings, balancing contemporary design with the local tropical context.",
  },
  {
    number: "02",
    title: "Construction Management",
    subtitle: "Turnkey Execution · Site Supervision · Quality Assurance",
    desc: "We manage construction from initial site preparation to project handover, ensuring that execution remains aligned with the approved design and project requirements. Our approach focuses on material selection, construction quality, structural considerations, cost transparency, and effective site coordination.",
  },
  {
    number: "03",
    title: "Interior Design",
    subtitle: "Space Planning · Custom Furniture · Lighting Design",
    desc: "We design interiors that balance functionality, comfort, and visual appeal. From spatial planning and bespoke cabinetry to lighting and material selection, every element is considered to create cohesive interiors suited to contemporary living and commercial environments.",
  },
  {
    number: "04",
    title: "Landscape Architecture",
    subtitle: "Outdoor Living · Natural Integration · Sustainable Design",
    desc: "We create outdoor spaces that complement the architecture and connect the built environment with nature. Our landscape solutions incorporate courtyards, thoughtful planting schemes, sustainable drainage considerations, and inviting outdoor living areas, with an emphasis on locally suitable plant species and natural elements.",
  },
];

const documentationPhases = [
  {
    number: "01",
    title: "Architectural Planning & Elevations",
    items: [
      "Building Plans",
      "3D Elevations – All Four Sides",
      "Building Set-Out Drawings",
    ],
  },
  {
    number: "02",
    title: "Technical & Construction Drawings",
    items: [
      "Foundation Detail Drawings",
      "Basement Detail Drawings",
      "Concrete Detail Drawings",
      "Floor-wise Masonry Detail Drawings",
      "Floor-wise Door & Window Detail Drawings",
      "Electrical Detail Drawings",
      "Plastering Detail Drawings",
      "Painting Detail Drawings",
    ],
  },
  {
    number: "03",
    title: "Interior Design & Finish Details",
    items: [
      "Interior 3D Views – All Four Sides",
      "Room-wise Furniture Detail Drawings",
      "Ceiling Detail Drawings",
      "Flooring Detail Drawings",
      "Interior Painting Detail Drawings",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-16">
      {/* Hero Banner */}
      <div className="relative w-full aspect-[1024/235] rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-900 shadow-sm">
        <Image
          src={assetPath("/images/banner.jpeg")}
          alt="D-Sketch Architecture Services — Designing Visions. Building Legacy"
          fill
          priority
          className="object-cover object-left md:object-center"
          sizes="(max-width: 1280px) 100vw, 1024px"
          unoptimized
        />
      </div>

      {/* Page Header & Intro */}
      <div className="space-y-4">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-[0.25em] text-stone-500 dark:text-stone-400 font-medium">
            D-SKETCH
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-stone-400 dark:text-stone-500 font-mono">
            Interior | Exterior | Construction
          </p>
        </div>
        <h1 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 dark:text-white transition-colors duration-200">
          Our Services
        </h1>
        <h2 className="text-xl md:text-2xl font-light text-stone-800 dark:text-stone-200 tracking-tight">
          Thoughtful Design. Seamless Execution. Lasting Value.
        </h2>
        <div className="w-16 h-0.5 bg-black dark:bg-white mt-1 transition-colors duration-200" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 text-stone-600 dark:text-stone-300 text-base leading-relaxed">
          <p>
            We provide integrated architectural, construction, interior design, and landscape solutions, guiding projects from initial concepts and planning to detailed documentation and on-site execution.
          </p>
          <p>
            Whether you&apos;re planning a new home, developing a commercial space, or transforming an existing property, we bring design, technical expertise, and project coordination together to create spaces that reflect your vision.
          </p>
        </div>
      </div>

      {/* Core Services Section */}
      <div className="space-y-8 pt-4 border-t border-stone-200 dark:border-stone-800">
        <div>
          <h2 className="text-2xl md:text-3xl font-light tracking-tight text-stone-900 dark:text-white">
            Core Services
          </h2>
          <p className="text-xs uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400 mt-1">
            Integrated architecture, interiors, construction & landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coreServices.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-stone-200 bg-white/70 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-stone-400 hover:shadow-md dark:border-stone-800 dark:bg-stone-900/60 dark:hover:border-stone-700 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono tracking-widest text-stone-400 dark:text-stone-500 uppercase font-semibold">
                    {service.number}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-stone-600 dark:text-stone-300 border border-stone-200 dark:border-stone-700 bg-stone-50/80 dark:bg-stone-800/60 px-3 py-1 rounded-full font-medium">
                    {service.subtitle}
                  </span>
                </div>
                <h3 className="text-xl font-medium tracking-tight text-stone-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Design & Documentation Section */}
      <div className="space-y-8 pt-6 border-t border-stone-200 dark:border-stone-800">
        <div>
          <h2 className="text-2xl md:text-3xl font-light tracking-tight text-stone-900 dark:text-white">
            Detailed Design & Documentation
          </h2>
          <p className="text-sm text-stone-600 dark:text-stone-300 max-w-3xl leading-relaxed mt-2">
            Every successful project begins with careful planning and detailed documentation. We provide comprehensive architectural and technical drawings to guide construction, coordinate different stages of execution, and translate design concepts into buildable solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {documentationPhases.map((phase) => (
            <div
              key={phase.title}
              className="rounded-2xl border border-stone-200 bg-white/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-stone-400 hover:shadow-md dark:border-stone-800 dark:bg-stone-900/60 dark:hover:border-stone-700 flex flex-col"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400">
                  {phase.number}
                </span>
                <h3 className="text-base font-semibold text-stone-900 dark:text-white tracking-tight">
                  {phase.title}
                </h3>
              </div>

              <div className="w-full h-px bg-stone-200 dark:bg-stone-800 mb-4" />

              <ul className="space-y-2.5 flex-1 text-sm text-stone-600 dark:text-stone-300">
                {phase.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-400 dark:bg-stone-500 mt-2 flex-shrink-0" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Box */}
      <div className="text-center p-8 md:p-12 rounded-3xl border border-stone-200 dark:border-stone-800 bg-gradient-to-b from-stone-50 to-stone-100/60 dark:from-stone-900/60 dark:to-stone-950/80 shadow-sm">
        <h3 className="text-2xl md:text-3xl font-light text-stone-900 dark:text-white mb-2">
          Let&apos;s Build Something Meaningful.
        </h3>
        <p className="text-sm md:text-base text-stone-500 dark:text-stone-400 max-w-xl mx-auto mb-6">
          Have a project in mind? Let&apos;s discuss your ideas and explore how we can bring your vision to life.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium rounded-full hover:bg-stone-800 dark:hover:bg-stone-200 transition-all duration-200 hover:scale-105 shadow-sm"
        >
          <span>Get in Touch | Discuss Your Project</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
