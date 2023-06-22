import HelpButtonIcon from "./assets/HelpButtonIcon.svg"

export default {
  title: "Controls/Help Button",
  tags: ["autodocs"],
  render: ({ disabled }) => {
    const disabledAttr = disabled ? "disabled" : ""
    return `
    <button ${disabledAttr}
      class="
        rounded-full
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
      <img src="${HelpButtonIcon}" class="object-contain" />
    </button>`
  },
  argTypes: {
    disabled: false,
  },
}

export const Default = {
  args: {
    disabled: false,
  },
}

export const Disabled = {
  args: {
    disabled: true,
  },
}
