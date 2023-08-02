export default {
  title: "Controls/Push Buttons",
  tags: ["autodocs"],
  render: ({ primary, disabled, label }) => {
    return disabled
      ? `
        <button disabled class="
          rounded 
          py-0.5
          px-2
          text-sm
          shadow-md
          active:bg-gray-100
          disabled:pointer-events-none
          disabled:opacity-40"
        >
          ${label}
        </button>
        `
      : primary
      ? `
        <button class="
          rounded
          py-0.5
          px-2
          text-sm
          shadow-md
          shadow-default-light/20
          text-white
          bg-default-light
          bg-gradient-to-b
          from-transparent-white
          to-transparent
          active:from-transparent-black"
        >
          ${label}
        </button>`
      : `
        <button class="
          rounded
          py-0.5
          px-2
          text-sm
          shadow-md
          bg-white
          active:bg-gray-100"
        >
          ${label}
        </button>`
  },
  argTypes: {
    label: "Button",
    primary: false,
    disabled: false,
  },
}

export const Primary = {
  args: {
    label: "Primary",
    primary: true,
    disabled: false,
  },
}

export const Secondary = {
  args: {
    label: "Secondary",
    primary: false,
    disabled: false,
  },
}

export const Disabled = {
  args: {
    label: "Disabled",
    primary: false,
    disabled: true,
  },
}
