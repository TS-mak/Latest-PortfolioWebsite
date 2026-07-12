const skillCategories = [
  {
    category: 'Languages',
    skills: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C', 'SQL', 'Bash', 'HTML'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Server-side Development', 'Authentication', 'REST APIs', 'WebSockets'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Database Design', 'SQLite', 'Prisma'],
  },
  {
    category: 'DevOps & Tools',
    skills: ['Git','GitHub', 'Docker', 'Linux', 'CI/CD', 'AWS', 'Vercel', 'Postman', 'pnpm'],
  },
  {
    category: 'Computer Science',
    skills: [
      'Data Structures',
      'Algorithms',
      'System Design',
      'Object Oriented Programming',
      'Operating Systems',
      'Computer Networks',
      'Concurrency',
      'Distributed Systems',
      'Database Systems',
    ],
  },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 mb-4">
      <span className="w-6 h-px bg-[oklch(0.52_0.22_262)]" aria-hidden="true" />
      <span className="text-xs font-mono font-medium text-[oklch(0.52_0.22_262)] uppercase tracking-widest">
        {children}
      </span>
    </div>
  )
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="flex justify-center">
            <SectionLabel>Skills</SectionLabel>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
            Technology Stack
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto text-pretty leading-relaxed">
            A curated overview of the languages, frameworks, and tools I use to design and ship software.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map(({ category, skills }) => (
            <div
              key={category}
              className="bg-card rounded-xl border border-border p-6 hover:shadow-sm transition-shadow"
            >
              {/* Category header */}
              <div className="flex items-center gap-2 mb-5">
                <span
                  className="w-1.5 h-5 rounded-full bg-[oklch(0.52_0.22_262)]"
                  aria-hidden="true"
                />
                <h3 className="font-semibold text-foreground text-sm tracking-wide">{category}</h3>
              </div>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-2" role="list" aria-label={`${category} skills`}>
                {skills.map((skill) => (
                  <span
                    key={skill}
                    role="listitem"
                    className="inline-flex items-center px-3 py-1 rounded-md text-xs font-mono font-medium bg-secondary text-foreground border border-border hover:border-[oklch(0.52_0.22_262/0.4)] hover:bg-[oklch(0.52_0.22_262/0.05)] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
