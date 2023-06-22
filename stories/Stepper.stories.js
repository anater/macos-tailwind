import ArrowUpIcon from "./assets/ArrowUpIcon.svg"
import ArrowDownIcon from "./assets/ArrowDownIcon.svg"

export default {
  title: "Controls/Stepper",
  tags: ["autodocs"],
  render: ({ disabled }) => {
    const disabledAttr = disabled ? "disabled" : ""
    return `
    <fieldset ${disabledAttr} 
      class="
        flex
        flex-col
        items-center
        justify-items-stretch
        rounded-[5px]
        w-3
        h-5
        border-0.5
        border-black/5
        bg-white
        shadow-sm
        text-center
        overflow-hidden
        disabled:pointer-events-none
        disabled:opacity-40
        divide-y"
    >
      <button class="w-full flex-1 bg-gradient-to-b from-white to-black/5 active:bg-gray-300">
        <img src="${ArrowUpIcon}" class="block mx-auto" alt="Step Up" />
      </button>
      <button class="w-full flex-1 bg-gradient-to-b from-black/5 to-white active:bg-gray-300">
        <img src="${ArrowDownIcon}" class="block mx-auto" alt="Step Down" />
      </button>
    </fieldset>`
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
