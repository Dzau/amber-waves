/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Truck-Stop Neon palette
        asphalt: "#0a0908",
        "open-sign-pink": "#ff2d6f",
        "gas-station-green": "#39ff7a",
        "sodium-amber": "#ffb700",
        "smoked-chrome": "#2c2c2e",
        "halogen-white": "#f4ede4",
        "diesel-orange": "#ff5500",
        "motel-pool-cyan": "#4ad7d1",
      },
      fontFamily: {
        display: ['"Bungee Inline"', "cursive"],
        terminal: ['"JetBrains Mono"', "monospace"],
        scrawl: ['"Special Elite"', "cursive"],
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1" },
          "47%, 49%": { opacity: "0.85" },
          "48%": { opacity: "0.6" },
        },
        "node-pulse": {
          "0%, 100%": { filter: "drop-shadow(0 0 4px currentColor)" },
          "50%": { filter: "drop-shadow(0 0 16px currentColor)" },
        },
      },
      animation: {
        flicker: "flicker 4s infinite",
        "node-pulse": "node-pulse 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
