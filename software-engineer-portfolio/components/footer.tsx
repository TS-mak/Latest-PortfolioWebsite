import { Code2, Link2, Mail } from 'lucide-react'

const year = new Date().getFullYear()

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const social = [
  { label: 'GitHub', href: 'https://github.com/TS-mak', Icon: Code2 },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/thembisile-makhubu-seipati', Icon: Link2 },
  { label: 'Email', href: 'mailto:makhubuts4@gmail.com', Icon: Mail },
]

export default function Footer() {
  return (
    <footer className="bg-[oklch(0.13_0.01_250)] text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="flex items-center gap-2 text-white font-semibold hover:opacity-80 transition-opacity"
              aria-label="Go to top"
            >
              <Code2 className="w-5 h-5 text-[oklch(0.52_0.22_262)]" aria-hidden="true" />
              <span className="font-mono text-sm tracking-tight">Thembisile.dev</span>
            </a>
            <p className="mt-2 text-xs text-white/50 max-w-xs text-pretty">
              Computer Science student &amp; aspiring software engineer. Building real things, one commit at a time.
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {social.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                aria-label={label}
                className="w-9 h-9 rounded-md border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40 font-mono">
            &copy; {year} Thembisile. All rights reserved.
          </p>
          <a
            href="public/Thembisile Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-[oklch(0.52_0.22_262)] hover:underline"
          >
            Download Resume
          </a>
        </div>
      </div>
    </footer>
  )
}
