const plugin = require("tailwindcss/plugin")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./site/**/*.{html,js}", "./stories/**/*.{html,js}"],
  // default config: https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js#L7
  theme: {
    extend: {
      fontSize: {
        xs: ["0.625rem", { lineHeight: "0.8125rem" }],
        sm: ["0.6875rem", { lineHeight: "0.875rem" }],
        base: ["0.8125rem", { lineHeight: "1.0625rem" }],
        lg: ["0.9375rem", { lineHeight: "1.25rem" }],
        xl: ["1.0625rem", { lineHeight: "1.375rem" }],
        "2xl": ["1.375rem", { lineHeight: "1.625rem" }],
        "3xl": ["1.625rem", { lineHeight: "1.9375rem" }],
      },
      boxShadow: {
        sm: "0px 0.25px 0.25px 0px rgb(0 0 0 / 0.15), 0px 1px 0.75px 0px rgb(0 0 0 / 0.05), 0px 0px 0px 0.5px rgb(0 0 0 / 0.05)",
        md: "0px 0.5px 3px 0px rgb(255 255 255 / 0.12), 0px 1px 2px 0px rgb(255 255 255 / 0.12), 0px 0.5px 1px 0px rgb(255 255 255 / 0.24)",
        menu: "inset 0px 0.5px 1px 0px rgba(255 255 255 / 0.5), 0px 2px 4px 0px rgb(0 0 0 / 0.15), 0px 8px 15px 6px rgb(0 0 0 / 0.18)",
      },
      borderWidth: {
        0.5: "0.5px",
      },
      colors: {
        "transparent-white": "rgb(255 255 255 / 0.13)",
        "transparent-black": "rgb(0 0 0 / 0.13)",
        "very-transparent-black": "rgb(0 0 0 / 0.06)",
        gray: {
          100: "rgb(240, 240, 240)",
        },
        default: {
          light: "#007AFF",
          dark: "#0A84FF",
        },
        vibrant: {
          light: "#0070F5",
          dark: "#148EFF",
        },
        material: {
          menu: "rgb(246 246 246 / 0.6)",
        },
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("pressed", "&[aria-pressed=true]")
    }),
  ],
}
