// tailwind.config.js
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        topBottom: {
          "0%, 100%": { transform: "translateY(5px)" },
          "50%": { transform: "translateY(-5px)" },
        },
        leftRight: {
          "0%, 100%": { transform: "translateX(5px)" },
          "50%": { transform: "translateX(-5px)" },
        },
      },
      animation: {
        topBottom: "topBottom 4s ease-in-out infinite",
        leftRight: "leftRight 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
