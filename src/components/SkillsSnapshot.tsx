import { skills, type SkillCategory } from "../../data/skills";
import { SkillIcon } from "./SkillIcon";

export function SkillsSnapshot() {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-foreground mb-8">
          Skills Snapshot
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((category: SkillCategory) => (
            <div
              key={category.category}
              className="rounded-xl border border-card-border bg-card p-5"
            >
              <h3 className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">
                {category.category}
              </h3>
              <ul className="space-y-2.5">
                {category.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center gap-2.5 text-sm text-foreground-secondary"
                  >
                    <SkillIcon icon={skill.icon} size={16} />
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
