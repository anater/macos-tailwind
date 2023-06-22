import PullDownButtonPrimaryIcon from "./assets/PullDownButtonPrimaryIcon.svg"
import PullDownButtonSecondaryIcon from "./assets/PullDownButtonSecondaryIcon.svg"

export default {
  title: "Controls/Pull Down Buttons",
  tags: ["autodocs"],
  render: ({ primary, disabled, expanded }) => {
    const icon = primary
      ? PullDownButtonPrimaryIcon
      : PullDownButtonSecondaryIcon
    const disabledAttr = disabled ? "disabled" : ""
    const hiddenAttr = !expanded || disabled ? "hidden" : ""

    return `<button ${disabledAttr}
      id=menubutton
      aria-haspopup=true
      aria-controls=menu
      aria-expanded=${!expanded}
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
        shadow-md
        bg-white
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
    
    <ul ${hiddenAttr}
      id=menu
      role=menu
      aria-labelledby=menubutton
      class="
        rounded-lg
        w-max
        mt-2
        p-[5px]
        border-0.5
        border-very-transparent-black
        bg-material-menu
        backdrop-blur-xl
        shadow-menu
        text-base"
    >
      ${["One", "Two", "Three"]
        .map(
          (item) => /*html*/ `
            <li
              role=menuitem
              tabIndex=0
              class="
                rounded-md
                py-1
                px-[6px]
                cursor-default
                focus:bg-default-light
                focus:text-white
                hover:bg-default-light
                hover:text-white"
                >
              Item ${item}
            </li>`
        )
        .join("")}
    </ul>`
  },
  argTypes: {
    primary: false,
    disabled: false,
    expanded: false,
  },
}

export const Primary = {
  args: {
    primary: true,
    disabled: false,
    expanded: false,
  },
}

export const Secondary = {
  args: {
    primary: false,
    disabled: false,
    expanded: false,
  },
}

export const Disabled = {
  args: {
    primary: false,
    disabled: true,
    expanded: false,
  },
}
