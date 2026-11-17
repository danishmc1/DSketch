import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/app/lib/assets";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-10 sm:space-y-12">
      {/* Hero Section */}
      <div className="space-y-3">
        <div className="space-y-0.5">
          <p className="text-xs uppercase tracking-[0.25em] text-stone-500 dark:text-stone-400 font-medium">
            D-SKETCH
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-stone-400 dark:text-stone-500 font-mono">
            Interior | Exterior | Construction
          </p>
        </div>
        <p className="text-xs sm:text-sm uppercase tracking-widest text-stone-500 dark:text-stone-400">
          Designing Dreams. Defining Spaces.
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-gray-900 dark:text-white transition-colors duration-200">
          About Us
        </h1>
        <div className="w-14 h-0.5 bg-black dark:bg-white mt-1 transition-colors duration-200" />
      </div>

      {/* Origin Story - clean reading column (image card removed as requested) */}
      <div className="space-y-4 text-stone-700 dark:text-stone-300 leading-relaxed text-sm sm:text-base">
        <p className="text-base sm:text-lg md:text-xl font-light text-stone-900 dark:text-stone-100 leading-relaxed">
          Every great design begins with a vision. Ours began with a childhood dream.
        </p>
        <p>
          Founded in 2012 by Mohammed Shameem, D-Sketch is an architecture and interior design firm based in Malappuram, Kerala, built on a passion for transforming ordinary spaces into extraordinary experiences.
        </p>
        <p>
          The story of D-Sketch began long before its establishment. As a young boy, Shameem discovered his fascination for architecture while observing the house plans of his elder sister. What appeared to be simple lines on paper sparked a lifelong curiosity about how spaces are imagined, designed, and brought to life. That early inspiration gradually evolved into a clear ambition — to become a designer who could shape the spaces people call home.
        </p>
        <p>
          After completing his studies in 2011, Shameem immersed himself in the world of architecture and construction, working alongside established architects, learning from experienced professionals, and developing a deeper understanding of design, materials, and the realities of construction. Driven by an independent vision, he established D-Sketch in 2012.
        </p>
        <p>
          The early years were defined by determination, continuous learning, and guidance from senior architects. In 2013, D-Sketch celebrated the completion of its first project — a milestone that marked the beginning of a remarkable journey.
        </p>
        <p>
          What began as one man&apos;s vision has since evolved into a recognised design practice in Malappuram, with a growing portfolio of residential, commercial, and interior design projects across Kerala and beyond.
        </p>
      </div>

      {/* Architecture Rooted in Purpose */}
      <div className="p-6 sm:p-8 rounded-2xl border border-stone-200/90 dark:border-stone-800 bg-white/70 dark:bg-stone-900/40 space-y-3">
        <p className="text-[11px] uppercase tracking-widest text-stone-400 dark:text-stone-500 font-mono">
          Core Purpose
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-stone-900 dark:text-white">
          Architecture Rooted in Purpose
        </h2>
        <div className="space-y-3 text-sm sm:text-base text-stone-700 dark:text-stone-300 leading-relaxed">
          <p>
            At D-Sketch, we believe architecture is not merely about creating buildings; it is about understanding people, responding to their surroundings, and designing spaces that enrich everyday life.
          </p>
          <p>
            From the beginning, natural light, ventilation, functionality, and spatial comfort have remained central to our design philosophy. Each project is approached with the belief that a thoughtfully designed space should not only be visually compelling but also feel comfortable, welcoming, and deeply connected to those who inhabit it.
          </p>
          <p>
            Under the creative direction of Mohammed Shameem, D-Sketch has consistently sought to turn personal aspirations into meaningful architectural spaces — balancing aesthetic expression with practical intelligence.
          </p>
        </div>
      </div>

      {/* Experience That Shapes Possibilities */}
      <div className="space-y-4 pt-4 border-t border-stone-200 dark:border-stone-800">
        <div>
          <p className="text-[11px] uppercase tracking-widest text-stone-400 dark:text-stone-500 font-mono">
            Scale & Versatility
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-stone-900 dark:text-white mt-0.5">
            Experience That Shapes Possibilities
          </h2>
        </div>

        <div className="space-y-3 text-sm sm:text-base text-stone-700 dark:text-stone-300 leading-relaxed">
          <p>
            Over the years, our journey has taken us through diverse architectural challenges and opportunities. From designing homes on complex and uneven terrains to developing construction solutions for sites affected by difficult groundwater conditions, D-Sketch has embraced the belief that every challenge presents an opportunity for thoughtful innovation.
          </p>
          <p>
            Our experience extends across individual residences, multi-storey developments, commercial buildings, and hospitality interiors. We have contributed to restaurant interior projects across North Kerala, as well as in Bengaluru and Coimbatore, bringing distinctive spatial experiences to the hospitality sector.
          </p>
          <p>
            Working across different locations, landscapes, and project requirements has strengthened our ability to approach every design with adaptability, technical understanding, and creative confidence.
          </p>
        </div>
      </div>

      {/* Selected Work Gallery - compact & responsive */}
      <div className="space-y-3 pt-4 border-t border-stone-200 dark:border-stone-800">
        <p className="text-[11px] uppercase tracking-widest text-stone-400 dark:text-stone-500 font-mono">
          Selected Work
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
          {[
            { src: "/images/project-living-room.jpg", label: "Interior" },
            { src: "/images/project-kitchen-modern.jpg", label: "Kitchen" },
            { src: "/images/project-dining.jpg", label: "Dining" },
            { src: "/images/project-exterior-1.jpg", label: "Architecture" },
          ].map((img) => (
            <div
              key={img.src}
              className="relative aspect-square rounded-xl overflow-hidden bg-stone-100 dark:bg-stone-900 group"
            >
              <Image
                src={assetPath(img.src)}
                alt={img.label}
                fill
                loading="lazy"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, 25vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2.5 sm:p-3">
                <span className="text-[10px] uppercase tracking-widest text-white font-mono">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Philosophy */}
      <div className="p-6 sm:p-8 rounded-2xl border border-stone-200/90 dark:border-stone-800 bg-stone-50/70 dark:bg-stone-900/30 space-y-3">
        <p className="text-[11px] uppercase tracking-widest text-stone-400 dark:text-stone-500 font-mono">
          Our Philosophy
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-stone-900 dark:text-white leading-snug">
          We don&apos;t simply design spaces. We design the way people experience them.
        </h2>
        <div className="space-y-3 text-sm sm:text-base text-stone-700 dark:text-stone-300 leading-relaxed pt-1">
          <p>
            For us, successful architecture exists at the intersection of creativity, functionality, and human connection. Every project begins with listening — understanding the client&apos;s aspirations, the character of the site, and the possibilities within the space.
          </p>
          <p>
            Our approach is guided by thoughtful planning, natural illumination, effective ventilation, contextual sensitivity, and enduring design value. Whether it is a personal residence, a commercial destination, or a hospitality interior, our goal remains the same: to create spaces that are purposeful, distinctive, and meaningful.
          </p>
        </div>
      </div>

      {/* Our Journey Continues */}
      <div className="space-y-3 text-center py-4 sm:py-6">
        <p className="text-[11px] uppercase tracking-widest text-stone-400 dark:text-stone-500 font-mono">
          Our Journey Continues
        </p>
        <p className="text-sm sm:text-base md:text-lg text-stone-700 dark:text-stone-300 max-w-2xl mx-auto leading-relaxed">
          From a childhood fascination with house plans to an established design practice, the journey of D-Sketch has always been driven by curiosity, perseverance, and an unwavering passion for design. Today, with a portfolio spanning diverse architectural and interior projects, we continue to explore new ideas, embrace new challenges, and redefine what spaces can become.
        </p>
        <p className="text-sm sm:text-base font-medium tracking-wide text-stone-900 dark:text-white pt-1">
          D-Sketch — Where Vision Takes Shape, and Spaces Become Stories.
        </p>
      </div>

      {/* Unified Founder Section - Clean, compact & cohesive */}
      <div className="space-y-4 pt-6 border-t border-stone-200 dark:border-stone-800 transition-colors duration-200">
        <div>
          <p className="text-[11px] uppercase tracking-widest text-stone-400 dark:text-stone-500 transition-colors duration-200 font-mono">
            Leadership
          </p>
          <h2 className="text-xl sm:text-2xl font-light tracking-tight text-gray-900 dark:text-white mt-0.5">
            Founder & Principal Designer
          </h2>
        </div>

        <div className="p-6 sm:p-7 rounded-2xl border border-stone-200/90 dark:border-stone-800 bg-white/70 dark:bg-stone-900/60 shadow-sm backdrop-blur-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-stone-100 dark:border-stone-800 pb-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-medium text-gray-900 dark:text-white">
                Mohammed Shameem Kottakunnan
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400 uppercase tracking-widest mt-1">
                Founder & Principal Designer · D-Sketch Architecture
              </p>
            </div>
            <a
              href="https://www.instagram.com/mohammed.shameem.184"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start sm:self-auto px-4 py-2 rounded-full border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800/80 text-xs tracking-wider text-stone-700 dark:text-stone-200 hover:text-white hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:border-transparent transition-all duration-300 shadow-sm hover:scale-105 group"
            >
              <svg className="w-4 h-4 text-[#E4405F] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>@mohammed.shameem.184</span>
            </a>
          </div>

          <div className="space-y-3 text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
            <p>
              With over 15 years of distinguished experience spanning architecture, interiors, and construction management, Mohammed Shameem founded D-Sketch in 2012 with a singular philosophy: that thoughtful, context-driven architecture has the power to enrich everyday human experiences.
            </p>
            <p>
              Renowned for his nuanced sensitivity to site microclimates, indigenous materials, and structural clarity, Shameem ensures every commission balances creative innovation with sustainability and human comfort across residential, commercial, and hospitality scales.
            </p>
          </div>
        </div>
      </div>

      {/* Collaboration / Inquiry CTA */}
      <div className="text-center py-6 sm:py-8 border-t border-stone-200 dark:border-stone-800">
        <h3 className="text-lg sm:text-xl font-light text-stone-900 dark:text-white mb-2">
          Ready to build something exceptional?
        </h3>
        <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 mb-5 max-w-md mx-auto">
          Reach out to discuss your architectural, interior, or landscape vision.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-black dark:bg-white text-white dark:text-black px-8 py-3 text-xs uppercase tracking-widest font-medium hover:bg-stone-800 dark:hover:bg-stone-200 transition-all duration-200 hover:scale-105"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
}
