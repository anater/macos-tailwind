import "../site/styles.src.css"

function Option(value) {
  return `
  <label class="group flex-1 relative text-center">
    <input class="peer appearance-none absolute inset-0" type="radio" value=${value} name="segmented-control" />
    <div class="
      text-sm
      rounded-[5px]
      peer-active:opacity-50
      peer-active:bg-white
      peer-checked:bg-white"
    >
      ${value}
    </div>
    <div aria-hidden class="
      group-last:hidden
      absolute
      right-0
      top-[3px] 
      w-[1px]
      h-[10px]
      bg-fills-opaque-4 
      rounded
      peer-active:top-0
      peer-active:h-full
      peer-active:rounded-none
      peer-checked:top-0
      peer-checked:h-full
      peer-checked:rounded-none"
    ></div>
  </label>`
}

export default {
  title: "Controls/Segmented Control (Single)",
  tags: ["autodocs"],
  render: ({ options }) => {
    const optionElements = options.map(Option).join("")
    return `
    <fieldset class="
      relative
      p-[1px]
      w-[190px]
      flex
      items-stretch
      overflow-hidden
      rounded-[6px]
      shadow-segmented-control
      bg-fills-opaque-5"
    >
     ${optionElements}
    </fieldset>`
  },
  argTypes: {
    options: ["1", "2", "3"],
  },
}

export const Default = {
  args: {
    options: ["One", "Two", "Three"],
  },
}
