/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "banner-bg": "url('/src/images/banner.webp')",
        "stake-bg": "url('/src/images/stakebg.webp')",
      },
    },
  },
  plugins: [],
};
