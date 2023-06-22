import ArrowButtonIcon from "./assets/ArrowButtonIcon.svg"
import ArrowUpIcon from "./assets/ArrowUpIcon.svg"
import ArrowDownIcon from "./assets/ArrowDownIcon.svg"

const ICONS = {
  Arrows: ArrowButtonIcon,
  "Arrow Up": ArrowUpIcon,
  "Arrow Down": ArrowDownIcon,
}

export default {
  title: "Controls/Icon Button",
  tags: ["autodocs"],
  render: ({ disabled, src }) => {
    const disabledAttr = disabled ? "disabled" : ""
    return `
    <button ${disabledAttr}
      class="
        rounded-[5px]
        w-5
        h-5
        border-0.5
        border-black/5
        shadow-sm
        flex
        items-center
        justify-center
        active:bg-gray-100
        disabled:pointer-events-none
        disabled:opacity-40"
    >
      <img src="${src}" class="object-contain" />
    </button>`
  },
  argTypes: {
    disabled: false,
    src: {
      options: Object.keys(ICONS),
      mapping: ICONS,
      control: { type: "radio" },
    },
  },
}

export const Default = {
  args: {
    disabled: false,
    src: "Arrows",
  },
}

export const Disabled = {
  args: {
    disabled: true,
    src: "Arrows",
  },
}
