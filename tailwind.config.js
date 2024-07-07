/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '600px',
        md: '768px',
        lg: '1300px',
        xl: '1900px',
        '2xl': '1496px',
      },

      maxWidth: {
        'container': '1300px',
      },

      fontFamily: {
        primary: ["SF Pro Display", 'Arial', 'sans-serif'],
        rubik: ["Rubik", 'sans-serif'],
        outfit: [ "Outfit", 'sans-serif'],
        inter: ["Inter", 'sans-serif'],
      },

      colors: {
        givi: '#EEE',
        geno: "#f5f5f5",
        gero: '#D9D9D9',
        grey: '#5B5B5B',
        pomo: '#FF2727',
        havy: '#121212',
        green: '#71A800',
        dark: '#333333',
        orin: '#FFC8A9',
        orni: '#FF9458',
        orange: '#FF5B00',
        orenga: '#FF5C00',
        red: 'FF0000',
        block: '#1F1E14',
        heavyDark: '#1F1814'
      }
    },

    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '1.88rem',
        xl: '5rem',
      }
    }

  },
  plugins: [],
}