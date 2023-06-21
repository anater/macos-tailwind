import "../site/styles.src.css"

export default {
  title: "Controls/Color Well",
  tags: ["autodocs"],
  render: ({ color, disabled }) => {
    return `
    <div class=" ${disabled ? `opacity-50` : ``}
      inline-flex
      h-5
      w-7
      items-center
      justify-center
      bg-gradient-to-b
      from-[#E3E3E3]
      to-[#F7F7F7]
      border-[1px]
      border-[#AFAFAF]
    ">
      <input ${disabled ? `disabled` : ``}
        type="color" 
        value="${color}" 
        class="
          h-3 
          w-5
          leading-[0.75rem]
          color-swatch-wrapper:p-0
          color-swatch:rounded-none" 
      />
    </div>`
  },
  argTypes: {
    color: "",
    disabled: false,
  },
}

export const Default = {
  args: {
    color: "#007AFF",
    disabled: false,
  },
}

export const Disabled = {
  args: {
    color: "#007AFF",
    disabled: true,
  },
}
