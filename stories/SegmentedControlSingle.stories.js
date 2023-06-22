function Option(value, id) {
  return `
  <input id="${id}-${value}" type="radio" value="${value}" name="segmented-control" class="
    peer
    appearance-none
    relative
    h-[18px]
    flex-1
    rounded
    active:opacity-50
    active:bg-white
    checked:bg-white
    checked:shadow-sm
    checked:before:hidden
    first:before:hidden
    before:absolute
    before:z-[-1]
    before:left-[-1px]
    before:top-[5px]
    before:w-[1px]
    before:h-[10px]
    before:bg-fills-opaque-4
    before:rounded
    "
  />`
}

function Label(value, id) {
  return `<label for="${id}-${value}" class="flex-1 text-center text-sm">${value}</label>`
}

export default {
  title: "Controls/Segmented Control (Single)",
  tags: ["autodocs"],
  render: ({ options }) => {
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
     ${options.map(Option).join("")}
     <div class="absolute inset-0 w-full h-full flex items-center">
      ${options.map(Label).join("")}
     </div>
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
