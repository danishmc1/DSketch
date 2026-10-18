import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/app/lib/assets";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-16">
      {/* Hero Section */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs uppercase tracking-widest bg-stone-200/60 dark:bg-stone-800/80 text-stone-600 dark:text-stone-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          Mongam, Kerala · Established Practice
        </div>
        <h1 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 dark:text-white transition-colors duration-200">
          About <span className="font-bold">DSketch</span>
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm uppercase tracking-widest transition-colors duration-200">
          Architecture · Interior · Landscape · Construction
        </p>
        <div className="w-16 h-0.5 bg-black dark:bg-white mt-2 transition-colors duration-200" />
      </div>

      {/* Main Narrative with Studio Logo Card */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8 space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-200">
          <p className="text-lg md:text-xl font-light text-stone-800 dark:text-stone-200 leading-relaxed">
            <strong>D-SKETCH</strong> is a comprehensive architecture and design consultancy based in Mongam, Kerala.
            We are committed to crafting thoughtful spaces that harmoniously unite functional clarity, climate sensitivity, and timeless aesthetic elegance.
          </p>
          <p>
            From concept to completion, our practice is rooted in deeply collaborative dialogues — translating client aspirations into built realities that respect site, climate, and local materials. We believe great design emerges from an honest dialogue between contextual character, spatial flow, and natural light.
          </p>
          <p>
            Our portfolio spans bespoke residential residences, intimate luxury villas, and expansive commercial developments across Kerala and beyond. Whether an innovative new build, a sensitive renovation, or a bespoke interior transformation, D-SKETCH delivers each project with rigor, artistic integrity, and technical precision.
          </p>
        </div>
        <div className="md:col-span-4 relative aspect-square w-full rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 shadow-md bg-stone-100 dark:bg-stone-900">
          <Image
            src={assetPath("/images/logo-square.jpeg")}
            alt="D-SKETCH Architecture Brand Logo"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 320px"
            unoptimized
          />
        </div>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white/60 dark:bg-stone-900/40 backdrop-blur-sm">
        <div>
          <p className="text-2xl md:text-3xl font-semibold text-stone-900 dark:text-white">15+</p>
          <p className="text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400 mt-1">Years Practice</p>
        </div>
        <div>
          <p className="text-2xl md:text-3xl font-semibold text-stone-900 dark:text-white">100+</p>
          <p className="text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400 mt-1">Projects Delivered</p>
        </div>
        <div>
          <p className="text-2xl md:text-3xl font-semibold text-stone-900 dark:text-white">10k+ sq ft</p>
          <p className="text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400 mt-1">Scale Capability</p>
        </div>
        <div>
          <p className="text-2xl md:text-3xl font-semibold text-stone-900 dark:text-white">100%</p>
          <p className="text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400 mt-1">Bespoke Design</p>
        </div>
      </div>

      {/* Values / Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-gray-100 dark:border-gray-800 transition-colors duration-200">
        <div className="p-6 rounded-xl border border-stone-200/80 dark:border-stone-800/80 bg-white/40 dark:bg-stone-900/20">
          <span className="text-[11px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500">01</span>
          <h3 className="text-xs uppercase tracking-widest font-semibold text-stone-900 dark:text-white my-2 transition-colors duration-200">
            Philosophy
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-200">
            Design that respects its native environment, enhances daily wellbeing, and stands the test of time through enduring craftsmanship.
          </p>
        </div>
        <div className="p-6 rounded-xl border border-stone-200/80 dark:border-stone-800/80 bg-white/40 dark:bg-stone-900/20">
          <span className="text-[11px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500">02</span>
          <h3 className="text-xs uppercase tracking-widest font-semibold text-stone-900 dark:text-white my-2 transition-colors duration-200">
            Approach
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-200">
            Collaborative, research-driven, and meticulously detailed — guiding clients from the preliminary sketch to final site handover.
          </p>
        </div>
        <div className="p-6 rounded-xl border border-stone-200/80 dark:border-stone-800/80 bg-white/40 dark:bg-stone-900/20">
          <span className="text-[11px] font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500">03</span>
          <h3 className="text-xs uppercase tracking-widest font-semibold text-stone-900 dark:text-white my-2 transition-colors duration-200">
            Expertise
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-200">
            Architecture · Construction Management · Interior Design · Landscape Architecture · Turnkey Execution
          </p>
        </div>
      </div>

      {/* Founder Section */}
      <div className="space-y-6 pt-8 border-t border-gray-100 dark:border-gray-800 transition-colors duration-200">
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 transition-colors duration-200">
            Leadership
          </p>
          <h2 className="text-2xl font-light tracking-tight text-gray-900 dark:text-white mt-1">
            Founder & Principal Designer
          </h2>
        </div>

        <div className="p-6 md:p-8 rounded-2xl border border-stone-200 dark:border-stone-800 bg-white/70 dark:bg-stone-900/60 shadow-sm backdrop-blur-sm">
          {/* Founder Details */}
          <div className="space-y-4 text-gray-700 dark:text-gray-300 transition-colors duration-200">
            <div>
              <h3 className="text-2xl font-medium text-gray-900 dark:text-white transition-colors duration-200">
                Mohammed Shameem Kottakunnan
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400 uppercase tracking-widest mt-1">
                Founder & Principal Designer · DSketch Architecture
              </p>
            </div>

            <p className="text-sm leading-relaxed">
              With over 15 years of distinguished experience spanning architecture and urban design,
              <strong> Mohammed Shameem</strong> founded <strong>DSketch</strong> with a singular philosophy: that thoughtful, context-driven architecture has the power to enrich everyday human experiences.
            </p>

            <p className="text-sm leading-relaxed">
              His extensive portfolio ranges from intimate tropical villas and bespoke apartments to substantial commercial structures — including auditoriums, commercial shopping complexes, and leisure retreats — spanning built areas from 1,000 to well over 10,000 square feet. Renowned for his nuanced sensitivity to site microclimates, indigenous materials, and structural clarity, Shameem ensures every commission balances creative innovation with sustainability and human comfort.
            </p>

            {/* Founder Social Link */}
            <div className="pt-2">
              <a
                href="https://www.instagram.com/mohammed.shameem.184"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800/80 text-xs tracking-wider text-stone-700 dark:text-stone-200 hover:text-white hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 group"
              >
                <svg className="w-4 h-4 text-[#E4405F] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>@mohammed.shameem.184</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Founder's Instagram Spotlight Card */}
      <div className="flex items-center justify-between flex-wrap gap-4 rounded-2xl border border-stone-200 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 dark:border-stone-800 dark:bg-stone-900/60 dark:shadow-[0_18px_40px_rgba(0,0,0,0.22)]">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shadow-md flex-shrink-0">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-stone-900 transition-colors duration-200 dark:text-white">
              Connect with Founder
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-stone-500 transition-colors duration-200 dark:text-stone-400">
              @mohammed.shameem.184 on Instagram
            </p>
          </div>
        </div>
        <a
          href="https://www.instagram.com/mohammed.shameem.184"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-stone-900 dark:border-white px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-medium text-stone-900 dark:text-white transition-all duration-300 hover:bg-stone-900 hover:text-white dark:hover:bg-white dark:hover:text-stone-900 hover:scale-105"
        >
          <span>View Profile</span>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>

      {/* Collaboration / Inquiry CTA */}
      <div className="text-center py-8 border-t border-gray-100 dark:border-gray-800">
        <h3 className="text-lg font-light text-stone-900 dark:text-white mb-2">
          Ready to build something exceptional?
        </h3>
        <p className="text-sm text-stone-500 dark:text-stone-400 mb-6">
          Reach out to discuss your architectural, interior, or landscape vision.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-black dark:bg-white text-white dark:text-black px-8 py-3 text-xs uppercase tracking-widest font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-200 hover:scale-105"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
}