import "../site/styles.src.css"
import CheckboxPrimaryIcon from "./assets/CheckboxPrimaryIcon.svg"
import CheckboxIndeterminatePrimaryIcon from "./assets/CheckboxIndeterminatePrimaryIcon.svg"

const cssUrl = (string) => `url(\'${string}\')`

export default {
  title: "Controls/Checkbox",
  tags: ["autodocs"],
  render: ({ label, disabled, checked, indeterminate }) => {
    const attributes = [
      disabled && "disabled",
      checked && "checked",
      indeterminate && "data-indeterminate",
    ]
      .filter(Boolean)
      .join(" ")

    const checkedIcon = cssUrl(CheckboxPrimaryIcon)
    const initialIcon = indeterminate
      ? cssUrl(CheckboxIndeterminatePrimaryIcon)
      : checkedIcon

    return `
    <label class="inline-flex items-center text-base ${
      disabled ? `opacity-40` : ``
    }">
      <input ${attributes}
        type="checkbox"
        class="
          appearance-none
          w-[14px]
          h-[14px]
          rounded
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
  },
}

export const Default = {
  args: {
    label: "Label",
    checked: true,
    disabled: false,
    indeterminate: false,
  },
}

export const Indeterminate = {
  args: {
    label: "Label",
    checked: false,
    disabled: false,
    indeterminate: true,
  },
}

export const Disabled = {
  args: {
    label: "Label",
    checked: true,
    disabled: true,
    indeterminate: false,
  },
}
