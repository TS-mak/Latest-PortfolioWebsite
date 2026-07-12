import Image from 'next/image'
import { ArrowDown, Code2, Link2, Mail, FileText } from 'lucide-react'

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16 overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(oklch(0.9 0.01 250 / 0.5) 1px, transparent 1px), linear-gradient(90deg, oklch(0.9 0.01 250 / 0.5) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* Soft glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse, oklch(0.52 0.22 262 / 0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-4xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card text-xs font-mono text-muted-foreground mb-6">
            <span className="w-2 h-2 rounded-full bg-[oklch(0.52_0.22_262)] animate-pulse" aria-hidden="true" />
            Open to opportunities
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight text-balance mb-4">
            Hi, I&apos;m{' '}
            <span className="text-[oklch(0.52_0.22_262)]">Your Name</span>
          </h1>

          <p className="text-lg sm:text-xl font-medium text-muted-foreground mb-3 text-pretty">
            Software Engineer &amp; CS Student
          </p>

          <p className="text-base text-muted-foreground leading-relaxed max-w-lg mb-8 text-pretty">
            I design and build real-world software systems — from backend APIs to interactive
            frontends. Passionate about clean architecture, scalable code, and turning complex
            problems into elegant solutions.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start mb-8">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[oklch(0.52_0.22_262)] text-white font-medium text-sm hover:bg-[oklch(0.46_0.22_262)] transition-colors"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border bg-card text-foreground font-medium text-sm hover:bg-secondary transition-colors"
            >
              <FileText className="w-4 h-4" aria-hidden="true" />
              Resume
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              <Code2 className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              <Link2 className="w-5 h-5" />
            </a>
            <a
              href="mailto:your@email.com"
              aria-label="Send email"
              className="p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Avatar */}
        <div className="shrink-0">
          <div className="relative w-56 h-56 md:w-64 md:h-64">
            <div
              className="absolute inset-0 rounded-full"
              aria-hidden="true"
              style={{
                background: 'oklch(0.52 0.22 262 / 0.12)',
                transform: 'translate(6px, 6px)',
              }}
            />
            <div className="relative w-full h-full rounded-full border-2 border-border overflow-hidden bg-secondary">
              <Image
                src="/avatar.png"
                alt="Profile photo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowDown className="w-4 h-4 animate-bounce" aria-hidden="true" />
        <span className="sr-only">Scroll down</span>
      </a>
    </section>
  )
}
