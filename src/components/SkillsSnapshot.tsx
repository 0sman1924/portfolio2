import { skills, type SkillCategory } from "../../data/skills";
import { SkillIcon } from "./SkillIcon";

export function SkillsSnapshot() {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-foreground mb-8">
          Skills Snapshot
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-10 pt-4">
          {skills.flatMap((c) => c.skills).map((skill) => (
            <div key={skill.name} className="group relative flex flex-col items-center">
              <div className="p-4 rounded-2xl bg-card border border-card-border hover:border-accent/40 hover:shadow-sm transition-all duration-300 cursor-pointer">
                <SkillIcon
                  icon={skill.icon}
                  size={40}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-medium text-foreground-secondary whitespace-nowrap bg-background px-2 py-1 rounded shadow-sm border border-border">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
