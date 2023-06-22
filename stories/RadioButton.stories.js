import RadioPrimaryIcon from "./assets/RadioPrimaryIcon.svg"
import IndeterminatePrimaryIcon from "./assets/IndeterminatePrimaryIcon.svg"

const cssUrl = (string) => `url(\'${string}\')`

export default {
  title: "Controls/Radio Button",
  tags: ["autodocs"],
  render: ({ label, disabled, checked, indeterminate, name, value }) => {
    const attributes = [
      disabled && "disabled",
      checked && "checked",
      indeterminate && "data-indeterminate",
    ]
      .filter(Boolean)
      .join(" ")

    const checkedIcon = cssUrl(RadioPrimaryIcon)
    const initialIcon = indeterminate
      ? cssUrl(IndeterminatePrimaryIcon)
      : checkedIcon

    return `
    <label class="inline-flex items-center text-base ${
      disabled ? `opacity-40` : ``
    }">
      <input ${attributes}
        type="radio"
        name="${name}"
        value="${value}"
        class="
          appearance-none
          w-[14px]
          h-[14px]
          rounded-full
          shadow-checkbox
          bg-white
          border-0.5
          border-black/20
          disabled:pointer-events-none
          checked:checkbox-icon
          checked:shadow-md
          checked:shadow-default-light/20 
          checked:bg-default-light
          checked:border-0
          indeterminate:checkbox-icon
          indeterminate:shadow-md
          indeterminate:shadow-default-light/20 
          indeterminate:bg-default-light
          indeterminate:border-0"
        style="--checkbox-icon-url: ${initialIcon}"
        onchange="
          const attr = 'data-indeterminate';
          if (this.hasAttribute(attr)) {
            this.removeAttribute(attr);
            this.style.setProperty('--checkbox-icon-url', \`${checkedIcon}\`);
          }"
      />
      <span class="ml-[6px]">${label}</span>
    </label>

    <script>
      document.querySelectorAll('[data-indeterminate]').forEach(
        e => e.indeterminate = true
      );
    </script>
    `
  },
  argTypes: {
    label: "",
    disabled: false,
    checked: true,
    indeterminate: false,
    name: "string",
    value: "string",
  },
}

export const Default = {
  args: {
    label: "Label",
    checked: false,
    disabled: false,
    indeterminate: false,
    name: "default",
    value: "test",
  },
}

export const Indeterminate = {
  args: {
    label: "Label",
    checked: false,
    disabled: false,
    indeterminate: true,
    name: "indeterminate",
    value: "test",
  },
}

export const Disabled = {
  args: {
    label: "Label",
    checked: false,
    disabled: true,
    indeterminate: false,
    name: "disabled",
    value: "test",
  },
}
