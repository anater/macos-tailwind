export default {
  title: "Controls/Switch",
  tags: ["autodocs"],
  render: ({ disabled, checked }) => {
    const attributes = [disabled && "disabled", checked && "checked"]
      .filter(Boolean)
      .join(" ")

    return `
    <div class="relative inline-block leading-none">
      <input ${attributes}
        type="checkbox"
        class="
          appearance-none
          peer
          w-[26px]
          h-[15px]
          transition-colors
          rounded-[11px]
          shadow-switch
          bg-black/5
          checked:bg-default-light
          disabled:opacity-50
          disabled:bg-black/5"
      />
      <div aria-hidden class="
        w-[13px] 
        h-[13px]
        absolute
        pointer-events-none
        top-[1px]
        left-[1px]
        rounded-full 
        shadow-sm
        bg-white
        peer-checked:translate-x-[11px]
        transition-transform"
      ></div>
    </div>
    `
  },
  argTypes: {
    disabled: false,
    checked: true,
  },
}

export const Default = {
  args: {
    checked: false,
    disabled: false,
  },
}

export const Disabled = {
  args: {
    checked: false,
    disabled: true,
  },
}
