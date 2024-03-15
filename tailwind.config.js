/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        small: "430px",
      },
      backgroundImage: {
        true: "url('/assets/images/background/true.webp')",
        shortTime: "url('/assets/images/background/short_time.webp')",
        seed: "url('/assets/images/background/seed.webp')",
        book: "url('/assets/images/immobilion/book.webp')",
        mountain: "url('/assets/images/immobilion/mountain.webp')",
        blueHome: "url('/assets/images/immobilion/blue_home.webp')",
        whiteHome: "url('/assets/images/immobilion/white_home.webp')",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        sfPro: ["sf-Pro", "sans-serif"],
      },
      fontSize: {
        base: "16px",
        md: "17px",
        lg: "34px",
        xl: "40px",
        "3xl": "87px",
        "9xl": "128px",
        "26xl": "260px",
      },
      colors: {
        darkBlack: "#171717",
        lightBlack: "#171818",
      },
    },
  },
  plugins: [],
};
