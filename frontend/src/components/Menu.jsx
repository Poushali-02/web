import { useEffect, useRef, useState } from 'react';
import menuData from '../items/menu';

function Menu() {
    const sectionRef = useRef(null);
    const [activeCategory, setActiveCategory] = useState(() => {
        // Load saved category from localStorage or default to 'specialties'
        const savedCategory = localStorage.getItem('selectedMenuCategory');
        return savedCategory || 'specialties';
    });

    // Save to localStorage whenever category changes
    useEffect(() => {
        localStorage.setItem('selectedMenuCategory', activeCategory);
    }, [activeCategory]);

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
    }, [activeCategory]); // Re-run when activeCategory changes

    const categories = [
        { key: 'specialties', label: 'Specialties' },
        { key: 'continental', label: 'Continental' },
        { key: 'momo', label: 'Momo' },
        { key: 'soup', label: 'Soup' },
        { key: 'steak', label: 'Steak' },
        { key: 'pasta', label: 'Pasta' },
        { key: 'pizza', label: 'Pizza' },
        { key: 'burger', label: 'Burger' },
        { key: 'chinese', label: 'Chinese' },
        { key: 'indian', label: 'Indian' },
        { key: 'beverages', label: 'Beverages' },
        { key: 'lunch', label: 'Lunch Bowl' },
    ];

    const currentMenu = menuData[activeCategory];

    return (
        <section id="menu" ref={sectionRef} className="py-16 md:py-20 lg:py-24 px-5 md:px-8 lg:px-16 bg-linear-to-b from-slate-950 to-black">
            <div className="max-w-full mx-auto"  style={{ padding: '1rem' }}>
                {/* Section Header */}
                <div className="text-center mb-16 reveal"  style={{ margin: '1rem' }}>
                    <span className="text-yellow-400 text-xs md:text-sm tracking-[0.4em] uppercase font-light">
                        ✦ Savor the Flavors ✦
                    </span>
                    <h2 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-amber-50 mt-6 mb-4 leading-tight">
                        Our <span className="text-yellow-400 font-thin block md:inline">Menu</span>
                    </h2>
                    <div className="flex items-center justify-center gap-4 mt-6"  style={{ padding: '2rem' }}>
                        <div className="w-48 h-1 bg-linear-to-r from-transparent to-yellow-400"></div>
                        <span className="text-yellow-400/60">✦</span>
                        <div className="w-48 h-1 bg-linear-to-l from-transparent to-yellow-400"></div>
                    </div>
                </div>

                {/* Category Navigation */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16 reveal"  style={{ padding: '1rem' }}>
                    {categories.map((cat) => (
                        <button
                            key={cat.key}
                            onClick={() => setActiveCategory(cat.key)}
                            className={`px-5 md:px-7 py-3 text-xs md:text-sm font-semibold rounded-full transition-all duration-300 transform hover:scale-105 ${
                                activeCategory === cat.key
                                    ? 'bg-yellow-400 text-slate-950 shadow-lg shadow-yellow-400/50'
                                    : 'border-2 border-yellow-400/40 text-amber-50 hover:border-yellow-400/80 hover:shadow-md hover:shadow-yellow-400/20'
                            }`} 
                            style={{ padding: '.9rem' }}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Menu Content */}
                <div className="reveal">
                    {/* Category Title */}
                    <div className="text-center mb-16 pb-8">
                        <h3 className="font-display text-zxl md:text-6xl font-thin text-amber-50 mb-4" style={{ padding: '.9rem' }}>
                            {currentMenu.title}
                        </h3>
                        <div className="w-auto h-1 bg-linear-to-r from-20% via-yellow-400 to-80% mx-auto"></div>
                    </div>

                    {/* Menu Items */}
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-16" style={{ margin: '2rem' }}>
                        {currentMenu.subsections.map((subsection, subIndex) => (
                            <div key={subIndex} className="reveal">
                                <div className='text-center' style={{ margin: '2.5%' ,padding: '2.5%' }}>
                                    <h4 className="font-display text-3xl font-thin text-yellow-400 mb-2 flex items-center">
                                        {subsection.title}
                                    </h4>
                                    <div className="w-auto h-1 bg-linear-to-r from-yellow-400 to-transparent ml-9"></div>
                                </div>

                                <div className="space-y-8">
                                    {subsection.items.map((item, itemIndex) => (
                                        <div key={itemIndex} className="group cursor-pointer" style={{ padding: '1rem' }}>
                                            <div className="flex justify-between items-start gap-4 group-hover:translate-x-1 transition-transform duration-300" >
                                                <div className="flex-1">
                                                    <h5 className="font-display text-xl md:text-2xl font-thin text-amber-50 group-hover:text-yellow-400 transition-colors duration-300">
                                                        {item.name}
                                                    </h5>
                                                    {item.price && (
                                                        <span className="text-yellow-400 font-thin text-lg inline-block mt-1.5">
                                                            {item.price}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            {item.description && (
                                                <p className="text-amber-50/70 text-sm md:text-base leading-relaxed ml-0 group-hover:text-amber-50/90 transition-colors duration-300">
                                                    {item.description}
                                                </p>
                                            )}
                                            <div className="w-full h-0.5 bg-linear-to-r from-yellow-400/40 via-yellow-400/10 to-transparent mt-4 group-hover:from-yellow-400/60 group-hover:via-yellow-400/30 transition-all duration-300"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Menu;
