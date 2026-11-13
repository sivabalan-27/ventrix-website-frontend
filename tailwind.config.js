
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      colors: {
        ventrix: {
          dark: "#080B12",
          surface: "#101827",
          primary: "#2563EB",
          cyan: "#38BDF8",
        },
      },

      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #2563EB, #38BDF8)",
      },

      boxShadow: {
        glow: "0 0 30px rgba(37, 99, 235, 0.20)",
      },

      keyframes: {
        "hv-up": {
          "0%": { transform: "translateY(110%)" },
          "100%": { transform: "translateY(0)" },
        },

        "hv-bar": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },

        "hv-grow": {
          "0%": { transform: "scaleY(0)" },
          "100%": { transform: "scaleY(1)" },
        },

        "hv-flow": {
          to: { strokeDashoffset: "0" },
        },

        "hv-pulse": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.35)" },
        },

        "hv-blink": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },

        "hv-rise": {
          "0%": {
            transform: "translateY(-8px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },

        "hv-slide": {
          to: {
            transform: "translateX(0)",
            opacity: "1",
          },
        },

        "hv-pop": {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
      },

      animation: {
        "hv-up": "hv-up 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) forwards",
        "hv-bar": "hv-bar 0.8s ease forwards 0.5s",
        "hv-grow": "hv-grow 0.7s ease-out forwards",
        "hv-flow": "hv-flow 1.5s ease-in-out infinite",
        "hv-pulse": "hv-pulse 2s ease-in-out infinite",
        "hv-blink": "hv-blink 1.5s ease-in-out infinite",
        "hv-rise": "hv-rise 0.8s ease-out forwards",
        "hv-slide": "hv-slide 0.6s ease-out forwards",
        "hv-pop": "hv-pop 0.5s ease-out forwards",
      },
    },
  },

  plugins: [],
};
