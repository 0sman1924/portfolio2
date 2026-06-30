import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { ReportCard } from "@/components/ReportCard";
import { ProjectCard } from "@/components/ProjectCard";
import dynamic from "next/dynamic";
import { ArticleCard } from "@/components/ArticleCard";

// Lazy load SkillsSnapshot since it is below the fold and contains heavy client-side SVG mapping
const SkillsSnapshot = dynamic(() => import("@/components/SkillsSnapshot").then((mod) => mod.SkillsSnapshot), {
  ssr: true, // we can keep SSR enabled for SEO but chunking separates the JS payload
});
import { getAllContent } from "@/lib/content";

export default function Home() {
  const reports = getAllContent("reports");
  const projects = getAllContent("projects");
  const articles = getAllContent("articles");

  const featuredReports = reports.slice(0, 3);
  const featuredProjects = projects.slice(0, 3);
  const latestArticles = articles.slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <Hero />

      {/* Featured Reports */}
      {featuredReports.length > 0 && (
        <section className="py-12 bg-background-secondary">
          <div className="max-w-5xl mx-auto px-4">
            <SectionHeader title="Featured Reports" href="/reports" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredReports.map((report) => (
                <ReportCard
                  key={report.slug}
                  slug={report.slug}
                  frontmatter={report.frontmatter}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="py-12">
          <div className="max-w-5xl mx-auto px-4">
            <SectionHeader title="Featured Projects" href="/projects" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  slug={project.slug}
                  frontmatter={project.frontmatter}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Latest Articles */}
      {latestArticles.length > 0 && (
        <section className="py-12 bg-background-secondary">
          <div className="max-w-5xl mx-auto px-4">
            <SectionHeader title="Latest Articles" href="/articles" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestArticles.map((article) => (
                <ArticleCard
                  key={article.slug}
                  slug={article.slug}
                  frontmatter={article.frontmatter}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Skills Snapshot */}
      <SkillsSnapshot />
    </main>
  );
}
