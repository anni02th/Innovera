/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": 'spin 4s linear infinite',
      },
    },
  },
  plugins: [], 
}

