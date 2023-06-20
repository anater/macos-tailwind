import "../site/styles.src.css"

export default {
  title: "Controls/Slider (Ticked)",
  tags: ["autodocs"],
  render: ({ initialValue, disabled }) => {
    const disabledAttr = disabled ? "disabled" : ""
    const steps = Array(5)
      .fill(25)
      .map((increment, index) => increment * index)

    return `
    <div class="relative flex items-center w-[150px] ${
      disabled ? "opacity-50" : ""
    }">
      <input ${disabledAttr}
        type="range"
        list="steps-list"
        value=${initialValue}
        max=100
        step=25
        oninput="
          this.nextElementSibling.value = this.value
          this.parentElement.querySelectorAll('[data-step]').forEach(e => {
            const step = Number(e.dataset.step)
            const highlight = step <= value
            e.classList.toggle('bg-default-light', highlight)
            e.classList.toggle('bg-[#F2F2F2]', !highlight)
          })"
        class="
          appearance-none
          w-full
          bg-transparent
          focus:outline-none
          range-thumb:appearance-none
          range-thumb:bg-white
          range-thumb:h-5
          range-thumb:w-2
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
          progress-bar:bg-[#F2F2F2]
          progress-value:bg-current
          progress-value:rounded-[3px] "
      >
        ${initialValue}%
      </progress>

      <datalist id="steps-list">
        ${steps.map((step) => `<option value=${step}></option>`).join("")}
      </datalist>

      <div aria-hidden class="absolute flex justify-between z-[-1] w-full">
        ${steps
          .map((step) => {
            const bg =
              initialValue >= step ? "bg-default-light" : "bg-[#F2F2F2]"
            return `<div data-step=${step} class="rounded-full w-[2px] h-2 ${bg}"></div>`
          })
          .join("")}
      </div>
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
