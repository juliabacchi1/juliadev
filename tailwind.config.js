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
      screens: {
        "macbook-air": "1440px",
      },
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
        serif: ["Gloock", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        primary: {
          800: "#1F2937", // cinza escuro
        },
        home: {
          start: "#E2F4F3",
          end: "#C9D6FF",
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
        contact: {
          500: "#156669",
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
