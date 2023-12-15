/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    fontFamily: {
      head: ["Poppins"],
      body: ["Nunito Sans"],
    },
    fontSize: {
      cp: ["14px"],
      bd3: ["16px"],
      bd2: ["18px"],
      bd1: ["20px"],
      hd3: ["24px"],
      hd2: ["28px"],
      hd1: ["45px"],
    },
    screens: {
      sm: "576px",
      md: "960px",
      lg: "1440px",
    },
    extend: {},
  },
  plugins: [],
};
