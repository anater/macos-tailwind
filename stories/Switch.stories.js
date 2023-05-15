import "../site/styles.src.css"

export default {
  title: "Controls/Switch",
  tags: ["autodocs"],
  render: ({ disabled, checked }) => {
    const attributes = [disabled && "disabled", checked && "checked"]
      .filter(Boolean)
      .join(" ")

    return `
    <div class="relative">
      <input ${attributes}
        type="checkbox"
        class="
          appearance-none
          peer
          transition-colors
          w-[40px]
          h-[22px]
          rounded-[11px]
          shadow-switch
          bg-black/5
          checked:bg-default-light
          disabled:opacity-50
          disabled:bg-black/5"
      />
      <div aria-hidden class="
        absolute
        pointer-events-none
        top-[1px]
        left-[1px]
        h-5
        w-5
        rounded-full 
        shadow-sm
        bg-white
        peer-checked:translate-x-[18px]
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
