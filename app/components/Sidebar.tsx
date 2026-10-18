"use client";

const categories = ["All", "Architecture", "Construction", "Interior", "Landscape"];

interface SidebarProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function Sidebar({ selectedCategory, onSelectCategory }: SidebarProps) {
  return (
    <aside className="md:w-64 w-full shrink-0">
      <ul className="space-y-2 border-l-2 border-stone-200 pl-4 dark:border-stone-700">
        {categories.map((cat) => (
          <li key={cat}>
            <button
              onClick={() => onSelectCategory(cat)}
              className={`text-left w-full rounded-r-md py-2.5 px-3 text-sm tracking-[0.18em] uppercase transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-stone-900 text-white shadow-sm ring-1 ring-stone-900 dark:bg-white dark:text-stone-900 dark:ring-white"
                  : "text-stone-600 hover:bg-stone-100 hover:text-stone-900 dark:text-stone-400 dark:hover:bg-stone-800/80 dark:hover:text-white"
              }`}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}