import "../site/styles.src.css"
import ClearButtonIcon from "./assets/ClearButtonIcon.svg"

export default {
  title: "Controls/Text Field",
  tags: ["autodocs"],
  render: ({ placeholder, disabled, rounded }) => {
    const disabledAttr = disabled ? "disabled" : ""
    return `
    <div class="
      ${disabled ? `opacity-50` : ``}
      ${rounded ? `rounded-[5px]` : ``}
      overflow-hidden
      inline-flex
      justify-between
      items-center
      bg-white
      border-0.5
      border-black/10
      shadow-field
      text-base
      font-light
      ring-default-light/50
      focus-within:ring"
    >
      <input ${disabledAttr}
        type="text"
        placeholder="${placeholder}"
        class="
          appearance-none
          outline-none
          flex-grow
          py-0.5
          pl-[7px]
          placeholder:text-base
          placeholder:text-black/25
          "
        oninput="this.nextElementSibling.classList.toggle('opacity-0', this.value.length === 0)"
      />
      <button ${disabledAttr}
        class="
          appearance-none
          outline-none
          flex-shrink-0
          m-1
          opacity-0"
        onclick="
          this.previousElementSibling.value = ''
          this.previousElementSibling.focus()
        "
      >
        <img src="${ClearButtonIcon}" alt="clear text" />
      </button>
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
    rounded: false,
  },
}

export const Rounded = {
  args: {
    placeholder: "Rounded",
    disabled: false,
    rounded: true,
  },
}

export const Disabled = {
  args: {
    placeholder: "Placeholder",
    disabled: true,
    rounded: false,
  },
}
