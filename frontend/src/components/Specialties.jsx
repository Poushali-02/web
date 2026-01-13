import { useEffect, useRef } from 'react';

function Specialties() {
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
            { threshold: 0.1 }
        );

        const reveals = sectionRef.current?.querySelectorAll('.reveal');
        reveals?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const specialties = [
        {
            name: 'Tagliatelle al Tartufo',
            description: 'Fresh handmade pasta with black truffle, parmigiano, and butter sauce',
            price: '$32',
            gradient: 'from-amber-900 to-yellow-800',
        },
        {
            name: 'Bistecca alla Fiorentina',
            description: 'Grilled T-bone steak with rosemary, olive oil, and roasted vegetables',
            price: '$48',
            gradient: 'from-red-900 to-orange-800',
        },
        {
            name: 'Risotto ai Funghi Porcini',
            description: 'Creamy arborio rice with porcini mushrooms and aged parmesan',
            price: '$28',
            gradient: 'from-stone-800 to-amber-900',
        },
        {
            name: 'Tiramisù Classico',
            description: 'Traditional Italian dessert with espresso-soaked ladyfingers and mascarpone',
            price: '$12',
            gradient: 'from-amber-800 to-yellow-700',
        },
    ];

    return ( 
        <section ref={sectionRef} className="py-16 md:py-20 lg:py-24 px-5 md:px-8 lg:px-16 bg-slate-950">
            <div className="max-w-full mx-auto">
                {/* Section Header */}
                <div className="text-center mb-20 reveal" style={{ paddingBottom: '2rem' }}>
                    <span className="text-yellow-500 text-sm tracking-[0.3em] uppercase font-light">
                        Chef's Selection
                    </span>
                    <h2 className="font-display text-5xl md:text-7xl font-bold text-amber-50 mt-4 mb-6">
                        Our <span className="text-yellow-500">Specialties</span>
                    </h2>
                    <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
                </div>

                {/* Specialties Grid */}
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-3">
                    {specialties.map((item, index) => (
                        <div
                            key={index}
                            className="reveal hover-lift group cursor-pointer"
                            style={{ transitionDelay: `${index * 100}ms`, margin: '2rem', padding: '2rem', backgroundColor: 'var(--color-stone-900)'  }}
                        >
                            <div className="bg-blend-overlay rounded-lg overflow-hidden shadow-xl h-full flex flex-col">
                                {/* Image Placeholder with Gradient */}
                                <div className={`h-64 bg-linear-to-br ${item.gradient} relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-yellow-400 font-thin text-7xl font-display">
                                            {item.name.charAt(0)}
                                        </div>
                                    </div>
                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-yellow-500/0 group-hover:bg-yellow-500/10 transition-all duration-300"></div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex justify-between items-start mb-3">
                                        <p className="p-2 font-display text-4xl font-thin text-yellow-400 group-hover:text-yellow-500 transition-colors duration-300">
                                            {item.name}
                                        </p>
                                        <span className="text-yellow-100 text-xl font-semibold whitespace-nowrap ml-2">
                                            {item.price}
                                        </span>
                                    </div>
                                    <p className="text-yellow-200 text-sm leading-relaxed flex-1">
                                        {item.description}
                                    </p>
                                    <div className="mt-4 pt-4 border-t border-yellow-500/20">
                                        <span className="text-yellow-500 text-xs uppercase tracking-wider group-hover:tracking-widest transition-all duration-300">
                                            Order Now →
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Specialties;
