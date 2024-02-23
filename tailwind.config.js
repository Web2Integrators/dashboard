/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}',"./node_modules/qwik-theme-toggle/**/*.{cjs,mjs}",],
  
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('tailwindcss-debug-screens'),
    require("daisyui")
  ],
};
