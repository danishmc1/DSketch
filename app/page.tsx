import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/app/lib/assets";

const portfolioImages = [
  {
    src: "/images/project-exterior-1.jpg",
    label: "Architecture",
    title: "Residential Villa",
    span: "row-span-2",
  },
  {
    src: "/images/project-kitchen-modern.jpg",
    label: "Interior Design",
    title: "Modern Kitchen",
    span: "",
  },
  {
    src: "/images/project-dining.jpg",
    label: "Interior Design",
    title: "Dining Space",
    span: "",
  },
  {
    src: "/images/project-living-room.jpg",
    label: "Interior Design",
    title: "Living & Staircase",
    span: "row-span-2",
  },
  {
    src: "/images/project-bathroom.jpg",
    label: "Interior Design",
    title: "Bathroom Vanity",
    span: "",
  },
  {
    src: "/images/project-kitchen-classic.jpg",
    label: "Interior Design",
    title: "Classic Kitchen",
    span: "",
  },
  {
    src: "/images/project-exterior-2.jpg",
    label: "Architecture",
    title: "Modern Residence",
    span: "row-span-2",
  },
  {
    src: "/images/project-kitchen-detail.jpg",
    label: "Interior Design",
    title: "Kitchen Detail",
    span: "",
  },
];

const services = [
  {
    num: "01",
    name: "Architecture & Planning",
    desc: "Functional, climate-sensitive spaces — residential, commercial, and institutional.",
  },
  {
    num: "02",
    name: "Construction Management",
    desc: "Turnkey execution with on-site supervision, quality assurance, and cost transparency.",
  },
  {
    num: "03",
    name: "Interior Design",
    desc: "Bespoke interiors balancing functionality, comfort, and refined visual character.",
  },
  {
    num: "04",
    name: "Landscape Architecture",
    desc: "Outdoor living spaces that connect the built environment with nature.",
  },
];

export default function Home() {
  return (
    <div className="space-y-0">
      {/* ── Hero Banner ─────────────────────────────────────────────── */}
      <div className="relative w-full aspect-[1024/235] rounded-2xl overflow-hidden border border-stone-200/80 dark:border-stone-800 bg-stone-100 dark:bg-stone-900 shadow-sm group mb-10">
        <Image
          src={assetPath("/images/banner.jpeg")}
          alt="D-SKETCH Architecture — Designing Visions. Building Legacies."
          fill
          priority
          className="object-cover object-left md:object-center transition-transform duration-700 group-hover:scale-[1.01]"
          sizes="(max-width: 1280px) 100vw, 1280px"
          unoptimized
        />
      </div>

      {/* ── Studio Intro ─────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 space-y-6 max-w-3xl">
        <p className="text-xs uppercase tracking-widest text-stone-400 dark:text-stone-500 font-mono">
          Mongam, Kerala · Est. Practice
        </p>
        <h1 className="text-4xl md:text-6xl font-light tracking-tight text-stone-900 dark:text-white leading-tight">
          Thoughtful Design.{" "}
          <span className="font-semibold">Lasting Value.</span>
        </h1>
        <p className="text-base md:text-lg text-stone-600 dark:text-stone-400 leading-relaxed max-w-xl">
          D-SKETCH is a full-service architecture and design consultancy
          delivering integrated solutions — from concept sketches to built
          reality — across Kerala and beyond.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            href="/services"
            className="inline-block bg-black dark:bg-white text-white dark:text-black px-7 py-3 text-xs uppercase tracking-widest font-medium hover:bg-stone-700 dark:hover:bg-stone-200 transition-all duration-200 hover:scale-105"
          >
            Our Services
          </Link>
          <Link
            href="/contact"
            className="inline-block border border-black dark:border-white text-black dark:text-white px-7 py-3 text-xs uppercase tracking-widest font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200 hover:scale-105"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* ── Stats Strip ──────────────────────────────────────────────── */}
      <section className="border-y border-stone-200 dark:border-stone-800 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { val: "15+", label: "Years of Practice" },
            { val: "100+", label: "Projects Delivered" },
            { val: "10k+", label: "Sq Ft Capability" },
            { val: "100%", label: "Bespoke Design" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-2xl md:text-3xl font-semibold text-stone-900 dark:text-white">
                {s.val}
              </p>
              <p className="text-[11px] uppercase tracking-wider text-stone-500 dark:text-stone-400 mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services Overview ─────────────────────────────────────────── */}
      <section className="py-16 md:py-20 space-y-10">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-widest text-stone-400 dark:text-stone-500 font-mono">
            What We Do
          </p>
          <h2 className="text-2xl md:text-3xl font-light text-stone-900 dark:text-white">
            Integrated Design &{" "}
            <span className="font-semibold">Build Services</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {services.map((s) => (
            <div
              key={s.num}
              className="p-6 rounded-xl border border-stone-200/80 dark:border-stone-800/80 bg-white/40 dark:bg-stone-900/20 hover:border-stone-400 dark:hover:border-stone-600 transition-colors duration-200"
            >
              <span className="text-[11px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500">
                {s.num}
              </span>
              <h3 className="text-sm uppercase tracking-widest font-semibold text-stone-900 dark:text-white mt-2 mb-2">
                {s.name}
              </h3>
              <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-stone-700 dark:text-stone-300 hover:text-black dark:hover:text-white transition-colors duration-200 group"
          >
            View All Services
            <svg
              className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── Portfolio Grid ───────────────────────────────────────────── */}
      <section className="py-4 space-y-8">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-widest text-stone-400 dark:text-stone-500 font-mono">
            Selected Work
          </p>
          <h2 className="text-2xl md:text-3xl font-light text-stone-900 dark:text-white">
            From Our <span className="font-semibold">Portfolio</span>
          </h2>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[220px]">
          {portfolioImages.map((img) => (
            <div
              key={img.src}
              className={`relative rounded-xl overflow-hidden bg-stone-100 dark:bg-stone-900 group ${img.span}`}
            >
              <Image
                src={assetPath(img.src)}
                alt={img.title}
                fill
                loading="lazy"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
                unoptimized
              />
              {/* Overlay label */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-[10px] uppercase tracking-widest text-white/70 font-mono">
                  {img.label}
                </p>
                <p className="text-sm font-medium text-white leading-tight mt-0.5">
                  {img.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Section ──────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 text-center border-t border-stone-200 dark:border-stone-800 mt-8">
        <p className="text-xs uppercase tracking-widest text-stone-400 dark:text-stone-500 font-mono mb-4">
          Let&apos;s Collaborate
        </p>
        <h2 className="text-3xl md:text-4xl font-light text-stone-900 dark:text-white mb-4 leading-tight">
          Let&apos;s Build Something{" "}
          <span className="font-semibold">Meaningful.</span>
        </h2>
        <p className="text-sm text-stone-500 dark:text-stone-400 max-w-md mx-auto mb-8 leading-relaxed">
          Have a project in mind? Let&apos;s discuss your ideas and explore how
          we can bring your vision to life.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-block bg-black dark:bg-white text-white dark:text-black px-8 py-3.5 text-xs uppercase tracking-widest font-medium hover:bg-stone-700 dark:hover:bg-stone-200 transition-all duration-200 hover:scale-105"
          >
            Discuss Your Project
          </Link>
          <Link
            href="/about"
            className="inline-block border border-stone-400 dark:border-stone-600 text-stone-700 dark:text-stone-300 px-8 py-3.5 text-xs uppercase tracking-widest font-medium hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white transition-all duration-200 hover:scale-105"
          >
            About the Studio
          </Link>
        </div>
      </section>
    </div>
  );
}
