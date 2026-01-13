import { useEffect, useState } from 'react';
import heroImage from '../assets/img4.jpg';

function Hero() {
    const [scrollY, setScrollY] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const fullText = 'Little Darjeeling';
    const typingSpeed = 90; // milliseconds per character

    // Typewriter effect
    useEffect(() => {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setDisplayedText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, typingSpeed);

        return () => clearInterval(typingInterval);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const parallaxStyle = {
        transform: `scale(${1 + scrollY * 0.0003})`,
        transition: 'transform 0.1s ease-out',
    };

    return (
        <section id="#home" className="relative h-screen w-full overflow-hidden" style = {{paddingBottom: '3rem'}}>
            {/* Background Image with Slow Zoom */}
            <div
                className="absolute inset-0 bg-cover bg-center animate-slow-zoom"
                style={{
                    backgroundImage: `linear-gradient(rgba(26, 20, 16, 0.5), rgba(26, 20, 16, 0.6)), url(${heroImage})`,
                    ...parallaxStyle,
                }}
            >
                {/* Decorative overlay */}
                <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `radial-gradient(circle at 20% 30%, rgba(212, 175, 55, 0.15) 0%, transparent 50%),
                           radial-gradient(circle at 80% 70%, rgba(193, 120, 23, 0.15) 0%, transparent 50%)`
                }}></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                {/* Restaurant Logo/Name */}
                <div className="mb-8 animate-fade-in">
                    <div className="text-restaurant-gold text-sm tracking-[0.3em] uppercase mb-4 font-body font-light">
                        Fine Cafe Experience
                    </div>
                    <h1 className="font-display text-7xl md:text-8xl lg:text-9xl font-bold text-restaurant-cream mb-4 tracking-tight drop-shadow-2xl min-h-[120px] md:min-h-[160px] lg:min-h-[200px]">
                        {displayedText}
                        <span className="animate-pulse">|</span>
                    </h1>
                    <div className="w-24 h-1 bg-restaurant-gold mx-auto mb-6"></div>
                    <p className="text-restaurant-cream/90 text-xl md:text-2xl font-light tracking-wide">
                        Indian Specialties
                    </p>
                </div>

                {/* Pulsing CTA Button */}
                <button className="group relative mt-8 px-10 py-4 bg-restaurant-gold text-restaurant-dark font-semibold text-lg tracking-wider uppercase overflow-hidden transition-all duration-300 hover:bg-restaurant-accent hover:scale-105 animate-pulse-slow shadow-2xl">
                    <a href="#reservation" className="relative z-10">Reserve Your Table</a>
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </button>
            </div>
        </section>
    );
}

export default Hero;