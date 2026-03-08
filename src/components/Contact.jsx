import { useEffect, useRef } from 'react'

const links = [
  {
    label: 'Email',
    href: 'mailto:jeffrey.chong28@gmail.com',
    display: 'jeffrey.chong28@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/JC-prog',
    display: 'github.com/JC-prog',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jeffrey-chongllf/',
    display: 'linkedin.com/in/jeffrey-chongllf',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'HuggingFace',
    href: 'https://huggingface.co/JcProg',
    display: 'huggingface.co/JcProg',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.522 0 10 4.478 10 10s-4.478 10-10 10S2 17.522 2 12 6.478 2 12 2zm-1.5 5.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm3 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-5.25 5.25c-.414 0-.75.336-.75.75 0 2.9 2.35 5.25 5.25 5.25h.5c2.9 0 5.25-2.35 5.25-5.25 0-.414-.336-.75-.75-.75H8.25z" />
      </svg>
    ),
  },
]

export default function Contact() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="fade-in max-w-xl">
          <p className="text-blue-600 font-medium text-sm tracking-widest uppercase mb-4">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get in touch
          </h2>
          <p className="text-gray-500 text-lg mb-10 leading-relaxed">
            Open to new opportunities, collaborations, or just a conversation about AI and software engineering.
          </p>

          <div className="space-y-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl hover:border-blue-200 hover:shadow-sm transition-all group"
              >
                <span className="text-gray-400 group-hover:text-blue-600 transition-colors">
                  {link.icon}
                </span>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{link.label}</p>
                  <p className="text-gray-700 text-sm font-medium group-hover:text-blue-600 transition-colors">
                    {link.display}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
