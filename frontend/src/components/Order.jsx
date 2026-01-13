import { Link } from "react-router-dom";

function Order() {
  return (
    <section id='#order' className="py-16 md:py-20 lg:py-24 px-5 md:px-8 lg:px-16 relative overflow-hidden">
      <div className="max-w-full mx-auto relative" style={{ padding: "3rem" }}>
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-yellow-500 text-sm tracking-[0.3em] uppercase font-light block mb-4">
            Get the taste now
          </span>
          <div className="inline-block">
            <h2 className="font-display text-5xl md:text-7xl font-bold text-amber-50 mt-4 mb-6">
              Order <span className="text-yellow-500 font-thin">Now</span>
            </h2>
            <div className="w-auto h-1 bg-yellow-500 mx-auto m-8"></div>
          </div>
          <div style={{ margin: "1rem" }}>
            <p className="text-slate-300 ">
              Experience the authentic flavors of Little Darjeeling from the
              comfort of your home. Browse our menu and place your order online
              for quick delivery.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <Link
            to="/order"
            className="group relative px-12 py-5 bg-transparent border-2 border-yellow-500 text-amber-50 rounded-lg font-bold text-xl hover:bg-yellow-500 hover:text-slate-950 transition-all duration-300"
            style={{ padding: "0.5rem" }}
          >
            <span className="flex items-center gap-4">
              Browse Menu & Order
              <svg
                className="w-6 h-6 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </Link>

          <a
            href="tel:+91XXXXXXXXXX"
            className="px-12 py-5 bg-transparent border-2 border-yellow-500 text-amber-50 rounded-lg font-bold text-xl hover:bg-yellow-500 hover:text-slate-950 transition-all duration-300"
            style={{ padding: "0.5rem" }}
          >
            <span className="flex items-center gap-3">
              <svg
                className="w-6 h-6"
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
              Call to Order
            </span>
          </a>
        </div>

        {/* Features */}
        <div
          className="grid md:grid-cols-3 gap-8 mt-16"
          style={{ marginTop: "2rem" }}
        >
          <div className="flex gap-4 items-start">
            <svg
              className="w-8 h-8 text-yellow-500 shrink-0 mt-1"
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
            <div className="text-left">
              <h3 className="text-amber-50 font-semibold text-xl mb-2">
                Quick Delivery
              </h3>
              <p className="text-slate-400">
                Fast and reliable delivery to your doorstep
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <svg
              className="w-8 h-8 text-yellow-500 shrink-0 mt-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className="text-left">
              <h3 className="text-amber-50 font-semibold text-xl mb-2">
                Fresh & Hot
              </h3>
              <p className="text-slate-400">
                Every dish prepared fresh with quality ingredients
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <svg
              className="w-8 h-8 text-yellow-500 shrink-0 mt-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className="text-left">
              <h3 className="text-amber-50 font-semibold text-xl mb-2">
                Easy Payment
              </h3>
              <p className="text-slate-400">Multiple payment options available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Order;
