/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        Nikola: "url('/src/assets/images/prehab Nikola.jpg')",
        Nikola1: "url('/src/assets/images/prehab Nikola1.jpg')",
        Nikolaxsm: "url('/src/assets/images/prehab Nikolaxsm.jpg')",
        Nikolasm: "url('/src/assets/images/prehab Nikolasm.jpg')",
        Nikolamd: "url('/src/assets/images/prehab Nikolamd.jpg')",
        Nikolalg: "url('/src/assets/images/prehab Nikolalg.jpg')",
        Nikolaxl: "url('/src/assets/images/prehab Nikolaxl.jpg')",
        cucanj: "url('/src/assets/images/cucanj_krug.png')",
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
      },
      backgroundPosition: {
        left_top: "left top -10rem",
        left_bottom: "left bottom",
      },
      colors: {
        red_preh: "#d23366",
        red_preh_t: "#d233655d",
      },
      borderRadius: {
        custom_radius: "50% 50% 50% 50% / 63% 63% 37% 37% ",
      },
      aspectRatio: {
        "9/16": "9 / 16",
      },
      screens: {
        xsm: "450px",
        md2: "800px",
        xl2: "1550px",
        xxl: "1600px",
      },
    },
  },
  plugins: [],
};
