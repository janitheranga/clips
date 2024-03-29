module.exports = {
  content: ["./src/**/*.{html,ts}"],
  safelist: ["bg-blue-400", "bg-green-400", "bg-red-400"],
  theme: {
    extend: {},
    variants: {
      extend: {
        opacity: ["disabled"],
        backgroundColor: ["disabled"],
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
