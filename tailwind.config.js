const plugin = require("tailwindcss/plugin")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./site/**/*.{html,js}", "./stories/**/*.{html,js}"],
  mode: "jit",
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
        sm: "0px 0.25px 0.25px 0px rgb(0 0 0 / 0.15), 0px 1px 0.75px 0px rgb(0 0 0 / 0.05)",
        md: "0px 0.5px 3px 0px rgb(0 0 0 / 0.12), 0px 1px 2px 0px rgb(0 0 0 / 0.12), 0px 0.5px 1px 0px rgb(0 0 0 / 0.24)",
        tooltip:
          "0px 36px 100px 0px rgb(0 0 0 / 0.25), 0px 0px 3px 0px rgb(0 0 0 / 0.55)",
        menu: "0px 2px 4px 0px rgb(0 0 0 / 0.15), 0px 8px 15px 6px rgb(0 0 0 / 0.18)",
        "menu-border": "inset 0px 0.5px 1px 0px rbg(255 255 255 / 0.5)",
        checkbox:
          "inset 0px 1px 2px 0px rgb(0 0 0 / 0.1), inset 0px 0px 2px 0px rgb(0 0 0 / 0.1)",
        switch:
          "inset 0px 0px 1px 0px rgb(0 0 0 / 0.05), inset 0px 0px 2px 0.25px rgb(0 0 0 / 0.08)",
        field:
          "0px 0px 0px 0.5px rgba(0, 0, 0, 0.05), 0px 0.5px 2.5px 0px rgba(0, 0, 0, 0.3)",
        "segmented-control":
          "inset 0px 0px 2px 0px rgb(0 0 0 / 0.05), inset 0px 0px 4px 0px rgb(0 0 0 / 0.05), inset 0px 0px 2px 0px rgb(0 0 0 / 0.05)",
        progress:
          "inset 0px 1px 2px 0px rgba(0, 0, 0, 0.02), inset 0px 0px 2px 0px rgba(0, 0, 0, 0.03), inset 0px 0px 2px 0px rgba(0, 0, 0, 0.04)",
        "image-well":
          "inset 0px 0.5px 1.5px 0px rgb(0 0 0 / 0.14), 0px 0px 0px 1px rgb(0 0 0 / 0.06)",
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
          menu: "rgb(246 246 246 / 0.72)",
          tooltip: "rgb(246 246 246 / .6)",
          selection: "rgb(10 130 255 / 0.75)",
        },
        fills: {
          opaque: {
            1: "rgb(0 0 0 / 0.85)",
            2: "rgb(0 0 0 / 0.50)",
            3: "rgb(0 0 0 / 0.25)",
            4: "rgb(0 0 0 / 0.10)",
            5: "rgb(0 0 0 / 0.05)",
          },
        },
        text: {
          opaque: {
            dark: {
              1: "rgb(255 255 255 / 0.85)",
              2: "rgb(255 255 255 / 0.55)",
              3: "rgb(255 255 255 / 0.25)",
            },
            light: {
              1: "rgb(0 0 0 / 0.85)",
              2: "rgb(0 0 0 / 0.50)",
              3: "rgb(0 0 0 / 0.25)",
            },
          },
        },
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("pressed", "&[aria-pressed=true]")
      addVariant("expanded", "&[aria-expanded=true]")
      addVariant("collapsed", "&[aria-expanded=false]")
      addVariant("aria-hidden", "&[aria-hidden]")
      addVariant("aria-sort", "&[aria-sort]")
      addVariant("range-thumb", "&::-webkit-slider-thumb")
      addVariant("progress-bar", "&::-webkit-progress-bar")
      addVariant("progress-value", "&::-webkit-progress-value")
      addVariant("color-swatch-wrapper", "&::-webkit-color-swatch-wrapper")
      addVariant("color-swatch", "&::-webkit-color-swatch")
      addVariant("file-selector-button", "&::file-selector-button")
    }),
  ],
}
