import "../site/styles.src.css"

function Option(value) {
  return `
  <label class="group flex-1 relative text-center">
    <input class="peer appearance-none absolute inset-0" type="checkbox" value=${value} />
    <div class="
      h-full
      text-sm
      peer-active:bg-gray-100
      peer-checked:text-white
      peer-checked:bg-default-light
      peer-checked:bg-gradient-to-b
      peer-checked:from-transparent-white
      peer-checked:to-transparent"
    >
      ${value}
    </div>
    <div aria-hidden class="
      group-first:hidden
      absolute
      -left-[1px]
      top-[2px] 
      w-[1px]
      h-[12px]
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
  title: "Controls/Segmented Control (Multiple)",
  tags: ["autodocs"],
  render: ({ options }) => {
    const optionElements = options.map(Option).join("")
    return `
    <fieldset class="
      relative
      h-4 
      w-[190px]
      flex
      items-stretch
      overflow-hidden
      rounded
      shadow-md"
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
