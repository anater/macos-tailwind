import "../site/styles.src.css"

export default {
  title: "Controls/Tooltip",
  tags: ["autodocs"],
  render: ({ text }) => {
    return `
    <div role="tooltip" class="
      max-w-max
      py-0.5
      px-[6px]
      text-sm
      bg-material-tooltip
      shadow-tooltip"
    >
      ${text}
    </div>`
  },
  argTypes: {
    text: "",
  },
}

export const Default = {
  args: {
    text: "This is a tooltip.",
  },
}
