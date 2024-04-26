/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class", ".dark"],
  theme: {
    extend: {
      fontFamily: {
        ChakraPetch: "Chakra Petch, sans-serif",
        RedHatDisplay: "Red Hat Display, sans-serif",
      },
    },
  },
  plugins: [],
}
