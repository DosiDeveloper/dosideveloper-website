import { supabase } from "@/utils/supabase";
import ProjectItems from "./ProjectItems";

export default async function ProjectList() {
  const { data: projects, error } = await supabase
    .from("post_metadata")
    .select("name, description, skills, devarea, id")
    .limit(5)
    .order("created_at", { ascending: false });

  if (error) {
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

  if (!projects || projects.length === 0) {
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

  const parsedProjects = projects.map((p) => ({
    id: p.id ?? "",
    name: p.name ?? "",
    description: p.description ?? "",
    devarea: p.devarea ?? "",
    skills: (p.skills ?? "").split(",").filter(Boolean),
  }));

  return (
    <>
      {parsedProjects.map((project, index) => (
        <ProjectItems
          key={project.id}
          id={project.id}
          title={project.name}
          description={project.description}
          skills={project.skills}
          dev_area={project.devarea}
          isLarge={index % 3 === 0}
        />
      ))}
    </>
  );
}
