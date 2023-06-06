import "../site/styles.src.css"

function Option(value) {
  return `
  <label class="flex-1 relative">
    <input class="peer appearance-none absolute inset-0" type="checkbox" value=${value} />
    <div class="
      py-0.5
      px-2
      text-sm
      peer-active:bg-gray-100
      peer-checked:text-white
      peer-checked:bg-default-light
      peer-checked:bg-gradient-to-b
      peer-checked:from-transparent-white
      peer-checked:to-transparent"
    >
      ${value}
    </div>
  </label>`
}

export default {
  title: "Controls/Segmented Control (Multiple)",
  tags: ["autodocs"],
  render: ({ options }) => {
    return `<fieldset class="h-4 w-[190px] flex items-stretch overflow-hidden rounded shadow-md">${options
      .map(Option)
      .join("")}</fieldset>`
  },
  argTypes: {
    options: ["1", "2", "3"],
  },
}

export const Default = {
  args: {
    options: ["1", "2"],
  },
}
