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
          500: "#156669", // verde-água escuro
          800: "#1F2937", // cinza escuro (padrão Tailwind gray-800)
        },
        about: {
          left: "#FCF5EC",
          right: "#EEA595",
          red: "#BA4B2E",
        },
        tech: {
          start: "#8AA9F8",
          end: "#EFC9DD",
        },
        work: {
          50: "#F6F7EC",
          100: "#EAE0D4",
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
