import "../site/styles.src.css"

export default {
  title: "Controls/Toggle Buttons",
  tags: ["autodocs"],
  render: ({ primary, disabled, pressed }) => {
    const togglePress = `this.setAttribute('aria-pressed', this.getAttribute('aria-pressed') !== 'true')`
    return disabled
      ? `
        <button disabled class="
          rounded
          py-0.5
          px-2
          text-sm
          shadow-sm
          active:bg-gray-100
          disabled:pointer-events-none
          disabled:opacity-40"
        >
          Disabled
        </button>`
      : primary
      ? `
        <button
          onclick="${togglePress}"
          aria-pressed="${pressed}"
          class="
            rounded
            py-0.5
            px-2
            text-sm
            shadow-sm
            active:bg-gray-100
            pressed:bg-gradient-to-b
            pressed:bg-default-light
            pressed:from-transparent-white
            pressed:to-transparent
            pressed:active:from-transparent-black
            pressed:text-white
            pressed:shadow-md
          "
        >
          Primary
        </button>`
      : `
        <button
          onclick="${togglePress}"
          aria-pressed="${pressed}"
          class="
            rounded
            py-[1.5px]
            px-2
            text-sm
            shadow-sm
            active:bg-gray-100
            pressed:text-default-light"
        >
          Secondary
        </button>`
  },
  argTypes: {
    primary: false,
    disabled: false,
    pressed: true,
  },
}

export const Primary = {
  args: {
    primary: true,
    disabled: false,
    pressed: true,
  },
}

export const Secondary = {
  args: {
    primary: false,
    disabled: false,
    pressed: true,
  },
}

export const Disabled = {
  args: {
    primary: false,
    disabled: true,
    pressed: true,
  },
}
