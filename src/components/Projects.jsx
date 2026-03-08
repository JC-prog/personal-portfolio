import { useState, useEffect, useRef } from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

// Collect all unique tags across all projects, sorted alphabetically
const allTags = [...new Set(projects.flatMap((p) => p.tags))].sort()

export default function Projects() {
  const [activeTags, setActiveTags] = useState(new Set())
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.05 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const toggleTag = (tag) => {
    setActiveTags((prev) => {
      const next = new Set(prev)
      if (next.has(tag)) {
        next.delete(tag)
      } else {
        next.add(tag)
      }
      return next
    })
  }

  const clearAll = () => setActiveTags(new Set())

  const filtered =
    activeTags.size === 0
      ? projects
      : projects.filter((p) => p.tags.some((t) => activeTags.has(t)))

  return (
    <section id="projects" className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="fade-in">
          <p className="text-blue-600 font-medium text-sm tracking-widest uppercase mb-4">Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Things I've built
          </h2>

          {/* Tag filter */}
          <div className="mb-4">
            <p className="text-xs text-gray-400 font-medium uppercase tracking-widest mb-3">
              Filter by technology
            </p>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                    activeTags.has(tag)
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:text-gray-900'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Active filters + count */}
          <div className="flex items-center justify-between mb-8 min-h-[28px]">
            <div className="flex items-center gap-2 flex-wrap">
              {activeTags.size > 0 && (
                <>
                  <span className="text-xs text-gray-400">Active:</span>
                  {[...activeTags].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-50 text-blue-700 text-xs font-medium rounded-full hover:bg-blue-100 transition-colors"
                    >
                      {tag}
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  ))}
                  <button
                    onClick={clearAll}
                    className="text-xs text-gray-400 hover:text-gray-600 underline transition-colors"
                  >
                    Clear all
                  </button>
                </>
              )}
            </div>
            <p className="text-sm text-gray-400 shrink-0">
              {filtered.length === projects.length
                ? `${projects.length} projects`
                : `${filtered.length} of ${projects.length} projects`}
            </p>
          </div>

          {/* Project grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-gray-400">
              <p className="text-sm">No projects match the selected filters.</p>
              <button onClick={clearAll} className="mt-2 text-sm text-blue-600 hover:underline">
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
