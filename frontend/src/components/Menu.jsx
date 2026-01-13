import { useEffect, useRef, useState } from 'react';

function Menu() {
    const sectionRef = useRef(null);
    const [activeCategory, setActiveCategory] = useState('specialties');

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

    const menuData = {
        specialties: {
            title: "Little Darjeeling Specials",
            subsections: [
                {
                    title: "Starters",
                    items: [
                        { name: "Prawn Bomb", price: "₹349", description: "6PCS Juicy prawn balls cooked in special dark sauce with fried green chilli" },
                        { name: "Honeymoon Prawn", price: "₹349", description: "5pcs Tiger Prawn wrapped in chicken & tossed in special pashdi sauce" },
                        { name: "LD Special Dry Chilli Chicken", price: "₹269", description: "6pcs juicy boneless chicken cooked in special dark sauce with fried green chilli" },
                    ]
                },
                {
                    title: "Main Course",
                    items: [
                        { name: "Chicken Stroganoff", price: "₹349", description: "Incredibly delicious Russian dish, made with chicken, mushroom, onions and spices in a creamy sauce & served with herbed rice" },
                        { name: "Burnt Pahadi Chicken with Junglee Rice Sizzler", price: "₹349", description: "Tandoori Style Boneless Chicken • Butter Rice with Corn n Spinach • Grilled Tomato" },
                    ]
                }
            ]
        },
        continental: {
            title: "Continental",
            subsections: [
                {
                    title: "Starters",
                    items: [
                        { name: "Classic Fish & Chips", price: "₹289", description: "2pcs Fried Fish (BASA) served with French Fries / Wedges and Tartar sauce" },
                        { name: "Texas Chicken Fry", price: "₹229", description: "8pcs Boneless Fried Chicken served with Chilly Mayo" },
                        { name: "Peri Peri French Fries", price: "₹149", description: "Golden Fried French Fries with spicy peri peri twist" },
                    ]
                }
            ]
        },
        momo: {
            title: "Momo",
            subsections: [
                {
                    title: "Steamed & Fried",
                    items: [
                        { name: "Hot Steam Gyoza", price: "₹169", description: "5pcs Chicken MOMO served in Bamboo Basket with Red spicy sauce" },
                        { name: "Tibetan Delight Momo", price: "₹249", description: "5pcs Chicken MOMO served in Thick yellow soup (MUST TRY)" },
                        { name: "Nepali Pan Fried Momo", price: "₹249", description: "5pcs Chicken MOMO Deep fried and Tossed in Hot garlic sauce" },
                    ]
                }
            ]
        },
        soup: {
            title: "Soup",
            subsections: [
                {
                    title: "Creamy Soups",
                    items: [
                        { name: "British Cream Onion Soup", price: "₹189", description: "Creamy onion soup with butter and herbs" },
                        { name: "Tomato Cream Soup", price: "₹189", description: "Rich tomato cream with fresh basil" },
                    ]
                },
                {
                    title: "Clear & Asian Soups",
                    items: [
                        { name: "Clear Soup", price: "₹129 / ₹149", description: "Veg / Chicken" },
                        { name: "Sweetcorn Soup", price: "₹179 / ₹199", description: "Veg / Chicken" },
                        { name: "Hot N' Sour Soup", price: "₹179 / ₹199", description: "Veg / Chicken" },
                        { name: "Manchow Soup", price: "₹179 / ₹199", description: "Veg / Chicken" },
                        { name: "Thukpa Soup", price: "₹199", description: "A soup from the old village of darjeeling made with Chicken, Poached Egg & Vegetables" },
                    ]
                }
            ]
        },
        steak: {
            title: "Steak",
            subsections: [
                {
                    title: "Premium Steaks",
                    items: [
                        { name: "Chicken Steak", price: "₹349", description: "Served with herbed rice, sauté vegetables, mashed potato & poached egg" },
                        { name: "Fish Steak", price: "₹379", description: "Served with herbed rice, sauté vegetables, mashed potato & poached egg" },
                        { name: "Prawn Steak", price: "₹399", description: "Served with herbed rice, sauté vegetables, mashed potato & poached egg" },
                    ]
                }
            ]
        },
        pasta: {
            title: "Pasta",
            subsections: [
                {
                    title: "Pasta Varieties",
                    items: [
                        { name: "White Sauce Pasta", price: "₹229", description: "Creamy white sauce with fresh herbs" },
                        { name: "Red Sauce Pasta", price: "₹229", description: "Tomato-based red sauce pasta" },
                        { name: "Mac N' Cheese", price: "₹249", description: "Creamy cheese pasta" },
                        { name: "Lasagna Florentine", price: "₹249", description: "Add Chicken +₹20 or Prawn +₹40" },
                    ]
                }
            ]
        },
        pizza: {
            title: "Pizza",
            subsections: [
                {
                    title: "Pizza Selection",
                    items: [
                        { name: "Queen of the Hill Chicken Pizza", price: "₹299", description: "Loaded with chicken and special toppings" },
                        { name: "Veg Pizza", price: "₹249", description: "Fresh vegetables with cheese" },
                    ]
                }
            ]
        },
        burger: {
            title: "Burger",
            subsections: [
                {
                    title: "Burger Selection",
                    items: [
                        { name: "Tandoori Ch. Burger", price: "₹249", description: "All burgers are served with French Fries" },
                        { name: "Crispy Ch. Burger", price: "₹189", description: "All burgers are served with French Fries" },
                        { name: "Veg. Mayo Burger", price: "₹149", description: "All burgers are served with French Fries" },
                    ]
                }
            ]
        },
        chinese: {
            title: "Chinese",
            subsections: [
                {
                    title: "Chinese Starters",
                    items: [
                        { name: "Chicken Starter", price: "₹249", description: "Crispy Chicken / Kung Pao Chicken / Dragon Chicken (Approx 12 pcs)" },
                        { name: "Fish Starter", price: "₹299", description: "Pan Fried Chilli Fish (6pcs) / Fish in Shanghai Style (6pcs)" },
                        { name: "Veg Starter", price: "₹229", description: "Crispy Chilli Babycorn / Honey Chilli Potato" },
                    ]
                },
                {
                    title: "Noodles",
                    items: [
                        { name: "Hakka Noodles", price: "₹189-259", description: "Veg / Egg / Chicken / Mixed" },
                        { name: "Schezwan Noodles", price: "₹209-279", description: "Veg / Egg / Chicken / Mixed" },
                        { name: "Shanghai Noodles", price: "₹209-279", description: "Veg / Egg / Chicken / Mixed" },
                    ]
                },
                {
                    title: "Rice",
                    items: [
                        { name: "Fried Rice", price: "₹189-259", description: "Veg / Egg / Chicken / Mixed" },
                        { name: "Dragon Fried Rice", price: "₹209-279", description: "Veg / Egg / Chicken / Mixed" },
                        { name: "Hongkong Rice", price: "₹209-279", description: "Veg / Egg / Chicken / Mixed" },
                    ]
                }
            ]
        },
        indian: {
            title: "Indian",
            subsections: [
                {
                    title: "Indian Starters",
                    items: [
                        { name: "Kolkata Fish Fry (Pure Bhetki)", price: "₹159", description: "Classic Bengali fish fry" },
                        { name: "Fish Batter Fry", price: "₹249", description: "2 pcs Basa - Crispy battered fish" },
                        { name: "Murg Takatak", price: "₹299", description: "10 pcs - Tender chicken pieces in spicy gravy" },
                    ]
                },
                {
                    title: "Indian Rice",
                    items: [
                        { name: "Junglee Rice", price: "₹199", description: "Spiced wild rice with vegetables" },
                        { name: "Awadhi Rice", price: "₹199", description: "Royal Lucknow style rice" },
                        { name: "Gorkha Pulao", price: "₹199", description: "Fragrant Nepalese rice" },
                        { name: "Veg Pulao", price: "₹199", description: "Rice with mixed vegetables" },
                    ]
                },
                {
                    title: "Side Dishes",
                    items: [
                        { name: "Butter Chicken", price: "₹249", description: "4pcs - Creamy tomato-based curry" },
                        { name: "Kadhai Chicken", price: "₹249", description: "4pcs - Spiced with fresh peppers" },
                        { name: "Chicken Bharta", price: "₹249", description: "Shredded chicken in aromatic spices" },
                        { name: "Chicken Kofta in Red Gravy", price: "₹249", description: "Meatballs in rich red sauce" },
                        { name: "Dum Aloo", price: "₹189", description: "Potatoes cooked in aromatic spices" },
                    ]
                }
            ]
        },
        beverages: {
            title: "Beverages",
            subsections: [
                {
                    title: "Tea & Coffee",
                    items: [
                        { name: "Pure Darjeeling Tea", price: "₹129 / ₹149", description: "Small Pot / Big Pot" },
                        { name: "Value Combo", price: "₹229", description: "2 Cups of tea with French Fries" },
                        { name: "Kolkata Adda Chaa", price: "₹55", description: "Traditional Kolkata tea" },
                        { name: "Suddha Desi Coffee", price: "₹125", description: "Authentic Indian filter coffee" },
                        { name: "Hot Chocolate", price: "₹149", description: "Rich and creamy" },
                    ]
                },
                {
                    title: "Refreshers",
                    items: [
                        { name: "Fresh Lime Soda", price: "₹99", description: "Refreshing citrus drink" },
                        { name: "Masala Cold Drink", price: "₹99", description: "Spiced cold beverage" },
                        { name: "Virgin Mojito", price: "₹129", description: "Fresh mint and lime" },
                        { name: "Cold Blue", price: "₹129", description: "Blue curacao mocktail" },
                        { name: "Daab Mojito", price: "₹149", description: "Mojito with tender coconut" },
                        { name: "Apple Mary", price: "₹89", description: "Virgin Mary with apple" },
                    ]
                },
                {
                    title: "Shakes",
                    items: [
                        { name: "Strawberry with Icecream", price: "₹169", description: "Creamy strawberry shake" },
                        { name: "Cold Coffee with Icecream", price: "₹169", description: "Iced coffee shake" },
                        { name: "Kitkat Shake", price: "₹199", description: "Chocolate Kitkat shake" },
                    ]
                },
                {
                    title: "Desserts",
                    items: [
                        { name: "Vani Leone", price: "₹139", description: "Special ice cream dessert" },
                        { name: "Real Daab Malai Icecream", price: "₹159", description: "Tender coconut ice cream" },
                        { name: "Sizzling Brownie with Hot Chocolate & Vanilla Ice Cream", price: "₹199", description: "Warm brownie with cold ice cream" },
                    ]
                }
            ]
        },
        lunch: {
            title: "Lunch Bowl",
            subsections: [
                {
                    title: "Lunch Bowl @ ₹249",
                    items: [
                        { name: "Awadhi Rice with Butter Chicken", description: "3 pcs of Butter Chicken" },
                        { name: "Gorkha Pulao with Spicy Laal Chicken", description: "3 pcs of Spicy Chicken" },
                        { name: "Butter Rice with Crispy fried Fish & Makhni Gravy", description: "Tender fish with creamy sauce" },
                        { name: "Ghee Rice with Chicken Takatak", description: "3 pcs of chicken pieces" },
                        { name: "Burnt Garlic Noodles with Chicken Manchurian", description: "3 pcs of manchurian" },
                        { name: "Fried Rice with Chilli Chicken", description: "3 pcs of chilli chicken" },
                        { name: "Jeera Rice with Chicken Kofta", description: "3 pcs of kofta" },
                        { name: "Veg Pulao with Dum Aloo", description: "3 pcs of potato" },
                    ]
                }
            ]
        }
    };

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
        <section ref={sectionRef} className="py-16 md:py-20 lg:py-24 px-5 md:px-8 lg:px-16 bg-slate-950">
            <div className="max-w-full mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12 reveal" style={{ paddingBottom: '2rem', paddingTop: '2rem' }}>
                    <span className="text-yellow-500 text-sm tracking-[0.3em] uppercase font-light">
                        Savor the Flavors
                    </span>
                    <h2 className="font-display text-5xl md:text-7xl font-bold text-amber-50 mt-4 mb-6">
                        Our <span className="text-yellow-500">Menu</span>
                    </h2>
                    <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
                </div>

                {/* Category Navigation */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 reveal">
                    {categories.map((cat) => (
                        <button
                            key={cat.key}
                            onClick={() => setActiveCategory(cat.key)}
                            className={`px-4 md:px-6 py-2 text-sm md:text-base rounded-full transition-all duration-300 ${
                                activeCategory === cat.key
                                    ? 'bg-yellow-500 text-slate-950 font-semibold'
                                    : 'border border-yellow-500/30 text-amber-50 hover:border-yellow-500/60'
                            }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Menu Content */}
                <div className="reveal">
                    {/* Category Title */}
                    <div className="text-center mb-12 pb-8 border-b border-yellow-500/20">
                        <h3 className="font-display text-4xl md:text-5xl font-bold text-amber-50 mb-2">
                            {currentMenu.title}
                        </h3>
                    </div>

                    {/* Menu Items */}
                    <div className="grid md:grid-cols-2 gap-12">
                        {currentMenu.subsections.map((subsection, subIndex) => (
                            <div key={subIndex} className="space-y-6">
                                <div>
                                    <h4 className="font-display text-2xl font-bold text-yellow-500 mb-1 flex items-center">
                                        <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                                        {subsection.title}
                                    </h4>
                                    <div className="w-12 h-0.5 bg-yellow-500/50 ml-8"></div>
                                </div>

                                <div className="space-y-5">
                                    {subsection.items.map((item, itemIndex) => (
                                        <div key={itemIndex} className="group">
                                            <div className="flex justify-between items-start gap-4 mb-2">
                                                <div className="flex-1">
                                                    <h5 className="font-display text-lg font-semibold text-amber-50 group-hover:text-yellow-500 transition-colors duration-300">
                                                        {item.name}
                                                    </h5>
                                                    {item.price && (
                                                        <span className="text-yellow-500 font-semibold inline-block mt-1">
                                                            {item.price}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            {item.description && (
                                                <p className="text-amber-50/60 text-sm leading-relaxed ml-0">
                                                    {item.description}
                                                </p>
                                            )}
                                            <div className="w-full h-px bg-gradient-to-r from-yellow-500/20 via-transparent to-transparent mt-4"></div>
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
