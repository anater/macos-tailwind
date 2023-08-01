export default {
  title: "Controls/Switch",
  tags: ["autodocs"],
  render: ({ disabled, checked, small }) => {
    const attributes = [disabled && "disabled", checked && "checked"]
      .filter(Boolean)
      .join(" ")
    const inputSize = small ? "w-[27px] h-[15px]" : "w-[40px] h-[22px]"
    const knobSize = small ? "w-[13px] h-[13px]" : "w-5 h-5"

    return `
    <div class="relative ${inputSize}">
      <input ${attributes}
        type="checkbox"
        class="
          appearance-none
          peer
          w-full
          h-full
          transition-colors
          rounded-[11px]
          shadow-switch
          bg-black/5
          checked:bg-default-light
          disabled:opacity-50
          disabled:bg-black/5"
      />
      <div aria-hidden class="
        ${knobSize}
        absolute
        pointer-events-none
        top-[1px]
        left-[1px]
        rounded-full 
        shadow-sm
        bg-white
        peer-checked:translate-x-[12px]
        transition-transform"
      ></div>
    </div>
    `
  },
  argTypes: {
    disabled: false,
    checked: true,
    small: false,
  },
}

export const Default = {
  args: {
    checked: false,
    disabled: false,
    small: false,
  },
}

export const Disabled = {
  args: {
    checked: false,
    disabled: true,
    small: false,
  },
}

export const Small = {
  args: {
    checked: true,
    disabled: false,
    small: true,
  },
}
