import { useEffect, useRef } from 'react'

export default function About() {
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
    <section id="about" className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="fade-in max-w-3xl">
          <p className="text-blue-600 font-medium text-sm tracking-widest uppercase mb-4">About</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Building at the intersection of AI and software engineering
          </h2>
          <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
            <p>
              I'm a software engineer with over three years of professional experience, currently working as a Full Stack Engineer at Tan Tock Seng Hospital, building production-grade AI tools for clinical environments. My work spans computer vision systems for pose monitoring, OCR pipelines for medical document extraction, and overhauling digital health applications on AWS.
            </p>
            <p>
              I started my career as a Software Engineer at Rovisys Asia, where I built and maintained large-scale analytics platforms and led MES solutions for semiconductor manufacturing clients. That experience gave me a solid foundation in enterprise software, system design, and cross-functional delivery.
            </p>
            <p>
              My path into tech is non-traditional. I studied Chemical Engineering at SIT before pivoting to software development. Since then I've been continuously deepening my AI knowledge through a part-time BSc in Computer Science (Big Data) at UoW and, currently, an MTech in Artificial Intelligence Systems at NUS.
            </p>
            <p>
              I enjoy experimenting with new ideas and technologies, and care about building things that are both technically sound and genuinely useful.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
