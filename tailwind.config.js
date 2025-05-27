const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
        serif: ["Gloock", ...defaultTheme.fontFamily.serif],
      },
      fontSize: {
        "4.5xl": "2.75rem", // 44px
        "5.5xl": "3.5rem", // 56px
      },
      colors: {
        // Cores principais (baseadas nos valores hex que você está usando)
        primary: {
          50: "#F6F7EC", // Seu bege claro
          100: "#EAE0D4", // Seu bege
          500: "#156669", // Seu verde-água escuro
          800: "#1F2937", // Seu cinza escuro (padrão Tailwind gray-800)
        },
        // Extensão da paleta (opcional)
        secondary: {
          400: "#4FD1C5", // Verde-água claro (sugestão)
          600: "#285E61", // Tom intermediário (sugestão)
        },
      },
      // Extras úteis (opcional)
      backgroundImage: {
        "contact-pattern": "url('/fundo-contato.png')",
      },
    },
  },
  plugins: [],
};
