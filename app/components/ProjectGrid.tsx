import Image from "next/image";

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
}

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  if (projects.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-400 dark:text-gray-500 text-sm uppercase tracking-widest transition-colors duration-200">
        No projects in this category
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="group cursor-pointer overflow-hidden rounded-xl border border-stone-200 bg-white/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-stone-800 dark:bg-stone-900/70 dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]"
        >
          <div className="relative h-64 w-full overflow-hidden bg-stone-100 transition-colors duration-200 dark:bg-stone-800">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              unoptimized
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium tracking-tight text-stone-900 transition-colors duration-200 dark:text-white">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-stone-600 transition-colors duration-200 dark:text-stone-400">
              {project.location} · {project.year}
            </p>
            <span className="mt-2 inline-block border-b border-stone-300 pb-1 text-[10px] uppercase tracking-[0.22em] text-stone-500 transition-colors duration-200 dark:border-stone-700 dark:text-stone-400">
              {project.category}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}