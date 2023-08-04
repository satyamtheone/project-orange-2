const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Comfortaa", ...defaultTheme.fontFamily.sans],
        sans1: [...defaultTheme.fontFamily.sans],
        inter: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen-Sans",
          "Ubuntu",
          "Cantarell",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
      fontSize: {
        "h-1": "2.25rem",
        "h-2": "1.875rem",
        "h-3": "1.25rem",
      },
      fontWeight: {
        bold: "100",
      },
      lineHeight: {
        "h-1": "2.5rem",
        "h-2": "2.25rem",
      },
      color: {
        "g-9": "#111827",
      },
      maxHeight: {
        ...defaultTheme.maxHeight,
        132: "32rem",
        140: "40rem",
      },
    },

    screens: {
      xs: "330px",
      ...defaultTheme.screens,
    },
  },

  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          primary: "#fb923c",
          "primary-focus": "#fb923c",
          info: "#EFF6FF",
          "info-content": "#5077D8",
        },
      },
    ],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    require("@tailwindcss/line-clamp"),
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontSize: theme("fontSize.h-1"),
          lineHeight: theme("lineHeight.h-1"),
          fontWeight: theme("fontWeight.bold"),
          color: theme("color.g-9"),
        },
        h2: {
          fontSize: theme("fontSize.h-2"),
          lineHeight: theme("lineHeight.h-2"),
          fontWeight: theme("fontWeight.bold"),
          color: theme("color.g-9"),
        },
        h3: {
          fontSize: theme("fontSize.h-3"),
          fontWeight: theme("fontWeight.bold"),
          color: theme("color.g-9"),
        },
      });
    }),
  ],
};
