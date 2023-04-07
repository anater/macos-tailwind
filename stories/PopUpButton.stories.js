import "../site/styles.src.css"
import PopUpButtonPrimaryIcon from "./assets/PopUpButtonPrimaryIcon.svg"
import PopUpButtonSecondaryIcon from "./assets/PopUpButtonSecondaryIcon.svg"

export default {
  title: "Controls/Pop-Up Buttons",
  tags: ["autodocs"],
  render: ({ primary, disabled }) => {
    const icon = primary ? PopUpButtonPrimaryIcon : PopUpButtonSecondaryIcon
    const disabledAttr = disabled ? "disabled" : ""

    return `<select ${disabledAttr}
      style="--button-icon-url: url('${icon}')"
      class="
        button-icon
        inline-block
        appearance-none
        rounded
        leading-4
        pl-2
        pr-6
        py-0.5
        text-sm
        shadow-md
        active:bg-gray-100
        disabled:pointer-events-none
        disabled:opacity-40"
    >
      <option disabled selected>Label</option>
      <option value=1>One</option>
      <option value=2>Two</option>
      <option value=3>Three</option>
    </select>`
  },
  argTypes: {
    primary: false,
    disabled: false,
  },
}

export const Primary = {
  args: {
    primary: true,
    disabled: false,
  },
}

export const Secondary = {
  args: {
    primary: false,
    disabled: false,
  },
}

export const Disabled = {
  args: {
    primary: false,
    disabled: true,
  },
}
