const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      // This should exclusively be used for star icons
      stars: {
        5: "#FDBA3E",
        4: "#C03EFD",
        3: "#3E7FFD",
      },

      // Elements

      // Use 300-500 for main element colors
      // Use 800-950 for background element accents
      // Haven't tested every single color - ping neia if anything looks off
      // Generated with https://www.tints.dev/
      imaginary: {
        // Root 900, sat +8
        50: "#FFF7E5",
        100: "#FFEECC",
        200: "#FFDD99",
        300: "#FCCB69",
        400: "#E8B34A",
        500: "#CE9A31",
        600: "#977635",
        700: "#675532",
        800: "#3F3727",
        900: "#1C1B19",
        950: "#100E0A"
      },
      quantum: {
        // Root 900, sat +4
        // This is the one I'm least happy with.
        50: "#EBE5FF",
        100: "#D7CDFE",
        200: "#B1A1F7",
        300: "#8D7AEB",
        400: "#6A56DC",
        500: "#4A36C9",
        600: "#3F3399",
        700: "#322B6E",
        800: "#231F47",
        900: "#131221",
        950: "#090812"
      },
      wind: {
        // Root 900, sat +4
        50: "#E6FFEA",
        100: "#CFFCD5",
        200: "#A5F3AE",
        300: "#7BE586",
        400: "#5AD364",
        500: "#3EBB47",
        600: "#398E3D",
        700: "#2E612F",
        800: "#203C20",
        900: "#101910",
        950: "#070D07"
      },
      lightning: {
        // Root 900, hue -2, sat +4
        50: "#F2E6FE",
        100: "#E7D0FB",
        200: "#D1A7F1",
        300: "#BC82E3",
        400: "#A862D0",
        500: "#9549BB",
        600: "#794091",
        700: "#5B3668",
        800: "#3D2744",
        900: "#1F1721",
        950: "#110B13"
      },
      ice: {
        // Root 900, hue -4, sat -4
        50: "#E5FEFF",
        100: "#CCF9FF",
        200: "#99ECFF",
        300: "#6ED5F7",
        400: "#46B7EC",
        500: "#2295DD",
        600: "#236DA9",
        700: "#1F4B7A",
        800: "#172E4F",
        900: "#0E1625",
        950: "#060C14"
      },
      fire: {
        // Root 900, sat +8
        50: "#FFE5E5",
        100: "#FFCCCC",
        200: "#FF9999",
        300: "#FE6767",
        400: "#EB4747",
        500: "#D12E2E",
        600: "#993333",
        700: "#693030",
        800: "#3D2424",
        900: "#1A1616",
        950: "#100909"
      },
      physical: {
        // Root 500
        50: "#F8F7F7",
        100: "#EEEDED",
        200: "#DFDDDD",
        300: "#CECCCC",
        400: "#B2AEAE",
        500: "#948F8F",
        600: "#787373",
        700: "#585555",
        800: "#3C3939",
        900: "#1D1B1B",
        950: "#100F0F"
      },

      // Site related

      // Try to replace random stray colors with this
      // links can use theme-200
      theme: {
        50: "#F8F0FE",
        100: "#F0E0FF",
        200: "#D5ACFB",
        300: "#BC7FF5",
        400: "#A356EB",
        500: "#882CDD",
        600: "#6D27B0",
        700: "#50247B",
        800: "#361D4E",
        900: "#1A1122",
        950: "#0D0A10"
      },

      // primary background color; all content lays on top of this
      bg: {
        DEFAULT: "#141214",
        dark: "#18151F",
      },

      neutral: colors.neutral
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
  plugins: [
    require("tailwindcss-radix")(),
  ],
}
