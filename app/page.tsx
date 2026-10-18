"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { assetPath } from "@/app/lib/assets";
import projectsData from "./data/projects.json";
import Sidebar from "./components/Sidebar";
import ProjectGrid from "./components/ProjectGrid";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projectsData;
    return projectsData.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="space-y-10">
      {/* Hero Banner */}
      <div className="relative w-full aspect-[16/6] min-h-[220px] max-h-[380px] rounded-2xl overflow-hidden border border-stone-200/80 dark:border-stone-800 bg-stone-100 dark:bg-stone-900 shadow-sm group">
        <Image
          src={assetPath("/images/banner.jpeg")}
          alt="D-SKETCH Architecture - Thoughtful spaces. From concept to completion."
          fill
          priority
          className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.01]"
          sizes="(max-width: 1280px) 100vw, 1280px"
          unoptimized
        />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col md:flex-row gap-8">
        <Sidebar selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-sm uppercase tracking-widest text-gray-400 dark:text-gray-500 transition-colors duration-200">
              {selectedCategory === "All" ? "All Projects" : selectedCategory}
            </h2>
            <span className="text-xs uppercase tracking-widest text-stone-400 dark:text-stone-500 font-mono">
              {filteredProjects.length} {filteredProjects.length === 1 ? "Project" : "Projects"}
            </span>
          </div>
          <ProjectGrid projects={filteredProjects} />
        </div>
      </div>
    </div>
  );
}