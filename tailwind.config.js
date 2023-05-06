/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2b6777",

          secondary: "#c8d8e4",

          accent: "#52ab98",

          neutral: "#f2f2f2",

          "base-100": "#ffffff",

          info: "#A3B0EB",

          success: "#374151",

          warning: "#D9AF17",

          error: "#F8686D",
        },
      },
    ],
  },

  plugins: [require("daisyui")],
};
