/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        chai: {
          500:"#C97C5D",
          600: "#B86B4D",
          700: "A55A3D"
        },
        tea: {
          600: "#2F855A",
          700: "276749"
        },
        "premium-gold": "#D4AF37"
      },
      animation: {
        "gradient-shift": "gradientShift 5s ease infinite",
      },
      keyframes: {
        gradientShift: {
          "0%, 100%":
          { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },

        },
      },
    },
  },

  plugins: [],
};

