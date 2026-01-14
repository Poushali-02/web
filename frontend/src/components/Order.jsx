import { useState } from "react";

function OrderButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleRedirect = (platform) => {
    const urls = {
      zomato: "https://www.zomato.com/kolkata/little-darjeeling-1-khardah/book",
      swiggy:
        "https://www.swiggy.com/restaurants/little-darjeeling-khardah-kolkata-686123/dineout",
      google:
        "https://www.google.com/maps/reserve/v/dine/c/nNDZL7a6nME?source=pa&opi=89978449&hl=en-IN&gei=bJxnabrZCuyTvr0P1tPosAw&sourceurl=https://www.google.com/search?q%3Dlittle%2Bdarjeeling%26oq%3Dlit%26gs_lcrp%3DEgZjaHJvbWUqDwgAECMYJxjjAhiABBiKBTIPCAAQIxgnGOMCGIAEGIoFMhUIARAuGCcYrwEYxwEYgAQYigUYjgUyBggCEEUYQDIGCAMQRRg8MgYIBBBFGDwyBggFEEUYPTIGCAYQRRg8MgYIBxBFGD3SAQgxNzY2ajBqN6gCALACAA%26sourceid%3Dchrome%26ie%3DUTF-8",
    };
    window.open(urls[platform], "_blank");
    setShowModal(false);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative group bg-blend-color hover:rounded-full p-8 shadow-2xl transition-all duration-300 hover:scale-110"
          style={{ transitionDelay: showModal ? `0.1s` : "0s" }}
          aria-label="Order food"
        >
          {/* Dinner Dish SVG */}
          <svg
            className="w-28 h-28 transition-all duration-300 md:w-32 md:h-32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Closed State - Plate with utensils on sides */}
            <g
              className={`transition-opacity duration-300 ${
                isHovered ? "opacity-0" : "opacity-100"
              }`}
            >
              {/* Outer Plate */}
              <circle
                cx="12"
                cy="12"
                r="7"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle
                cx="12"
                cy="12"
                r="5.5"
                stroke="currentColor"
                strokeWidth="1"
              />
              {/* Fork - left side */}
              <line
                x1="4"
                y1="8"
                x2="4"
                y2="16"
                stroke="currentColor"
                strokeWidth="1"
              />
              <line
                x1="3.5"
                y1="8"
                x2="3.5"
                y2="11"
                stroke="currentColor"
                strokeWidth="0.7"
              />
              <line
                x1="4.5"
                y1="8"
                x2="4.5"
                y2="11"
                stroke="currentColor"
                strokeWidth="0.7"
              />
              {/* Knife - right side */}
              <line
                x1="20"
                y1="8"
                x2="20"
                y2="16"
                stroke="currentColor"
                strokeWidth="1"
              />
              <line
                x1="19.5"
                y1="8"
                x2="20.5"
                y2="8"
                stroke="currentColor"
                strokeWidth="1"
              />
            </g>

            {/* Open State - Plate with utensils vertical inside */}
            <g
              className={`transition-opacity duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Outer Plate */}
              <circle
                cx="12"
                cy="12"
                r="7"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle
                cx="12"
                cy="12"
                r="5.5"
                stroke="currentColor"
                strokeWidth="1"
              />
              {/* Fork - inside left */}
              <line
                x1="9"
                y1="9"
                x2="9"
                y2="15"
                stroke="currentColor"
                strokeWidth="1"
              />
              <line
                x1="8.5"
                y1="9"
                x2="8.5"
                y2="11.5"
                stroke="currentColor"
                strokeWidth="0.7"
              />
              <line
                x1="9.5"
                y1="9"
                x2="9.5"
                y2="11.5"
                stroke="currentColor"
                strokeWidth="0.7"
              />
              {/* Knife - inside right */}
              <line
                x1="15"
                y1="9"
                x2="15"
                y2="15"
                stroke="currentColor"
                strokeWidth="1"
              />
              <line
                x1="14.5"
                y1="9"
                x2="15.5"
                y2="9"
                stroke="currentColor"
                strokeWidth="1"
              />
            </g>
          </svg>

          {/* Tooltip on hover */}
          {isHovered && (
            <div
              className="absolute bottom-full right-0 mb-2 px-4 py-2 text-amber-50 text-sm font-medium rounded-md shadow-lg whitespace-nowrap animate-fade-in"
              style={{
                backgroundColor: "#1a1410",
                padding: "1rem",
              }}
            >
              Order Now! 🍽️
            </div>
          )}
        </button>
      </div>

      {/* Modal */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-all duration-300 ${
          showModal ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setShowModal(false)}
      >
        <div
          className={`bg-blend-color border-2 border-yellow-500/30 rounded-2xl p-8 max-w-md w-full shadow-2xl transform transition-all duration-300 ${
            showModal ? "scale-100 translate-y-0" : "scale-95 -translate-y-4"
          }`}
          style={{ padding: "1rem" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="text-center mb-8">
            <div className="inline-block mb-4">
              <svg
                className="w-20 h-20 transition-all duration-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Closed State - Plate with utensils on sides */}
                <g className={`transition-opacity duration-300 `}>
                  {/* Outer Plate */}
                  <circle
                    cx="12"
                    cy="12"
                    r="7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="5.5"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  {/* Fork - left side */}
                  <line
                    x1="4"
                    y1="8"
                    x2="4"
                    y2="16"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <line
                    x1="3.5"
                    y1="8"
                    x2="3.5"
                    y2="11"
                    stroke="currentColor"
                    strokeWidth="0.7"
                  />
                  <line
                    x1="4.5"
                    y1="8"
                    x2="4.5"
                    y2="11"
                    stroke="currentColor"
                    strokeWidth="0.7"
                  />
                  {/* Knife - right side */}
                  <line
                    x1="20"
                    y1="8"
                    x2="20"
                    y2="16"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <line
                    x1="19.5"
                    y1="8"
                    x2="20.5"
                    y2="8"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </g>

                {/* Open State - Plate with utensils vertical inside */}
                <g
                  className={`transition-opacity duration-300 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {/* Outer Plate */}
                  <circle
                    cx="12"
                    cy="12"
                    r="7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="5.5"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  {/* Fork - inside left */}
                  <line
                    x1="9"
                    y1="9"
                    x2="9"
                    y2="15"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <line
                    x1="8.5"
                    y1="9"
                    x2="8.5"
                    y2="11.5"
                    stroke="currentColor"
                    strokeWidth="0.7"
                  />
                  <line
                    x1="9.5"
                    y1="9"
                    x2="9.5"
                    y2="11.5"
                    stroke="currentColor"
                    strokeWidth="0.7"
                  />
                  {/* Knife - inside right */}
                  <line
                    x1="15"
                    y1="9"
                    x2="15"
                    y2="15"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <line
                    x1="14.5"
                    y1="9"
                    x2="15.5"
                    y2="9"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </g>
              </svg>
            </div>
            <h3 className="font-display text-3xl font-bold text-amber-50 mb-2">
              Order from
            </h3>
            <p className="text-amber-50/70 text-sm">
              Choose your preferred platform
            </p>
          </div>

          {/* Platform Buttons */}
          <div className="h-auto">
            <div>
              <button
                onClick={() => handleRedirect("zomato")}
                className="w-full bg-blend-color hover:bg-gray-50 cursor-pointer text-red-500 font-semibold rounded-sm border-2 border-red-600/20 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
                style={{ margin: "2%", padding: "1rem" }}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  <path d="M13 7h-2v5l4.25 2.52.77-1.28-3.52-2.09z" />
                </svg>
                Order on Zomato
              </button>
              
              <button
                onClick={() => handleRedirect("swiggy")}
                className="w-full bg-blend-color hover:bg-gray-50 cursor-pointer text-orange-600 font-semibold rounded-sm border-2 border-orange-600/20 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
                style={{ margin: "2%", padding: "1rem" }}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                Order on Swiggy
              </button>
              <button
                onClick={() => handleRedirect("google")}
                className="w-full bg-blend-color hover:bg-gray-50 cursor-pointer text-amber-400 font-semibold rounded-sm border-2 border-red-600/20 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
                style={{ margin: "2%", padding: "1rem" }}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  <path d="M13 7h-2v5l4.25 2.52.77-1.28-3.52-2.09z" />
                </svg>
                Reserve a Table
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="mt-6 w-full text-amber-50/70 hover:text-amber-50 cursor-pointer font-medium py-2 transition-colors duration-300"
              style={{ margin: "2%" }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderButton;
