
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Code, Database, Globe, Briefcase, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
};

const LandingPage = () => {
    return (
        <div className="space-y-32 pb-20">

            {/* Hero Section */}
            <section className="container mx-auto px-6 min-h-[80vh] flex flex-col md:flex-row items-center justify-between">
                <motion.div
                    className="md:w-1/2 mb-10 md:mb-0"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Placeholder for Profile Photo */}
                    <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl relative mx-auto md:mx-0 group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 group-hover:opacity-0 transition-opacity duration-500"></div>
                        <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                            alt="Jeffrey Chong"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                </motion.div>

                <motion.div
                    className="md:w-1/2 text-center md:text-left space-y-6"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                        Software Engineer
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight">
                        Building the <span className="text-gradient">future</span> one line at a time.
                    </h1>
                    <p className="text-xl text-text-secondary max-w-lg mx-auto md:mx-0">
                        I craft scalable infrastructure and intuitive applications. Focused on AI/ML integration and data-driven solutions.
                    </p>
                    <div className="flex items-center justify-center md:justify-start space-x-4 pt-4">
                        <Link to="/projects" className="bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-all hover:shadow-lg hover:shadow-primary/25 flex items-center">
                            View Projects <ArrowRight size={18} className="ml-2" />
                        </Link>
                        <a href="#contact" className="px-8 py-3 rounded-full font-medium border border-white/10 hover:bg-white/5 transition-all text-text-primary">
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </section>

            {/* About Me */}
            <section className="container mx-auto px-6">
                <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading">About Me</h2>
                    <p className="text-lg text-text-secondary leading-relaxed">
                        I am a passionate developer with a knack for solving complex problems.
                        With a background in both infrastructure and application development, I bridge the gap between
                        backend robustness and frontend elegance. My journey involves continuous learning
                        and pushing the boundaries of what's possible with modern web technologies and AI.
                    </p>
                </motion.div>
            </section>

            {/* Professional Experience */}
            <section className="bg-surface/30 py-20">
                <div className="container mx-auto px-6">
                    <motion.div {...fadeInUp} className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Experience</h2>
                            <p className="text-text-secondary">My professional journey so far.</p>
                        </div>
                        <button className="mt-6 md:mt-0 flex items-center px-6 py-2 rounded-lg bg-surface border border-white/10 hover:border-primary/50 hover:text-primary transition-all group">
                            <Download size={18} className="mr-2 group-hover:-translate-y-1 transition-transform" />
                            Download Resume
                        </button>
                    </motion.div>

                    <div className="space-y-8 max-w-4xl mx-auto">
                        {[1, 2].map((item) => (
                            <motion.div
                                key={item}
                                {...fadeInUp}
                                className="glass-card p-8 rounded-2xl md:flex gap-6 group"
                            >
                                <div className="md:w-1/4 mb-4 md:mb-0">
                                    <span className="text-sm font-mono text-primary">2023 - Present</span>
                                    <h3 className="text-xl font-bold mt-1">Senior Engineer</h3>
                                    <p className="text-text-muted">Tech Corp Inc.</p>
                                </div>
                                <div className="md:w-3/4">
                                    <p className="text-text-secondary mb-4">
                                        Leading the backend infrastructure migration to Kubernetes. Improved system reliability by 99.9%.
                                        Mentoring junior developers and establishing best practices for CI/CD pipelines.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {['Go', 'Kubernetes', 'AWS', 'System Design'].map(tag => (
                                            <span key={tag} className="text-xs px-3 py-1 rounded-full bg-surfaceHighlight border border-white/5 text-text-secondary">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education */}
            <section className="container mx-auto px-6">
                <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 text-center">Education</h2>

                    <div className="relative border-l border-white/10 ml-6 space-y-12">
                        {[
                            { degree: "M.S. Computer Science", school: "Stanford University", year: "2022" },
                            { degree: "B.S. Software Engineering", school: "MIT", year: "2020" }
                        ].map((edu, idx) => (
                            <div key={idx} className="relative pl-8">
                                <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background"></span>
                                <h3 className="text-xl font-bold">{edu.degree}</h3>
                                <p className="text-primary mt-1">{edu.school}</p>
                                <p className="text-sm text-text-muted mt-1">{edu.year}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Project Highlights */}
            <section className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Featured Work</h2>
                    <Link to="/projects" className="text-primary hover:text-blue-400 font-medium inline-flex items-center">
                        View all projects <ArrowRight size={16} className="ml-1" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Placeholder Projects */}
                    {[1, 2].map((proj) => (
                        <motion.div
                            key={proj}
                            whileHover={{ y: -5 }}
                            className="glass-card rounded-2xl overflow-hidden group cursor-pointer"
                        >
                            <div className="h-48 bg-surfaceHighlight relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                                <img
                                    src={`https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                                    alt="Project"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute bottom-4 left-4 z-20">
                                    <span className="text-xs font-bold text-accent uppercase tracking-wider">Infrastructure</span>
                                    <h3 className="text-xl font-bold text-white">Cloud Scalar</h3>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-text-secondary text-sm mb-4">
                                    Automated scaling solution for distributed systems reducing costs by 40%.
                                </p>
                                <div className="flex gap-2">
                                    <span className="text-xs px-2 py-1 rounded bg-white/5 text-text-muted">Python</span>
                                    <span className="text-xs px-2 py-1 rounded bg-white/5 text-text-muted">Terraform</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Skills */}
            <section className="bg-surface/30 py-20">
                <div className="container mx-auto px-6">
                    <motion.div {...fadeInUp} className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Tech Stack</h2>
                        <p className="text-text-secondary">Tools and technologies I use to build.</p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { icon: <Code size={32} />, title: "Frontend", skills: "React, Tailwind, Next.js" },
                            { icon: <Database size={32} />, title: "Backend", skills: "Node, Go, Python" },
                            { icon: <Globe size={32} />, title: "Infrastructure", skills: "AWS, Docker, K8s" },
                            { icon: <Briefcase size={32} />, title: "Tools", skills: "Git, Jira, Figma" }
                        ].map((skill, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.05 }}
                                className="glass-card p-6 rounded-2xl text-center flex flex-col items-center"
                            >
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                                    {skill.icon}
                                </div>
                                <h3 className="font-bold text-lg mb-2">{skill.title}</h3>
                                <p className="text-sm text-text-muted">{skill.skills}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default LandingPage;
