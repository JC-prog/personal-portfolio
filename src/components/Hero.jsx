const socialLinks = [
  {
    label: 'Email',
    href: 'mailto:jeffrey.chong28@gmail.com',
    display: 'jeffrey.chong28@gmail.com',
    icon: (
      // Gmail-style envelope
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#EA4335"/>
        <path d="M4 7.5L12 13L20 7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="4" y="7" width="16" height="11" rx="1" stroke="white" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/JC-prog',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#181717" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jeffrey-chongllf/',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#0A66C2"/>
        <path fill="white" d="M7.75 9.5h-2.5v8h2.5v-8zm-1.25-4a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm3.25 4v8h2.5v-4.25c0-1.1.9-2 2-2s2 .9 2 2V17.5h2.5v-4.75c0-2.35-1.4-3.75-3.5-3.75-1.1 0-2 .45-2.5 1.15V9.5h-3z"/>
      </svg>
    ),
  },
  {
    label: 'HuggingFace',
    href: 'https://huggingface.co/JcProg',
    icon: <img src="/icons/huggingface.png" alt="HuggingFace" className="w-6 h-6 object-contain" />,
  },
]

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-white pt-16 relative">
      <div className="max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-stretch gap-12 lg:gap-20">

          {/* Text — left */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-blue-600 font-medium text-sm tracking-widest uppercase mb-4">
              Software Engineer
            </p>

            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 tracking-tight leading-tight mb-5">
              Jeffrey Chong
            </h1>

            <p className="text-xl sm:text-2xl text-gray-500 font-light mb-4">
              AI Engineering &nbsp;&middot;&nbsp; Full-Stack Development
            </p>

            <p className="text-gray-500 text-base sm:text-lg mb-10 leading-relaxed max-w-xl">
              I build AI-powered applications and full-stack systems, from computer vision pipelines
              and RAG systems to production-ready web apps.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-block px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:border-gray-400 hover:text-gray-900 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:border-gray-400 hover:text-gray-900 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
                Resume
              </a>
            </div>
          </div>

          {/* Photo — right, stretches to match text above buttons */}
          <div className="shrink-0 flex flex-col items-center lg:w-80">
            <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-full lg:h-full rounded-2xl overflow-hidden border border-gray-200 shadow-lg bg-gray-100">
              {/*
                To swap in your real photo:
                1. Drop your image into public/ (e.g. public/photo.jpg)
                2. Change src below to "/photo.jpg"
              */}
              <img
                src="/avatar-placeholder.svg"
                alt="Jeffrey Chong"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

        {/* Social links — below the flex row, left-aligned on desktop */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-10">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              aria-label={link.label}
              title={link.display || link.label}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 text-sm font-medium hover:border-gray-300 hover:text-gray-900 hover:bg-gray-50 transition-all duration-150"
            >
              {link.icon}
              <span>{link.label}</span>
            </a>
          ))}
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-gray-300">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
