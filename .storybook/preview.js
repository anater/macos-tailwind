import "../site/styles.src.css"
import { format } from "prettier"
import htmlParser from "prettier/parser-html"

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) =>
      format(Story(), {
        semi: false,
        parser: "html",
        plugins: [htmlParser],
      }),
  ],
}

export default preview
