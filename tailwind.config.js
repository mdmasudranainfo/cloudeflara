/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },

  //
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "rgb(5, 109, 255)",

          secondary: "#5448db",

          accent: "#4704ef",

          neutral: "#2C2B3B",

          "base-100": "#ffffffff",

          info: "#86CDF9",

          success: "#17B578",

          warning: "#E8B130",

          error: "#F66F9A",
        },
      },
    ],
  },

  //
  plugins: [require("daisyui")],
};
