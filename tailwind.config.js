/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          700: "#800080",
          600: "#9932CC"
        },
        brandBlack: "#000000",
        brandWhite: "#FFFFFF"
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #800080 0%, #9932CC 100%)",
        "glass-pattern": "radial-gradient(1000px 600px at 0% 0%, rgba(255,255,255,0.06), transparent), radial-gradient(800px 400px at 100% 100%, rgba(0,0,0,0.1), transparent)"
      },
      boxShadow: {
        "glow": "0 0 40px rgba(153,50,204,0.35)",
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
