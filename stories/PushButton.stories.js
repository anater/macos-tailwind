export default {
  title: "Controls/Push Buttons",
  tags: ["autodocs"],
  render: ({ primary, disabled }) => {
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
          Disabled
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
          Primary
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
          Secondary
        </button>`
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
