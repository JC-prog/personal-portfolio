import { useEffect, useRef } from 'react'

const experience = [
  {
    type: 'work',
    role: 'Full Stack Engineer',
    company: 'Tan Tock Seng Hospital',
    period: 'Dec 2025 – Present',
    note: 'Contract',
    points: [
      'Led overhaul of AutoVA, a digital health app, from PoC to production using FastAPI, React, Redis, and AWS (EC2, RDS, S3).',
      'Engineered real-time pose monitoring system with MediaPipe and OpenCV using ArUco markers for clinical accuracy.',
      'Built internal OCR extraction tool (PaddleOCR + Streamlit) to digitise operational documents, increasing efficiency by 50%.',
    ],
  },
  {
    type: 'work',
    role: 'Lead Software Engineer',
    company: 'Rovisys Asia Company Pte Ltd',
    period: 'Dec 2023 – May 2025',
    points: [
      'Led design and implementation of Semiconductor MES solutions in C# on Critical Manufacturing MES.',
      'Authored comprehensive documentation for MES architectures, workflows, and codebases.',
      'Mentored a team of 3 junior developers, promoting best practices in coding and system design.',
    ],
  },
  {
    type: 'work',
    role: 'Software Engineer',
    company: 'Rovisys Asia Company Pte Ltd',
    period: 'Dec 2021 – Nov 2023',
    points: [
      'Maintained a large-scale analytics platform built with Angular, Django, and C#.',
      'Designed SQL Server schemas and developed T-SQL stored procedures supporting PowerBI dashboards and daily ETL workflows.',
      'Built a custom C# SQL Server Express backup tool, guaranteeing 100% data integrity for operational data stores.',
    ],
  },
]

const education = [
  {
    degree: 'MTech in Artificial Intelligence Systems',
    institution: 'National University of Singapore',
    period: 'Jan 2025 – Dec 2026',
  },
  {
    degree: 'BSc Computer Science - Big Data',
    institution: 'University of Wollongong',
    period: 'Apr 2022 – Sep 2024',
  },
  {
    degree: 'BEng Chemical Engineering',
    institution: 'Singapore Institute of Technology',
    period: 'Sep 2018 – Sep 2021',
  },
]

export default function Experience() {
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

  return (
    <section id="experience" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="fade-in">
          <p className="text-blue-600 font-medium text-sm tracking-widest uppercase mb-4">Experience</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
            Where I've worked & studied
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Work experience — takes 2 columns */}
            <div className="lg:col-span-2 space-y-10">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Work</h3>
              {experience.map((item, i) => (
                <div key={i} className="relative pl-6 border-l-2 border-gray-100">
                  <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-blue-600" />
                  <div className="flex flex-wrap items-baseline gap-2 mb-1">
                    <h4 className="font-semibold text-gray-900">{item.role}</h4>
                    {item.note && (
                      <span className="text-xs text-gray-400 font-medium">{item.note}</span>
                    )}
                  </div>
                  <p className="text-blue-600 text-sm font-medium mb-1">{item.company}</p>
                  <p className="text-gray-400 text-xs mb-3">{item.period}</p>
                  <ul className="space-y-1.5">
                    {item.points.map((pt, j) => (
                      <li key={j} className="text-gray-500 text-sm leading-relaxed flex gap-2">
                        <span className="shrink-0 text-gray-400 mt-0.5">•</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="space-y-8">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Education</h3>
              {education.map((item, i) => (
                <div key={i} className="relative pl-6 border-l-2 border-gray-100">
                  <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-gray-300" />
                  <p className="font-medium text-gray-900 text-sm leading-snug mb-1">{item.degree}</p>
                  <p className="text-blue-600 text-sm mb-1">{item.institution}</p>
                  <p className="text-gray-400 text-xs">{item.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
