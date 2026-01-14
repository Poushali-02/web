import { useEffect, useRef } from 'react';
import placeImage from '../assets/img3.jpg';

function About() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            },
            { threshold: 0.2 }
        );

        const reveals = sectionRef.current?.querySelectorAll('.reveal');
        reveals?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" ref={sectionRef} className="relative w-full max-w-full py-16 md:py-20 lg:py-24 px-4 md:px-8" style={{ padding: '3rem' }}>
            <div className="w-full max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image Side */}
                    <div className="reveal">
                        <div className="relative h-125 rounded-lg overflow-hidden shadow-2xl">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{
                                    backgroundImage: `linear-gradient(rgba(26, 20, 16, 0.2), rgba(26, 20, 16, 0.2)), url(${placeImage})`
                                }}
                            ></div>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="reveal space-y-6">
                        <div className="inline-block">
                            <span className="text-yellow-500 text-sm tracking-[0.3em] uppercase font-light">
                                Our Story
                            </span>
                            <div className="w-auto h-0.5 bg-yellow-500 mt-2"></div>
                        </div>

                        <h2 className="font-display text-5xl md:text-7xl font-bold text-amber-50 leading-tight">
                            A Rooftop Taste of <span className="text-yellow-500 font-thin">Darjeeling</span>
                        </h2>

                        <p className="hidden md:block text-amber-50/50 text-sm md:text-lg leading-relaxed">
                            Little Darjeeling is a cozy rooftop café in Khardah where good food meets relaxed evenings. Serving a flavorful mix of Fast Food, Chinese, Tibetan, Continental, and North Indian cuisines, the menu also features refreshing beverages, pastas, steaks, desserts, and plenty of vegetarian options.
                        </p>

                        <p className="md:hidden text-amber-50/50 text-sm leading-relaxed">
                            Cozy rooftop café in Khardah. Serving diverse cuisines with great food under the open sky.
                        </p>

                        <p className="bg-white/10 backdrop-blur-sm text-white/90 text-l leading-relaxed">
                            Located at Madhyapara, Khardah, it’s the perfect spot to unwind, catch up, and enjoy great food under the open sky.
                        </p>

                        <div className="pt-6 mt-6 border-t border-yellow-500/30">
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8" style={{paddingTop:'1rem'}}>
                                <div className="flex items-center gap-1">
                                    <span className="text-l">📍</span>
                                    <span className="text-amber-50/90 text-l">Khardah, West Bengal</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="text-l">📞</span>
                                    <a href="tel:+919088781130" className="text-yellow-500 text-l hover:text-orange-600 transition-colors duration-300">
                                        +91 90887 81130
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
