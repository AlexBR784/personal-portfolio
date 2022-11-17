module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Roboto: ["roboto"],
      Caveat: ["caveat"],
    },
    extend: {
      colors: {
        blueDark: "hsl(216, 65%, 11%)",
        greenLight: "hsl(173, 43%, 41%)",
        greyLight: "hsl(225, 20%, 61%)",
      },
    },
  },
  plugins: [],
};
