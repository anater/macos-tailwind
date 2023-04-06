import "../site/styles.src.css"
import PullDownButtonPrimaryIcon from "./assets/PullDownButtonPrimaryIcon.svg"
import PullDownButtonSecondaryIcon from "./assets/PullDownButtonSecondaryIcon.svg"

export default {
  title: "Controls/Pull Down Buttons",
  tags: ["autodocs"],
  render: ({ primary, disabled }) => {
    const icon = primary
      ? PullDownButtonPrimaryIcon
      : PullDownButtonSecondaryIcon
    const disabledAttr = disabled ? "disabled" : ""

    return `<button ${disabledAttr}
      id=menubutton
      aria-haspopup=true
      aria-controls=menu
      aria-expanded=true
      style="--button-icon-url: url('${icon}')"
      class="
        button-icon
        inline-block
        rounded
        leading-4
        pl-2
        pr-6
        py-0.5
        text-sm
        shadow-sm
        active:bg-gray-100
        disabled:pointer-events-none
        disabled:opacity-40"
      onclick="
        const e = this.nextElementSibling;
        e.hidden = !e.hidden;
        this.setAttribute('aria-expanded', !e.hidden);
      "
    >
      Menu
    </button>
    
    <ul 
      id=menu
      role=menu
      aria-labelledby=menubutton
      class="
        rounded-lg
        w-max
        mt-2
        p-2
        border-0.5
        border-transparent-black
        bg-material-menu
        backdrop-blur-xl
        shadow-menu
        text-base
        space-y-2"
    >
      ${["One", "Two", "Three"]
        .map(
          (item) => /*html*/ `
            <li role=menuitem class="rounded py-1 px-2 cursor-default hover:bg-default-light hover:text-white">
              Item ${item}
            </li>`
        )
        .join("")}
    </ul>`
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
