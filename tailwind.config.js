/** @type {import('tailwindcss').Config} */
tailwind.config = {
  content: ["index.html"],
  theme: {
    fontFamily: {
      head: ["Poppins"],
      body: ["Nunito Sans"],
    },
    fontSize: {
      c: ["14px"],
      b3: ["16px"],
      b2: ["18px"],
      b1: ["20px"],
      h3: ["24px"],
      h2: ["28px"],
      h1: ["64px"],
    },
    screens: {
      desktop: [
        {
          min: "1025px",
        },
      ],
      tablet: [
        {
          min: "481px",
          max: "1024px",
        },
      ],
      mobile: [
        {
          min: "0px",
          max: "480px",
        },
      ],
    },
    extend: {},
  },
  plugins: [],
};
