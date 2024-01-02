/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      poppin: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        cyan: "hsl(180, 66%, 49%)",
        darkViolet: "hsl(257, 27%, 26%)",
        red: "hsl(0, 87%, 67%)",
        grays: "hsl(0, 0%, 75%)",
        grayishViolet: "hsl(257, 7%, 63%)",
        veryDarkBlue: "hsl(255, 11%, 22%)",
        veryDarkViolet: "hsl(260, 8%, 14%)",
      },

      backgroundImage: {
        "shorten-mobile": "url('/public/bg-shorten-mobile.svg')",
        "shorten-desktop": "url('/public/bg-shorten-desktop.svg')",
        "boost-mobile": "url('/public/bg-boost-mobile.svg')",
        "boost-desktop": "url('/public/bg-boost-desktop.svg')",
      },
    },
  },
  plugins: [],
};
