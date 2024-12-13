/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    daisyui: {
      themes: [
        {
          tasksTheme: {
            primary: "#26abff",
            secondary: "#ff26ab",
            accent: "#26ffab",
            neutral: "#e5f5ff",
            "base-100": "#f2f2f2",
          },
        },
        "dark",
      ],
    },
  },
  plugins: [require("daisyui")],

};
  
