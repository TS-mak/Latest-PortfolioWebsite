'use client'

import { useState } from 'react'
import { Code2, Link2, AtSign, Mail, Send, MapPin, Copy, Check } from 'lucide-react'

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/TS-mak',
    Icon: Code2,
    handle: '@TS-mak',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/thembisile-makhubu-seipati',
    Icon: Link2,
    handle: 'linkedin.com/in/thembisile-makhubu-sepati',
  },
  {
    label: 'Twitter / X',
    href: 'https://twitter.com/thembisilemakhubu',
    Icon: AtSign,
    handle: '@thembisilemakhubu',
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

function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback: do nothing silently
    }
  }

  return (
    <button
      onClick={handleCopy}
      aria-label={copied ? 'Email copied!' : 'Copy email address'}
      className="inline-flex items-center gap-1.5 text-sm font-mono text-[oklch(0.52_0.22_262)] hover:underline"
    >
      {email}
      <span className="ml-1">
        {copied ? (
          <Check className="w-3.5 h-3.5 text-[oklch(0.62_0.18_145)]" aria-hidden="true" />
        ) : (
          <Copy className="w-3.5 h-3.5" aria-hidden="true" />
        )}
      </span>
    </button>
  )
}

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

type SubmitState = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' })
  const [submitState, setSubmitState] = useState<SubmitState>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitState('submitting')
    // Simulate a short delay (replace with a real form submission action)
    await new Promise((r) => setTimeout(r, 1200))
    setSubmitState('success')
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  const inputClass =
    'w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[oklch(0.52_0.22_262/0.4)] transition-shadow'

  return (
    <section id="contact" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="flex justify-center">
            <SectionLabel>Contact</SectionLabel>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
            Get In Touch
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto text-pretty leading-relaxed">
            I&apos;m open to internship and full-time opportunities, research collaborations, and
            interesting side projects. Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: contact info */}
          <aside className="lg:col-span-2 flex flex-col gap-6">
            {/* Email card */}
            <div className="bg-secondary/60 rounded-xl border border-border p-6">
              <div className="flex items-center gap-2 mb-3">
                <Mail className="w-4 h-4 text-[oklch(0.52_0.22_262)]" aria-hidden="true" />
                <span className="text-sm font-semibold text-foreground">Email</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">
                Preferred for professional inquiries.
              </p>
              <CopyEmailButton email="makhubuts4@gmail.com" />
            </div>

            {/* Location */}
            <div className="bg-secondary/60 rounded-xl border border-border p-6">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-[oklch(0.52_0.22_262)]" aria-hidden="true" />
                <span className="text-sm font-semibold text-foreground">Location</span>
              </div>
              <p className="text-sm text-muted-foreground">Stellenbosch, Western Cape</p>
              <p className="text-xs text-muted-foreground mt-1">Open to remote &amp; relocation</p>
            </div>

            {/* Social links */}
            <div className="bg-secondary/60 rounded-xl border border-border p-6">
              <p className="text-sm font-semibold text-foreground mb-4">Find me online</p>
              <ul className="flex flex-col gap-3">
                {socialLinks.map(({ label, href, Icon, handle }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 group"
                      aria-label={`${label} profile`}
                    >
                      <span className="w-8 h-8 rounded-md border border-border bg-card flex items-center justify-center group-hover:border-[oklch(0.52_0.22_262/0.5)] group-hover:bg-[oklch(0.52_0.22_262/0.05)] transition-colors">
                        <Icon className="w-4 h-4 text-muted-foreground group-hover:text-[oklch(0.52_0.22_262)] transition-colors" />
                      </span>
                      <div>
                        <p className="text-xs font-medium text-foreground leading-none">{label}</p>
                        <p className="text-xs text-muted-foreground mt-0.5 font-mono">{handle}</p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <div className="bg-card rounded-xl border border-border p-8 shadow-sm">
              <h3 className="text-base font-semibold text-foreground mb-6">Send a message</h3>

              {submitState === 'success' ? (
                <div className="flex flex-col items-center justify-center py-14 text-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[oklch(0.62_0.18_145/0.12)] flex items-center justify-center">
                    <Check className="w-6 h-6 text-[oklch(0.62_0.18_145)]" aria-hidden="true" />
                  </div>
                  <p className="font-semibold text-foreground">Message sent!</p>
                  <p className="text-sm text-muted-foreground max-w-xs text-pretty">
                    Thanks for reaching out. I&apos;ll get back to you within 1–2 business days.
                  </p>
                  <button
                    onClick={() => setSubmitState('idle')}
                    className="mt-2 text-xs font-medium text-[oklch(0.52_0.22_262)] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs font-medium text-foreground">
                        Your name <span className="text-destructive" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Jane Smith"
                        value={form.name}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-medium text-foreground">
                        Email <span className="text-destructive" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="jane@company.com"
                        value={form.email}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="subject" className="text-xs font-medium text-foreground">
                      Subject <span className="text-destructive" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      placeholder="Internship opportunity / collaboration / etc."
                      value={form.subject}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-medium text-foreground">
                      Message <span className="text-destructive" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me a bit about what you&apos;re working on or how I can help..."
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitState === 'submitting'}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[oklch(0.52_0.22_262)] text-white font-medium text-sm hover:bg-[oklch(0.46_0.22_262)] disabled:opacity-60 disabled:cursor-not-allowed transition-colors self-start"
                  >
                    {submitState === 'submitting' ? (
                      <>
                        <span
                          className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin"
                          aria-hidden="true"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" aria-hidden="true" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
