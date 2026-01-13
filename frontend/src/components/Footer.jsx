function Footer() {
    return (
        <footer className="bg-gradient-to-b from-slate-950 to-black text-amber-50 border-t border-yellow-500/30">
            {/* Main Footer Content */}
            <div className="py-20 px-4 md:px-8 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    {/* Top Section - Logo & Tagline */}
                    <div className="text-center mb-16">
                        <h2 className="font-display text-5xl md:text-6xl font-bold text-yellow-500 mb-4">
                            Bella Cucina
                        </h2>
                        <p className="text-amber-50/70 text-lg italic">
                            Where tradition meets excellence
                        </p>
                        <div className="w-32 h-0.5 bg-yellow-500 mx-auto mt-6"></div>
                    </div>

                    {/* Main Grid */}
                    <div className="grid md:grid-cols-4 gap-12 mb-16">
                        {/* Hours */}
                        <div>
                            <h3 className="font-display text-2xl font-bold text-yellow-500 mb-6 flex items-center">
                                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Hours
                            </h3>
                            <div className="space-y-4 text-amber-50/80">
                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-semibold text-amber-50">Lunch</span>
                                        <span className="text-sm">Mon - Sat</span>
                                    </div>
                                    <div className="text-yellow-500">11:30 AM - 3:00 PM</div>
                                </div>
                                <div className="w-full h-px bg-yellow-500/20"></div>
                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-semibold text-amber-50">Dinner</span>
                                        <span className="text-sm">Mon - Sat</span>
                                    </div>
                                    <div className="text-yellow-500">5:00 PM - 10:30 PM</div>
                                </div>
                                <div className="w-full h-px bg-yellow-500/20"></div>
                                <div className="mt-4 px-3 py-2 bg-amber-900/50 rounded border border-yellow-500/20">
                                    <div className="text-orange-600 text-sm font-semibold">⚠ Closed Sundays</div>
                                </div>
                            </div>
                        </div>

                        {/* Location */}
                        <div>
                            <h3 className="font-display text-2xl font-bold text-yellow-500 mb-6 flex items-center">
                                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Location
                            </h3>
                            <div className="space-y-3 text-amber-50/80">
                                <div>
                                    <p className="font-semibold text-amber-50 text-lg mb-2">Bella Cucina</p>
                                    <p className="leading-relaxed">
                                        123 Via Roma Street<br />
                                        New York, NY 10001
                                    </p>
                                </div>
                                <div className="w-full h-px bg-yellow-500/20 my-4"></div>
                                <div className="space-y-2">
                                    <a
                                        href="tel:+12125551234"
                                        className="flex items-center hover:text-yellow-500 transition-colors duration-300 group"
                                    >
                                        <svg className="w-5 h-5 mr-2 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <span className="group-hover:tracking-wide transition-all duration-300">(212) 555-1234</span>
                                    </a>
                                    <a
                                        href="mailto:info@bellacucina.com"
                                        className="flex items-center hover:text-yellow-500 transition-colors duration-300 group"
                                    >
                                        <svg className="w-5 h-5 mr-2 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <span className="group-hover:tracking-wide transition-all duration-300">info@bellacucina.com</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="font-display text-2xl font-bold text-yellow-500 mb-6 flex items-center">
                                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                Quick Links
                            </h3>
                            <ul className="space-y-3">
                                {['Menu', 'Reservations', 'About Us', 'Private Events', 'Gift Cards', 'Careers'].map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href="#"
                                            className="text-amber-50/80 hover:text-yellow-500 hover:translate-x-2 inline-block transition-all duration-300 group">
                                        
                                            <span className="inline-block mr-2 text-yellow-500 group-hover:mr-3 transition-all duration-300">→</span>
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Connect */}
                        <div>
                            <h3 className="font-display text-2xl font-bold text-yellow-500 mb-6 flex items-center">
                                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                </svg>
                                Connect
                            </h3>
                            <div className="space-y-4">
                                <p className="text-amber-50/80 leading-relaxed">
                                    Follow us for daily specials, seasonal menus, and exclusive offers!
                                </p>

                                {/* Social Media Icons */}
                                <div className="flex space-x-3">
                                    <a
                                        href="#"
                                        className="w-12 h-12 bg-amber-900 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-slate-950 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-yellow-500/50"
                                        aria-label="Facebook"
                                    >
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="w-12 h-12 bg-amber-900 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-slate-950 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-yellow-500/50"
                                        aria-label="Instagram"
                                    >
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="w-12 h-12 bg-amber-900 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-slate-950 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-yellow-500/50"
                                        aria-label="Twitter"
                                    >
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                        </svg>
                                    </a>
                                </div>

                                {/* Newsletter */}
                                <div className="mt-6 pt-6 border-t border-yellow-500/20">
                                    <p className="text-amber-50/70 text-sm mb-3">Subscribe to our newsletter</p>
                                    <div className="flex">
                                        <input
                                            type="email"
                                            placeholder="Your email"
                                            className="flex-1 px-4 py-2 bg-amber-900 border border-yellow-500/30 text-amber-50 placeholder-amber-50/40 focus:outline-none focus:border-yellow-500 transition-colors duration-300"
                                        />
                                        <button className="px-4 py-2 bg-yellow-500 text-slate-950 font-semibold hover:bg-orange-600 transition-colors duration-300">
                                            →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent mb-8"></div>

                    {/* Bottom Info */}
                    <div className="flex flex-col md:flex-row justify-between items-center text-amber-50/60 text-sm space-y-4 md:space-y-0">
                        <div className="flex items-center space-x-4">
                            <span>We accept:</span>
                            <div className="flex space-x-2">
                                <span className="px-3 py-1 bg-amber-900 rounded text-xs">VISA</span>
                                <span className="px-3 py-1 bg-amber-900 rounded text-xs">MASTERCARD</span>
                                <span className="px-3 py-1 bg-amber-900 rounded text-xs">AMEX</span>
                            </div>
                        </div>
                        <div className="flex space-x-6">
                            <a href="#" className="hover:text-yellow-500 transition-colors duration-300">Privacy Policy</a>
                            <a href="#" className="hover:text-yellow-500 transition-colors duration-300">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="bg-black/50 py-6 px-4 border-t border-yellow-500/20">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-amber-50/50 text-sm">
                        © 2024 <span className="text-yellow-500 font-semibold">Bella Cucina</span>. All rights reserved. Crafted with passion and tradition.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
