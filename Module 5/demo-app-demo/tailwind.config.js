/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        'regal-blue': '#243c5a',
      },
      colors: {
        'regal-blue': '#243c5a',
      },
      spacing: {
        '112': '28rem',
        '128': '32rem',
      },
      outlineWidth: {
        5: '5px',
      },
      outlineOffset: {
        3: '3px',
      }
    },
  },
  plugins: [],
}