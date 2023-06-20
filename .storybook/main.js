/** @type { import('@storybook/html-webpack5').StorybookConfig } */
const config = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", {
    name: "@storybook/addon-styling",
    options: {
      postCss: true
    }
  }, "@storybook/addon-mdx-gfm"],
  framework: {
    name: "@storybook/html-webpack5",
    options: {}
  },
  docs: {
    autodocs: "tag"
  }
};
export default config;