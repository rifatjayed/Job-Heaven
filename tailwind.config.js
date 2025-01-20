/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Poppins ফন্ট যুক্ত করা
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient( rgba(197, 153, 229, 0.6) 0%, rgba(197, 153, 229, 0) 51%, rgba(226, 204, 242, 0.8) 100%)",
      },
    },
  },
  plugins: [require("daisyui")],
};
