import RestaurantMap from "./Map";

function Location() {
    return (
        <section id="location" className="relative w-full py-16 md:py-20 lg:py-24 px-4 md:px-8 bg-linear-to-b from-slate-950 to-black">
            <div className="max-w-full mx-auto" style={{ padding: '2rem' }}>
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-block mb-4">
                        <span className="text-yellow-500 text-sm tracking-[0.3em] uppercase font-light">
                            Visit Us
                        </span>
                        <div className="w-auto h-0.5 bg-yellow-500 mt-2 mx-auto"></div>
                    </div>
                    <h2 className="font-display text-5xl md:text-6xl font-bold text-amber-50 mb-4">
                        Find Us
                    </h2>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                        Located in the heart of Madhyapara, Khardah
                    </p>
                </div>

                {/* Map and Details Container */}
                <div className="grid md:grid-cols-2 gap-8 items-start">
                    {/* Map */}
                    <RestaurantMap />

                    {/* Contact Information */}
                    <div className="space-y-6 text-slate-300" style={{ padding: '0.1rem' }}>
                        <div className="bg-slate-900/50 p-6 rounded-lg border border-yellow-500/10" style={{ padding: '1rem' }}>
                            <h3 className="text-yellow-500 font-semibold text-xl mb-4">Address</h3>
                            <p className="text-amber-50 leading-relaxed">
                                Madhyapara, Khardah<br />
                                West Bengal<br />
                                India
                            </p>
                        </div>

                        <div className="bg-slate-900/50 p-6 rounded-lg border border-yellow-500/10" style={{ padding: '1rem' }}>
                            <h3 className="text-yellow-500 font-semibold text-xl mb-4">Opening Hours</h3>
                            <div className="space-y-2 text-amber-50">
                                <p className="flex justify-between">
                                    <span>Monday - Friday:</span>
                                    <span>12:30 PM - 11:00 PM</span>
                                </p>
                                <p className="flex justify-between">
                                    <span>Saturday - Sunday:</span>
                                    <span>12:30 PM - 11:00 PM</span>
                                </p>
                            </div>
                        </div>

                        <div className="bg-slate-900/50 p-6 rounded-lg border border-yellow-500/10" style={{ padding: '1rem' }}>
                            <h3 className="text-yellow-500 font-semibold text-xl mb-4">Contact</h3>
                            <div className="space-y-2 text-amber-50">
                                <p>Phone: +91 XXXX XXXXXX</p>
                                <p>Email: info@littledarjeeling.com</p>
                            </div>
                        </div>

                        <a 
                            href="https://www.google.com/maps/dir/?api=1&destination=22.724061,88.384312"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full bg-yellow-500 text-slate-950 py-3 rounded-lg text-center font-semibold hover:bg-yellow-400 transition-colors duration-300"
                            style={{ padding: '0.5rem' }}
                        >
                            Get Directions
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Location;
