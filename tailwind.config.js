/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
       title: ['"Avenir Next"', 'Helvetica', 'Arial', 'sans-serif'],
        subtitle: ['"Unageo"', 'Segoe UI', 'Roboto', 'sans-serif'],
        body: ['"Louis George Cafe"', 'Georgia', 'serif'],
      },
      screens: {
        xs: "300px",
        xs390 : "390px",
        xs430 : "430px"
      },
    },
  },
  plugins: [],
};
