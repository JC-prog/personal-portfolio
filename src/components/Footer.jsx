
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-surface border-t border-white/5 py-12 mt-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-xl font-bold font-heading mb-2">Jeff<span className="text-primary">.</span>Chong</h3>
                        <p className="text-text-secondary text-sm">
                            Building digital experiences that matter.
                        </p>
                    </div>

                    <div className="flex items-center space-x-6 mb-6 md:mb-0">
                        <a href="#" className="text-text-secondary hover:text-primary transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="#" className="text-text-secondary hover:text-primary transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className="text-text-secondary hover:text-primary transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div className="border-t border-white/5 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-text-muted">
                    <p>&copy; {new Date().getFullYear()} Jeffrey Chong. All rights reserved.</p>
                    <p className="flex items-center mt-2 md:mt-0">
                        Made using <span className="text-primary font-medium mx-1">Antigravity</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
