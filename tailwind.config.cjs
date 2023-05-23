/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      // Element related
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
        card: "57AED9",
        slider: "#81CDEF",
        bg1: "#161624",
        bg2: "#110F1A",
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
        ice: "#0F0F14",
        lightning: "#140F14",
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
      backgroundImage: {
        main: "url(~/assets/planet_bg.png)"
      }
    }
  },
  fontFamily: {},
  plugins: [],
}
