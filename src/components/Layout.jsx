
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-background text-text-primary overflow-x-hidden selection:bg-primary/30 selection:text-white">
            <Header />
            <main className="flex-grow pt-24">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
