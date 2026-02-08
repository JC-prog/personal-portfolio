
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Layers, Server, Cpu, Database, AppWindow } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "AI Traffic Optimizer",
        category: "AI/ML",
        description: "A machine learning model to optimize city traffic flow using real-time camera data. Reduced congestion by 15% in simulation tests.",
        tech: ["Python", "TensorFlow", "OpenCV"],
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        link: "#"
    },
    {
        id: 2,
        title: "Cloud Scalar Platform",
        category: "Infrastructure",
        description: "Automated scaling solution for distributed microservices. Features cost analysis and predictive resource allocation.",
        tech: ["Go", "Kubernetes", "Terraform"],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        link: "#"
    },
    {
        id: 3,
        title: "FinDash Analytics",
        category: "Data Science",
        description: "Real-time financial dashboard for tracking market trends and portfolio performance. Processes over 1M data points per second.",
        tech: ["Python", "Pandas", "React", "D3.js"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        link: "#"
    },
    {
        id: 4,
        title: "Social Connect App",
        category: "Applications",
        description: "A next-gen social networking platform focusing on privacy and genuine connections. Built with a decentralized architecture.",
        tech: ["React Native", "Node.js", "GraphQL"],
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        link: "#"
    }
];

const categories = ["All", "Infrastructure", "Applications", "AI/ML", "Data Science"];

const ProjectsPage = () => {
    const [filter, setFilter] = useState("All");

    const filteredProjects = projects.filter(project =>
        filter === "All" ? true : project.category === filter
    );

    return (
        <div className="container mx-auto px-6 pb-20">

            {/* Header */}
            <div className="text-center py-20">
                <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
                    My <span className="text-gradient">Work</span>
                </h1>
                <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                    A collection of projects spanning infrastructure, AI, and full-stack applications.
                </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-20">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat
                                ? 'bg-primary text-white shadow-lg shadow-primary/25'
                                : 'bg-surface border border-white/5 text-text-secondary hover:bg-surfaceHighlight hover:text-white'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="space-y-12">
                <AnimatePresence mode='popLayout'>
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="glass-card rounded-2xl overflow-hidden md:flex group hover:border-primary/30 transition-colors"
                        >
                            {/* Media Side (Left) */}
                            <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden bg-black">
                                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                                />

                                {/* Carousel/Video Controls Placeholder */}
                                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
                                    <div className="w-2 h-2 rounded-full bg-white"></div>
                                    <div className="w-2 h-2 rounded-full bg-white/30"></div>
                                    <div className="w-2 h-2 rounded-full bg-white/30"></div>
                                </div>
                            </div>

                            {/* Content Side (Right) */}
                            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
                                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ExternalLink className="text-primary" />
                                </div>

                                <div className="mb-4">
                                    <span className="text-xs font-bold text-primary uppercase tracking-wider bg-primary/10 px-2 py-1 rounded">
                                        {project.category}
                                    </span>
                                </div>

                                <h2 className="text-3xl font-bold font-heading mb-4 text-white group-hover:text-primary transition-colors">
                                    {project.title}
                                </h2>

                                <p className="text-text-secondary mb-8 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-3 mb-8">
                                    {project.tech.map((t) => (
                                        <span key={t} className="px-3 py-1 text-sm rounded bg-surface border border-white/5 text-text-muted">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={project.link}
                                    className="inline-flex items-center text-white font-medium hover:text-primary transition-colors"
                                >
                                    View Project Details <ExternalLink size={16} className="ml-2" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ProjectsPage;
