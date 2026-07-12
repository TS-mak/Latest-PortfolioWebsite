import { GraduationCap, Cpu, Globe, BookOpen } from 'lucide-react'

const highlights = [
  {
    icon: GraduationCap,
    title: 'Computer Science',
    description: 'Pursuing a B.Sc. in Computer Science with focus on algorithms, systems, and software engineering.',
  },
  {
    icon: Cpu,
    title: 'Full-Stack Development',
    description: 'Building end-to-end applications — from REST APIs and databases to responsive, accessible UIs.',
  },
  {
    icon: Globe,
    title: 'Distributed Systems',
    description: 'Interested in scalable architectures, microservices, cloud infrastructure, and system design.',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    description: 'Always exploring new technologies, contributing to open source, and writing about what I learn.',
  },
]

const stats = [
  { label: 'Projects Built', value: '10+' },
  { label: 'Technologies', value: '20+' },
  { label: 'GitHub Commits', value: '500+' },
  { label: 'GPA', value: '3.8' },
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
                I believe great software is not just about making things work — it&apos;s about making
                them maintainable, efficient, valuable to the people who use it.
              </p>
              <p>
	      Beyond coding, I&apos;m passionate about collaboration, mentorship, and growing technology communities. As the Interim Chaiperson of the Stellenbosch Women in Information Technology Society (SWiiT), I help create spaces that encourage students to connect, learn from one another, and develop their skills in technology. I am also an active member of the Stellenbosch University Developer&apos;s society (SU Dev Soc) I believe great engineers are not only defined by the systems they build, but also the communities the help strengthn along the way.
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
