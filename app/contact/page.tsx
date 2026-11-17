"use client";

const socialLinks = [
  {
    name: "Instagram",
    handle: "@d_sketch_architecture",
    description: "Explore our latest projects & design stories",
    url: "https://www.instagram.com/d_sketch_architecture/",
    color: "from-[#f09433] via-[#dc2743] to-[#bc1888]",
    textColor: "hover:text-[#E4405F]",
    borderColor: "hover:border-[#E4405F]/50",
    bgHover: "hover:shadow-[#E4405F]/10",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    handle: "@D-SketchArchitecture",
    description: "Watch project walkthroughs & studio updates",
    url: "https://www.youtube.com/@D-SketchArchitecture",
    color: "from-red-600 to-red-700",
    textColor: "hover:text-[#FF0000]",
    borderColor: "hover:border-[#FF0000]/50",
    bgHover: "hover:shadow-[#FF0000]/10",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" clipRule="evenodd" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    handle: "D-Sketch Architecture",
    description: "Connect with our professional network & practice",
    url: "https://www.linkedin.com/company/d-sketch-architecture/",
    color: "from-blue-600 to-sky-700",
    textColor: "hover:text-[#0A66C2]",
    borderColor: "hover:border-[#0A66C2]/50",
    bgHover: "hover:shadow-[#0A66C2]/10",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    handle: "+91 9447357775",
    description: "Message directly for project consultations & inquiries",
    url: "https://wa.me/919447357775",
    color: "from-emerald-500 to-green-600",
    textColor: "hover:text-[#25D366]",
    borderColor: "hover:border-[#25D366]/50",
    bgHover: "hover:shadow-[#25D366]/10",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Page Heading */}
      <div className="space-y-3">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-[0.25em] text-stone-500 dark:text-stone-400 font-medium">
            D-SKETCH
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-stone-400 dark:text-stone-500 font-mono">
            Interior | Exterior | Construction
          </p>
        </div>
        <h1 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 dark:text-white transition-colors duration-200">
          Contact D-Sketch
        </h1>
        <p className="text-stone-600 dark:text-stone-300 text-base md:text-lg pt-2 leading-relaxed max-w-2xl">
          Let&apos;s start a project together. Reach out to our studio directly via phone or email, or connect with us across our social channels below.
        </p>
      </div>

      {/* Direct Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Email */}
        <div className="rounded-2xl border border-stone-200 bg-white/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-stone-400 hover:shadow-md dark:border-stone-800 dark:bg-stone-900/60 dark:hover:border-stone-700">
          <div className="w-10 h-10 rounded-xl bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-stone-700 dark:text-stone-300 mb-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="text-xs uppercase tracking-widest text-stone-400 dark:text-stone-500 font-semibold mb-1">
            Email Us
          </p>
          <a
            href="mailto:dsketchmail@gmail.com"
            className="text-base font-medium text-stone-900 dark:text-white hover:underline break-all"
          >
            dsketchmail@gmail.com
          </a>
          <p className="text-xs text-stone-500 dark:text-stone-400 mt-2">
            Expect a response within 24 business hours.
          </p>
        </div>

        {/* Phone */}
        <div className="rounded-2xl border border-stone-200 bg-white/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-stone-400 hover:shadow-md dark:border-stone-800 dark:bg-stone-900/60 dark:hover:border-stone-700">
          <div className="w-10 h-10 rounded-xl bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-stone-700 dark:text-stone-300 mb-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <p className="text-xs uppercase tracking-widest text-stone-400 dark:text-stone-500 font-semibold mb-1">
            Call Us
          </p>
          <a
            href="tel:+919447357775"
            className="text-base font-medium text-stone-900 dark:text-white hover:underline"
          >
            +91 9447357775
          </a>
          <p className="text-xs text-stone-500 dark:text-stone-400 mt-2">
            Mon – Sat, 9:00 AM – 6:00 PM IST
          </p>
        </div>

        {/* Studio Location */}
        <div className="rounded-2xl border border-stone-200 bg-white/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-stone-400 hover:shadow-md dark:border-stone-800 dark:bg-stone-900/60 dark:hover:border-stone-700">
          <div className="w-10 h-10 rounded-xl bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-stone-700 dark:text-stone-300 mb-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <p className="text-xs uppercase tracking-widest text-stone-400 dark:text-stone-500 font-semibold mb-1">
            Studio Office
          </p>
          <p className="text-sm font-medium text-stone-900 dark:text-white leading-relaxed">
            1st Floor, TK Building, Mongam, Keralam, India 673642
          </p>
        </div>
      </div>

      {/* Prominent Social Media Section */}
      <div className="space-y-6 pt-6 border-t border-stone-200 dark:border-stone-800">
        <div>
          <h2 className="text-xl md:text-2xl font-light tracking-tight text-gray-900 dark:text-white">
            Connect With Us
          </h2>
          <p className="text-stone-500 dark:text-stone-400 text-xs uppercase tracking-widest mt-1">
            Follow our active social channels and direct messaging
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className={`group flex items-center gap-5 p-5 rounded-2xl border border-stone-200 bg-white/70 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-stone-800 dark:bg-stone-900/60 ${social.borderColor} ${social.bgHover}`}
            >
              {/* Prominent Icon Box */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${social.color} flex items-center justify-center text-white shadow-md flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}
              >
                {social.icon}
              </div>

              {/* Text Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className={`text-lg font-semibold text-stone-900 dark:text-white transition-colors duration-200 ${social.textColor}`}>
                    {social.name}
                  </h3>
                  <svg
                    className="w-4 h-4 text-stone-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
                <p className="text-xs font-mono text-stone-500 dark:text-stone-400 truncate">
                  {social.handle}
                </p>
                <p className="text-xs text-stone-600 dark:text-stone-400 mt-1 line-clamp-1">
                  {social.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
