/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "yellow-dark": "var(--yellow-dark)",
        "yellow": "var(--yellow)",
        "yellow-light": "var(--yellow-light)",
        "purple-dark": "var(--purple-dark)",
        "purple": "var(--purple)",
        "purple-light": "var(--purple-light)",
        "base-title": "var(--base-title)",
        "base-subtitle": "var(--base-subtitle)",
        "base-text": "var(--base-text)",
        "base-label": "var(--base-label)",
        "base-hover": "var(--base-hover)",
        "base-button": "var(--base-button)",
        "base-input": "var(--base-input)",
        "base-card": "var(--base-card)",
        "background": "var(--background)",
        "white": "var(--white)",
      },
      fontFamily: {
        'baloo': "var(--baloo)"
      }
    },
  },
  plugins: [],
}

