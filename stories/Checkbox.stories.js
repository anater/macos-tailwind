import "../site/styles.src.css"
import CheckboxPrimaryIcon from "./assets/CheckboxPrimaryIcon.svg"

export default {
  title: "Controls/Checkbox",
  tags: ["autodocs"],
  render: ({ label, disabled, checked }) => {
    const disabledAttr = disabled ? "disabled" : ""
    const checkedAttr = checked ? "checked" : ""
    return `
    <label class="inline-flex items-center text-base ${
      disabled ? `opacity-40` : ``
    }">
      <input ${disabledAttr} ${checkedAttr}
        type="checkbox"
        style="--checkbox-icon-url: url('${CheckboxPrimaryIcon}')"
        class="
          appearance-none
          w-[14px]
          h-[14px]
          rounded
          shadow-checkbox
          bg-white
          border-0.5
          border-black/20
          checked:checkbox-icon
          checked:shadow-md
          checked:shadow-default-light/20 
          checked:bg-default-light
          checked:border-0
          disabled:pointer-events-none"
      />

      <span class="ml-[6px]">${label}</span>
    </label>`
  },
  argTypes: {
    label: "",
    disabled: false,
    checked: true,
  },
}

export const Default = {
  args: {
    label: "Label",
    checked: true,
    disabled: false,
  },
}
