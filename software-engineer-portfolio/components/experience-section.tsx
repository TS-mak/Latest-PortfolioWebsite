import { Briefcase, GraduationCap, Users } from 'lucide-react'

type ExperienceEntry = {
  kind: 'work' | 'education' | 'leadership'
  title: string
  org: string
  period: string
  location: string
  description: string
  bullets: string[]
  tags?: string[]
}

const entries: ExperienceEntry[] = [
  {
    kind: 'work',
    title: 'Software Engineering Intern',
    org: 'Acme Technologies',
    period: 'Jun 2024 – Aug 2024',
    location: 'San Francisco, CA (Remote)',
    description:
      'Worked on the platform engineering team, shipping features for an internal developer tooling product used by 300+ engineers.',
    bullets: [
      'Built a CI/CD pipeline dashboard using Next.js and the GitHub Actions API, reducing deploy visibility lag by 40%',
      'Refactored a legacy REST service to a typed GraphQL layer with Zod validation, cutting client-side errors by 25%',
      'Collaborated with senior engineers in Agile sprints, code reviews, and architecture discussions',
      'Wrote integration tests with Vitest and achieved 80%+ coverage on all new modules',
    ],
    tags: ['Next.js', 'TypeScript', 'GraphQL', 'Vitest', 'CI/CD'],
  },
  {
    kind: 'work',
    title: 'Undergraduate Research Assistant',
    org: 'University Computer Systems Lab',
    period: 'Sep 2023 – May 2024',
    location: 'On Campus',
    description:
      'Assisted a PhD candidate researching distributed systems fault tolerance and consensus algorithms.',
    bullets: [
      'Implemented a Raft consensus simulation in Python with configurable failure injection',
      'Ran experiments measuring message latency across 5-node clusters under various partition scenarios',
      'Contributed to a research paper draft submitted to a systems conference',
    ],
    tags: ['Python', 'Distributed Systems', 'Raft', 'Research'],
  },
  {
    kind: 'education',
    title: 'B.S. Computer Science',
    org: 'State University',
    period: '2022 – 2026 (Expected)',
    location: 'Your City, State',
    description: 'GPA: 3.8 / 4.0 — Dean\'s List (3 consecutive semesters).',
    bullets: [
      'Relevant coursework: Data Structures & Algorithms, Operating Systems, Database Systems, Software Engineering, Computer Networks, Machine Learning',
      'Senior capstone project: Distributed task queue with fault-tolerant workers',
    ],
    tags: ['GPA 3.8', "Dean's List"],
  },
  {
    kind: 'leadership',
    title: 'Vice President, ACM Student Chapter',
    org: 'State University ACM',
    period: 'Aug 2023 – Present',
    location: 'On Campus',
    description:
      'Lead technical initiatives for a 200+ member computer science organization.',
    bullets: [
      'Organized 12 technical workshops covering topics from system design to competitive programming',
      'Launched a peer mentorship program pairing 40 underclassmen with upperclassmen mentors',
      'Managed the club\'s website and GitHub organization with 15 active contributors',
    ],
    tags: ['Leadership', 'Community', 'Mentorship'],
  },
]

const kindMeta = {
  work: {
    Icon: Briefcase,
    label: 'Work',
    dotColor: 'bg-[oklch(0.52_0.22_262)]',
    tagColor: 'bg-[oklch(0.52_0.22_262/0.08)] border-[oklch(0.52_0.22_262/0.25)] text-[oklch(0.4_0.18_262)]',
  },
  education: {
    Icon: GraduationCap,
    label: 'Education',
    dotColor: 'bg-[oklch(0.62_0.18_145)]',
    tagColor: 'bg-[oklch(0.62_0.18_145/0.08)] border-[oklch(0.62_0.18_145/0.25)] text-[oklch(0.45_0.16_145)]',
  },
  leadership: {
    Icon: Users,
    label: 'Leadership',
    dotColor: 'bg-[oklch(0.72_0.18_55)]',
    tagColor: 'bg-[oklch(0.72_0.18_55/0.08)] border-[oklch(0.72_0.18_55/0.25)] text-[oklch(0.5_0.16_55)]',
  },
}

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

function TimelineEntry({ entry }: { entry: ExperienceEntry }) {
  const meta = kindMeta[entry.kind]
  const { Icon } = meta

  return (
    <div className="relative flex gap-6">
      {/* Timeline dot + line */}
      <div className="flex flex-col items-center">
        <div
          className={`w-9 h-9 rounded-full border-2 border-background shadow-sm flex items-center justify-center shrink-0 ${meta.dotColor}`}
          aria-hidden="true"
        >
          <Icon className="w-4 h-4 text-white" />
        </div>
        <div className="flex-1 w-px bg-border mt-2" aria-hidden="true" />
      </div>

      {/* Content */}
      <article className="pb-10 flex-1 min-w-0">
          <div className="bg-card rounded-xl border border-border p-6 hover:shadow-sm transition-shadow">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
            <div>
              <h3 className="font-semibold text-foreground leading-tight">{entry.title}</h3>
              <p className="text-sm font-medium text-[oklch(0.52_0.22_262)] mt-0.5">{entry.org}</p>
            </div>
            <div className="flex flex-col sm:items-end gap-0.5 shrink-0">
              <span className="text-xs font-mono text-muted-foreground">{entry.period}</span>
              <span className="text-xs text-muted-foreground">{entry.location}</span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed mb-4">{entry.description}</p>

          <ul className="space-y-2 mb-4" aria-label="Highlights">
            {entry.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span
                  className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${meta.dotColor}`}
                  aria-hidden="true"
                />
                {b}
              </li>
            ))}
          </ul>

          {entry.tags && entry.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5" role="list" aria-label="Tags">
              {entry.tags.map((tag) => (
                <span
                  key={tag}
                  role="listitem"
                  className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-mono border ${meta.tagColor}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </div>
  )
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 bg-secondary/40">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <div className="flex justify-center">
            <SectionLabel>Experience</SectionLabel>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
            Experience &amp; Education
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto text-pretty leading-relaxed">
            My journey through internships, research, academic study, and community leadership.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-12" aria-label="Legend">
          {(Object.entries(kindMeta) as [keyof typeof kindMeta, (typeof kindMeta)[keyof typeof kindMeta]][]).map(
            ([, meta]) => (
              <div key={meta.label} className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className={`w-2.5 h-2.5 rounded-full ${meta.dotColor}`} aria-hidden="true" />
                {meta.label}
              </div>
            )
          )}
        </div>

        {/* Timeline */}
        <div>
          {entries.map((entry) => (
            <TimelineEntry key={`${entry.title}-${entry.org}`} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  )
}
