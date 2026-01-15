import { useEffect } from "react";

function Footer() {
  useEffect(() => {
    const OrderBtn = document.getElementById("orderBtn");
    const footer = document.getElementById("footer");

    if (!OrderBtn || !footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          OrderBtn.style.opacity = "0";
          OrderBtn.style.transform = "scale(0.8) translateY(20px)";
          OrderBtn.style.pointerEvents = "none";
        } else {
          OrderBtn.style.opacity = "1";
          OrderBtn.style.transform = "scale(1) translateY(0)";
          OrderBtn.style.pointerEvents = "auto";
        }
      },
      {
        threshold: 0.1,
      }
    );
    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      id="footer"
      className="text-amber-50 border-t border-yellow-500/30 w-full bg-linear-to-b from-slate-950 to-black"
      style={{
        paddingTop: "5%",
      }}
    >
      {/* Main Footer Content */}
      <div className="py-20 px-4 md:px-8 lg:px-16 w-full">
        <div className="max-w-full mx-auto">
          {/* Top Section - Logo & Tagline */}
          <div className="text-center m-16" style={{ padding: "0.5rem" }}>
            <div className="inline-block">
              <h2 className="font-display text-5xl md:text-6xl font-bold text-yellow-500 mb-4">
                Little <span className="font-thin">Darjeeling</span>
              </h2>

              <div className="w-auto h-0.5 bg-yellow-500 mx-auto mt-6"></div>
            </div>
            <p className="text-amber-50/70 text-lg italic">
              Get the best rooftop experience
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            {/* Hours */}
            <div style={{ margin: "5%", padding: "5%" }}>
              <h3 className="font-display text-2xl font-bold text-yellow-500 mb-6 flex items-center">
                <svg
                  className="w-6 h-6 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Hours
              </h3>
              <div>
                {/* Operating Hours */}
                <div
                  className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg"
                  style={{ margin: "0.1rem", padding: "1rem" }}
                >
                  <div className="text-sm tracking-wide text-amber-200 font-semibold">
                    Every Day
                  </div>
                  <div className="text-xl font-bold text-yellow-400">
                    12:30 PM - 11:00 PM
                  </div>
                </div>

                {/* Status Badge */}
                <div
                  className="inline-flex items-center justify-center px-3 py-1.5 bg-emerald-600/20 border border-emerald-400"
                  style={{ marginLeft: "3%", padding: "0.5rem" }}
                >
                  <span className="w-1 h-1 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
                  <span className="text-xs font-medium text-emerald-300 tracking-wide text-center">
                    Open Now
                  </span>
                </div>

                {/* Additional Info */}
                <div className="pt-2 border-t border-amber-50/10">
                  <p className="text-xs text-amber-50/60 leading-relaxed">
                    Closed on special occasions. Call ahead to confirm
                    availability.
                  </p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div style={{ margin: "5%", padding: "5%" }}>
              <h3 className="font-display text-2xl font-bold text-yellow-500 mb-6 flex items-center">
                <svg
                  className="w-6 h-6 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Location
              </h3>
              <div className="space-y-3 text-amber-50/80">
                <div>
                  <p className="font-semibold text-amber-50 text-lg mb-2">
                    Little Darjeeling
                  </p>
                  <p className="leading-relaxed">
                    99/40, Ward 10, AIC Road, 2nd floor
                    <br />
                    Khardah, Kolkata
                  </p>
                </div>
                <div className="w-full h-px bg-yellow-500/20 my-4"></div>
                <div className="space-y-2">
                  <a
                    href="tel:+12125551234"
                    className="flex items-center hover:text-yellow-500 transition-colors duration-300 group"
                  >
                    <svg
                      className="w-5 h-5 mr-2 text-yellow-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="group-hover:tracking-wide transition-all duration-300">
                      090887 81130
                    </span>
                  </a>
                  <a
                    href="mailto:cafelittledarjeeling@gmail.com"
                    className="flex items-center hover:text-yellow-500 transition-colors duration-300 group"
                  >
                    <svg
                      className="w-5 h-5 mr-2 text-yellow-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="group-hover:tracking-wide transition-all duration-300">
                      cafelittledarjeeling@gmail.com
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div style={{ margin: "5%", padding: "5%" }}>
              <h3 className="font-display text-2xl font-bold text-yellow-500 mb-6 flex items-center">
                <svg
                  className="w-6 h-6 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  "Menu",
                  "Reservations",
                  "About Us",
                  "Private Events",
                  "Gift Cards",
                  "Careers",
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-amber-50/80 hover:text-yellow-500 hover:translate-x-2 inline-block transition-all duration-300 group"
                    >
                      <span className="inline-block mr-2 text-yellow-500 group-hover:mr-3 transition-all duration-300">
                        →
                      </span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div style={{ margin: "5%", padding: "5%" }}>
              <h3 className="font-display text-2xl font-bold text-yellow-500 mb-6 flex items-center">
                <svg
                  className="w-6 h-6 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
                Connect
              </h3>
              <div className="flex-row">
                <p className="text-amber-50/80 leading-relaxed">
                  Follow us for daily specials, seasonal menus, and exclusive
                  offers!
                </p>

                {/* Social Media Icons */}
                <div className="flex gap-4" style={{ paddingTop: "1rem" }}>
                  <a
                    href="https://www.facebook.com/CafeLittleDarjeeling/"
                    className="w-12 h-12 bg-amber-900 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-slate-950 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-yellow-500/50"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="mailto:cafelittledarjeeling@gmail.com"
                    className="w-12 h-12 bg-amber-900 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-slate-950 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-yellow-500/50"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="MagicPin"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-6 h-6"
                    >
                      <path d="M2 6.5C2 5.12 3.12 4 4.5 4h15c1.38 0 2.5 1.12 2.5 2.5v11c0 1.38-1.12 2.5-2.5 2.5h-15C3.12 20 2 18.88 2 17.5v-11zm2.2-.3L12 11.4l7.8-5.2a.5.5 0 0 0-.3-.9H4.5a.5.5 0 0 0-.3.9zM4 8.3v8.2c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V8.3l-7.4 4.9a1 1 0 0 1-1.2 0L4 8.3z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/littledarjeeling?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    className="w-12 h-12 bg-amber-900 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-slate-950 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-yellow-500/50"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="https://magicpin.in/Kolkata/Khardah/Restaurant/Little-Darjeeling/store/5cb429/?srsltid=AfmBOop6gln0A0U-j_fAwRu75ipc_Pgsvb_Fnruw7V4-_fd2OX2J4ygA"
                    className="w-12 h-12 bg-amber-900 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-slate-950 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-yellow-500/50"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="MagicPin"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                    >
                      <title>Magicpin SVG Icon</title>
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M40.37 20.87C40.37 32.874 24 43.5 24 43.5S7.63 32.873 7.63 20.87C7.63 11.83 14.958 4.5 24 4.5s16.37 7.33 16.37 16.37"
                      />
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M24 8.72c6.71 0 12.15 5.44 12.15 12.15C36.15 29.78 24 37.667 24 37.667S11.85 29.78 11.85 20.871c0-6.71 5.44-12.15 12.15-12.15"
                      />
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M31.93 20.87c0 5.815-7.93 10.962-7.93 10.962s-7.93-5.147-7.93-10.961a7.93 7.93 0 1 1 15.86 0"
                      />
                    </svg>
                  </a>
                  
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-linear-to-r from-transparent via-yellow-500/50 to-transparent mb-8"></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
