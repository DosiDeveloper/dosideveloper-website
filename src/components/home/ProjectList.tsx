"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase";
import ProjectItems from "./ProjectItems";
import ProjectSkeleton from "./ProjectSkeleton";

interface Project {
  id: string;
  name: string;
  description: string;
  devarea: string;
  skills: string[];
  gh_url?: string;
}

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from("post_metadata")
        .select("name, description, skills, devarea, id, gh_url")
        .limit(5)
        .order("created_at", { ascending: false });
      if (error || !data) {
        setHasError(true);
        return;
      }

      setProjects(
        data.map((p) => ({
          id: p.id ?? "",
          name: p.name ?? "",
          description: p.description ?? "",
          devarea: p.devarea ?? "",
          skills: (p.skills ?? "").split(",").filter(Boolean),
          gh_url: p.gh_url ?? "",
        })),
      );
    };

    fetchProjects();
  }, []);

  if (hasError) {
    return (
      <div className="col-span-full bg-[#1B1B20] flex flex-col gap-3 items-center justify-center py-20 text-primary-container">
        <span className="text-xl">ERR_CONNECTION_FAILED</span>
        <p className="mt-4 text-sm">
          Something goes wrong! Please check out my Github profile
        </p>
        <a
          className="px-6 py-3 bg-primary text-white font-display font-semibold uppercase tracking-wide cursor-pointer border-l-2 hover:bg-primary transition-colors duration-300"
          href="https://github.com/dosideveloper"
        >
          [Github profile]
        </a>
      </div>
    );
  }

  if (!projects) {
    return (
      <>
        {Array.from({ length: 4 }).map((_, index) => (
          <ProjectSkeleton key={index} isLarge={index % 3 === 0} />
        ))}
      </>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="col-span-full flex flex-col items-center justify-center py-20 text-primary-container">
        <span className="text-[10px]">NO_DATA</span>
        <p className="mt-4 text-sm">No projects available yet.</p>
        <a
          className="px-6 py-3 bg-primary text-white font-display font-semibold uppercase tracking-wide cursor-pointer border-l-2 hover:bg-primary transition-colors duration-300"
          href="https://github.com/dosideveloper"
        >
          [&gt; all project]
        </a>
      </div>
    );
  }

  const placeholders: Project[] =
    projects.length < 4
      ? Array.from({ length: 4 - projects.length }, (_, i) => ({
          id: `placeholder-${i}`,
          name: "More projects are coming soon",
          description: "The projects are in the oven",
          devarea: "",
          skills: [],
        }))
      : [];

  const displayProjects = [...projects, ...placeholders];

  return (
    <>
      {displayProjects.map((project, index) => (
        <ProjectItems
          key={project.id}
          index={index}
          title={project.name}
          description={project.description}
          skills={project.skills}
          dev_area={project.devarea}
          isLarge={index % 3 === 0}
          gh_url={project.gh_url}
        />
      ))}
    </>
  );
}
