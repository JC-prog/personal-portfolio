import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass shadow-lg' : 'py-6 bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <NavLink to="/" className="text-2xl font-bold font-heading tracking-tight">
                    Jeff<span className="text-primary">.</span>Chong
                </NavLink>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-text-secondary'
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </nav>

                {/* Social Icons & Theme Toggle (Desktop) */}
                <div className="hidden md:flex items-center space-x-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-surfaceHighlight text-text-secondary hover:text-primary transition-all"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <div className="w-px h-6 bg-white/10 mx-2"></div>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-text-primary transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:hello@example.com" className="text-text-secondary hover:text-text-primary transition-colors">
                        <Mail size={20} />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-text-primary focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass overflow-hidden"
                    >
                        <nav className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `text-lg font-medium ${isActive ? 'text-primary' : 'text-text-secondary'
                                        }`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                            <div className="flex items-center space-x-6 pt-4 border-t border-white/10">
                                <a href="#" className="text-text-secondary hover:text-white">
                                    <Github size={20} />
                                </a>
                                <a href="#" className="text-text-secondary hover:text-white">
                                    <Linkedin size={20} />
                                </a>
                                <a href="#" className="text-text-secondary hover:text-white">
                                    <Mail size={20} />
                                </a>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
