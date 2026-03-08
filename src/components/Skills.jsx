import { useEffect, useRef } from 'react'
import { skillGroups } from '../data/skills'

export default function Skills() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="fade-in">
          <p className="text-blue-600 font-medium text-sm tracking-widest uppercase mb-4">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
            Technologies I work with
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                  {group.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg font-medium hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                    >
                      {skill.icon && (
                        <img
                          src={`/icons/${skill.icon}`}
                          alt={skill.name}
                          className="w-4 h-4 object-contain"
                          loading="lazy"
                        />
                      )}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
