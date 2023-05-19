import "../site/styles.src.css"

export default {
  title: "Controls/Text Field",
  tags: ["autodocs"],
  render: ({ placeholder, disabled }) => {
    const disabledAttr = disabled ? "disabled" : ""
    /**
     * TODO
     * - add "clear" button
     * - style focus ring
     */
    return `
    <div class="relative">
      <input ${disabledAttr}
        type="text"
        placeholder="${placeholder}"
        class="
          appearance-none
          py-0.5
          pl-[7px]
          bg-white
          border-0.5
          border-black/10
          shadow-field
          text-base
          font-light
          placeholder:text-base
          placeholder:text-black/25
          "
      />
    </div>
    `
  },
  argTypes: {
    placeholder: "",
    disabled: false,
  },
}

export const Default = {
  args: {
    placeholder: "Placeholder",
    disabled: false,
  },
}

export const Disabled = {
  args: {
    placeholder: "Placeholder",
    disabled: true,
  },
}
