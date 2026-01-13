import { useState, useEffect } from 'react';

function Reviews() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const reviews = [
        {
            name: 'Sarah Mitchell',
            rating: 5,
            text: 'An absolutely incredible dining experience! The pasta was perfection, and the ambiance transported us straight to Italy. Will definitely be returning!',
            location: 'New York, NY',
        },
        {
            name: 'Michael Chen',
            rating: 5,
            text: 'Best Italian restaurant in the city, hands down. The attention to detail in every dish is remarkable. The tiramisu is to die for!',
            location: 'San Francisco, CA',
        },
        {
            name: 'Emma Rodriguez',
            rating: 5,
            text: 'Bella Cucina never disappoints. From the warm welcome to the last bite of dessert, everything was exceptional. A true gem!',
            location: 'Chicago, IL',
        },
        {
            name: 'James Thompson',
            rating: 5,
            text: 'The most authentic Italian food outside of Italy. The chef clearly knows their craft. Every visit feels like a special occasion.',
            location: 'Boston, MA',
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % reviews.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [reviews.length]);

    return (
        <section className="py-32 px-4 md:px-8 lg:px-16 bg-restaurant-brown relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 text-9xl font-display text-restaurant-gold">"</div>
                <div className="absolute bottom-10 right-10 text-9xl font-display text-restaurant-gold rotate-180">"</div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <span className="text-restaurant-gold text-sm tracking-[0.3em] uppercase font-light">
                        Testimonials
                    </span>
                    <h2 className="font-display text-5xl md:text-7xl font-bold text-restaurant-cream mt-4 mb-6">
                        What Our <span className="text-restaurant-gold">Guests</span> Say
                    </h2>
                    <div className="w-24 h-1 bg-restaurant-gold mx-auto"></div>
                </div>

                {/* Reviews Carousel */}
                <div className="relative h-80 flex items-center justify-center">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === currentIndex
                                ? 'opacity-100 translate-x-0'
                                : index < currentIndex
                                    ? 'opacity-0 -translate-x-full'
                                    : 'opacity-0 translate-x-full'
                                }`}
                        >
                            <div className="text-center px-8">
                                {/* Stars */}
                                <div className="flex justify-center mb-6">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className="w-6 h-6 text-restaurant-gold"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Review Text */}
                                <p className="text-restaurant-cream text-xl md:text-2xl font-light leading-relaxed mb-8 italic">
                                    "{review.text}"
                                </p>

                                {/* Author */}
                                <div>
                                    <p className="text-restaurant-gold font-semibold text-lg">{review.name}</p>
                                    <p className="text-restaurant-cream/60 text-sm">{review.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center space-x-3 mt-12">
                    {reviews.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'bg-restaurant-gold w-8'
                                : 'bg-restaurant-gold/30 hover:bg-restaurant-gold/50'
                                }`}
                            aria-label={`Go to review ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Reviews;
