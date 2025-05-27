const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minHeight: {
        screen: "100vh",
      },
      height: {
        screen: "100vh",
      },
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
        serif: ["Gloock", ...defaultTheme.fontFamily.serif],
      },
      fontSize: {
        "4.5xl": "2.75rem", // 44px
        "5.5xl": "3.5rem", // 56px
      },
      colors: {
        primary: {
          50: "#F6F7EC", // bege claro
          100: "#EAE0D4", // bege
          500: "#156669", // verde-água escuro
          800: "#1F2937", // cinza escuro (padrão Tailwind gray-800)
        },
        tech: {
          start: "#8AA9F8",
          end: "#EFC9DD",
        },
        blog: {
          primary: "#FDF3DD",
          blue: "#CCE6FF",
          purple: "#D9B8F4",
          yellow: "#D8A137",
          orange: "#F05B28",
          cream: "#F6E3B9",
        },
      },
    },
  },
  plugins: [],
};
