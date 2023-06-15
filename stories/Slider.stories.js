import "../site/styles.src.css"

export default {
  title: "Controls/Slider",
  tags: ["autodocs"],
  render: ({ initialValue, disabled }) => {
    const disabledAttr = disabled ? "disabled" : ""
    return `
    <div class="relative flex items-center w-[150px] ${
      disabled ? "opacity-50" : ""
    }">
      <input ${disabledAttr}
        type="range"
        value=${initialValue}
        max=100
        oninput="this.nextElementSibling.value = this.value"
        class="
          appearance-none
          w-full
          bg-transparent
          focus:outline-none
          range-thumb:appearance-none
          range-thumb:bg-white
          range-thumb:h-5
          range-thumb:w-5
          range-thumb:rounded-full
          range-thumb:shadow-sm
          range-thumb:border-solid
          range-thumb:border-0.5
          range-thumb:border-fills-opaque-5" 
      />
      <progress
        aria-hidden
        value=${initialValue}
        max=100
        class="
          absolute
          inset-x-0
          z-[-1]
          w-full
          h-[4px]
          overflow-hidden
          rounded-full
          text-default-light
          progress-bar:shadow-progress
          progress-bar:bg-fills-opaque-5
          progress-value:bg-current
          progress-value:rounded-[3px] "
      >
        ${initialValue}%
      </progress>
    </div>
    `
  },
  argTypes: { initialValue: 0, disabled: false },
}

export const Default = {
  args: { initialValue: 50, disabled: false },
}

export const Disabled = {
  args: { initialValue: 50, disabled: true },
}
