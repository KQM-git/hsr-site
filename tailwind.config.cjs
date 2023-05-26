/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      stars: {
        5: "#FDBA3E",
        4: "#C03EFD",
        3: "#3E7FFD",
      },

      // Element related
      // light: used for card bg
      // slider: used for colored sliders
      // N: bg layers
      imaginary: {
        DEFAULT: '#e5b909'
      },
      quantum: {
        DEFAULT: '#4f48bd'
      },
      wind: {
        DEFAULT: '#42c38c'
      },
      lightning: {
        DEFAULT: '#b54bd3'
      },
      ice: {
        DEFAULT: '#2192d6',
        light: "#57AED9",
        slider: "#81CDEF",
        0: "#0F0F14",
        1: "#161624",
        2: "#110F1A",
      },
      fire: {
        DEFAULT: '#e62a29'
      },
      physical: {
        DEFAULT: '#71718c'
      },

      // Site related

      // theme colors

      text: {
        DEFAULT: "#fafafa",
        em: "DAB2F9",
        links: "DAB2F9"
      },

      // primary background color; all content lays on top of this
      bg: {
        DEFAULT: "#141214",
        dark: "#18151F",
      },

      neutral: {
        100: "#fafafa",
        200: "#eee",
        300: "#ccc",
        400: "#aaa",
        500: "#666",
        600: "#535155",
        800: "#333"
      }
    },
    extend: {
      aria: {
        collapsed: 'expanded="false"'
      },
      backgroundImage: {
        main: "url(/img/planet_bg.png)"
      }
    }
  },
  fontFamily: {},
  plugins: [],
}
