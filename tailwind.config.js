export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['"Barlow"', "system-ui", "Arial", "sans-serif"],
        barlowCond: ['"Barlow Condensed"', '"Barlow"', "system-ui", "Arial", "sans-serif"],
      },
      letterSpacing: {
        wide2: ".02em",
        wide3: ".03em",
      },
    },
  },
  plugins: [],
};
