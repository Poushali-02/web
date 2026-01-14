import { useEffect, useRef } from 'react';
import prawn from '../assets/prawn.jpg';
import chicken from '../assets/chicken.jpg'
import momo from '../assets/momo.jpg';
import steak from '../assets/steak.jpg'

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
            img: prawn,
            name: 'Prawn Bomb',
            description: '6PCS Juicy prawn balls cooked in special dark sauce with fried green chilli',
            price: '₹349',
            gradient: 'from-pink-900 to-rose-800',
        },
        {
            img: chicken,
            name: 'Chicken Stroganoff',
            description: 'Russian dish, made with chicken, mushroom, onions and spices in a creamy sauce & served with herbed rice',
            price: '₹349',
            gradient: 'from-orange-900 to-amber-800',
        },
        {
            img: momo,
            name: 'Hot Steam Gyoza',
            description: '5pcs Chicken MOMO served in Bamboo Basket with Red spicy sauce',
            price: '₹169',
            gradient: 'from-red-900 to-orange-700',
        },
        {
            img: steak,
            name: 'Chicken Steak',
            description: 'Served with herbed rice, sauté vegetables, mashed potato & poached egg',
            price: '₹349',
            gradient: 'from-amber-900 to-yellow-800',
        },
    ];

    return ( 
        <section id="specialties" ref={sectionRef} className="py-16 md:py-20 lg:py-24 px-5 md:px-8 lg:px-16 bg-blend-color">
            <div className="max-w-full mx-auto">
                {/* Section Header */}
                <div className="text-center mb-20 reveal" style={{ padding: '2rem' }}>
                    <span className="text-yellow-500 text-sm tracking-[0.3em] uppercase font-light block mb-4">
                        Chef's Selection
                    </span>
                    <div className="inline-block">
                        <p className="font-display text-5xl md:text-7xl font-bold text-amber-50 mb-4">
                            Our <span className="text-yellow-500 font-thin">Specialties</span>
                        </p>
                        <div className="h-1 bg-yellow-500"></div>
                    </div>
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
                                    {item.img ? (
                                        <img 
                                            src={item.img} 
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-yellow-400 font-thin text-7xl font-display">
                                                {item.name.charAt(0)}
                                            </div>
                                        </div>
                                    )}
                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-yellow-500/0 group-hover:bg-yellow-500/10 transition-all duration-300"></div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex justify-between items-start mb-3" style={{ padding: '1rem' }}>
                                        <p className="p-2 font-display text-4xl font-thin text-yellow-400 group-hover:text-yellow-500 transition-colors duration-300">
                                            {item.name}
                                        </p>
                                        <span className="text-yellow-100 text-xl font-semibold whitespace-nowrap ml-2">
                                            {item.price}
                                        </span>
                                    </div>
                                    <p className="text-yellow-200 text-sm leading-relaxed flex-1" style={{ padding: '1rem' }}>
                                        {item.description}
                                    </p>
                                    <div className="mt-4 pt-4 border-t border-yellow-500/20" style={{ padding: '1rem' }}>
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
