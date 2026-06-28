import type { Metadata } from "next";
import { getAllContent } from "@/lib/content";
import { PageHeader } from "@/components/PageHeader";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description: "DevOps and software engineering projects.",
};

export default function ProjectsPage() {
  const projects = getAllContent("projects");

  return (
    <main className="max-w-5xl mx-auto px-4 py-16 w-full">
      <PageHeader
        title="Projects"
        description="DevOps and software engineering projects."
        count={projects.length}
        countLabel={projects.length === 1 ? "project" : "projects"}
      />

      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              frontmatter={project.frontmatter}
            />
          ))}
        </div>
      ) : (
        <p className="text-foreground-muted text-sm py-8 text-center">
          No projects yet. Check back soon!
        </p>
      )}
    </main>
  );
}
