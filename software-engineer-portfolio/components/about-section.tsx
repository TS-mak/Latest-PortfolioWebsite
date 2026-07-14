import { GraduationCap, Cpu, Globe, BookOpen } from 'lucide-react'

const highlights = [
  {
    icon: GraduationCap,
    title: 'Computer Science',
    description: 'Final-Year Computer Science student at Stellenbosch University with a strong foundation in algorithms, operating systems, computer networks, concurrency, and software engineering.',
  },
  {
    icon: Cpu,
    title: 'Full-Stack Development',
    description: 'Building full-stack applications with modern technologies while focusing on clean architecture, maintanable code, and solving real-world problems.',
  },
  {
    icon: Globe,
    title: 'Distributed Systems',
    description: 'Co-founder and Interim Chairperson of SWiiT, helping create opportunities for students to learn, collaborate, and grow within the technology community.',
  },
  {
    icon: BookOpen,
    title: 'Always Improving',
    description: 'Whether it is learning a new framework, refining my engineering skills or tackling a challenging project, I am committed to continuous growth.',
  },
]

const stats = [
  { label: 'Software Projects', value: '6+' },
  { label: 'Programming Languages', value: '6+' },
  { label: 'Leadership Roles', value: '2+' },
  { label: 'Years Coding', value: '4+' },
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

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div>
            <SectionLabel>About Me</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-6 text-balance">
              Building software that matters
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a senior Computer Science student with a deep passion for software engineering and building systems that solve meaningful problems. I enjoy
                tackling challenges that require both creative thinking and technical depth - 
                whether that&apos;s designing clean APIs, optimizing performance, or understanding the underlying systems that power modern software.
              </p>
              <p>
                My interests span full-stack web development, distributed systems, software architecture, and developer tooling. Through academic and personal projects, I&apos;ve explored different areas of computer science, including backend engineering, concurrency, operating systems, networking and algorithmic problem-solving.
                Great software is more than just making things work; it should be maintainable, efficient, and genuinely valuable to the people who use it.
              </p>
              <p>
	      Beyond coding, I&apos;m passionate about collaboration, mentorship, and growing technology communities. As the Co-founder and Interim Chaiperson of the Stellenbosch Women in Information Technology Society (SWiiT), I help create spaces that encourage students to connect, learn from one another, and develop their skills in technology. I am also an active member of the Stellenbosch University Developers&apos; society (SU Dev Soc). To me, engineering is as much about people as it is about technology. The best engineers build great systems while helping others grow along the way.
              </p>
            </div>

            {/* Stats row */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center justify-center p-4 rounded-lg border border-border bg-secondary/50 text-center"
                >
                  <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                  <span className="text-xs text-muted-foreground mt-1 leading-tight">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group p-6 rounded-xl border border-border bg-card hover:border-[oklch(0.52_0.22_262/0.3)] hover:shadow-sm transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-[oklch(0.52_0.22_262/0.08)] flex items-center justify-center mb-4 group-hover:bg-[oklch(0.52_0.22_262/0.14)] transition-colors">
                  <Icon className="w-5 h-5 text-[oklch(0.52_0.22_262)]" aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-2">{title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
