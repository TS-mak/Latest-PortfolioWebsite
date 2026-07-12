'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Code2, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'

type Project = {
  title: string
  description: string
  longDescription: string
  image: string
  tags: string[]
  github: string
  demo?: string
  highlights: string[]
  featured?: boolean
}

const projects: Project[] = [
  {
    title: 'DevLink',
    description: 'A platform connecting developers with open-source projects that match their skills and interests.',
    longDescription:
      'DevLink is a full-stack web application that aggregates GitHub repositories and matches contributors to projects based on language preferences, skill tags, and contribution history. It features real-time notifications, a recommendation engine, and an activity feed.',
    image: '/projects/devlink.png',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'GitHub API', 'Tailwind CSS'],
    github: 'https://github.com/yourusername/devlink',
    demo: 'https://devlink.example.com',
    highlights: [
      'Built a skill-based matching algorithm using collaborative filtering',
      'Integrated GitHub OAuth and REST API for real-time repository data',
      'Implemented a WebSocket notification system for project activity',
      'Deployed on Vercel with a PostgreSQL backend and CI/CD pipeline',
    ],
    featured: true,
  },
  {
    title: 'TaskFlow',
    description: 'A collaborative Kanban board application with real-time sync, drag-and-drop, and team workspaces.',
    longDescription:
      'TaskFlow is a project management tool inspired by Trello and Linear. It supports multiple boards per workspace, real-time collaborative editing via WebSockets, rich card descriptions with Markdown, due dates, and priority levels.',
    image: '/projects/taskflow.png',
    tags: ['React', 'Node.js', 'MongoDB', 'WebSockets', 'Express'],
    github: 'https://github.com/yourusername/taskflow',
    demo: 'https://taskflow.example.com',
    highlights: [
      'Designed a drag-and-drop interface using the HTML5 Drag API',
      'Built real-time collaboration with Socket.io — all users see changes instantly',
      'Implemented JWT authentication with refresh token rotation',
      'Achieved sub-100ms latency on card operations through optimistic UI updates',
    ],
    featured: true,
  },
  {
    title: 'AlgoViz',
    description: 'An interactive algorithm visualizer for sorting, pathfinding, and graph traversal algorithms.',
    longDescription:
      'AlgoViz helps computer science students understand algorithms visually. It animates Bubble Sort, Merge Sort, QuickSort, Dijkstra, A*, BFS, DFS, and more — with adjustable speed, step-through controls, and complexity annotations.',
    image: '/projects/algoviz.png',
    tags: ['React', 'TypeScript', 'Canvas API', 'CSS Animations'],
    github: 'https://github.com/yourusername/algoviz',
    demo: 'https://algoviz.example.com',
    highlights: [
      'Visualized 12 sorting and 6 graph traversal algorithms with smooth animations',
      'Built a custom animation scheduler with pause, resume, and step controls',
      'Displayed time and space complexity for each algorithm in real time',
    ],
    featured: false,
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

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <article className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-md transition-all duration-200 flex flex-col">
      {/* Image */}
      <div className="relative h-48 bg-secondary overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {project.featured && (
          <span className="absolute top-3 left-3 px-2 py-1 rounded text-xs font-mono font-medium bg-[oklch(0.52_0.22_262)] text-white">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="font-bold text-foreground text-lg leading-tight">{project.title}</h3>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              <Code2 className="w-4 h-4" />
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4" role="list" aria-label="Technologies used">
          {project.tags.map((tag) => (
            <span
              key={tag}
              role="listitem"
              className="px-2 py-0.5 rounded text-xs font-mono bg-secondary border border-border text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded((v) => !v)}
          className="flex items-center gap-1.5 text-xs font-medium text-[oklch(0.52_0.22_262)] hover:underline mt-auto"
          aria-expanded={expanded}
        >
          {expanded ? (
            <>
              <ChevronUp className="w-3.5 h-3.5" aria-hidden="true" /> Hide details
            </>
          ) : (
            <>
              <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" /> Show details
            </>
          )}
        </button>

        {expanded && (
          <div className="mt-4 pt-4 border-t border-border space-y-3">
            <p className="text-sm text-muted-foreground leading-relaxed">{project.longDescription}</p>
            <ul className="space-y-2" aria-label="Project highlights">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[oklch(0.52_0.22_262)] shrink-0"
                    aria-hidden="true"
                  />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  )
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="flex justify-center">
            <SectionLabel>Projects</SectionLabel>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
            Things I&apos;ve Built
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto text-pretty leading-relaxed">
            A selection of projects that demonstrate my approach to software design, architecture, and engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border text-sm font-medium text-foreground hover:bg-secondary transition-colors"
          >
            <Code2 className="w-4 h-4" aria-hidden="true" />
            View all on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
