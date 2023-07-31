import PlusIcon from "./assets/LargeListPlusIcon.svg"
import MinusIcon from "./assets/LargeListMinusIcon.svg"
import { map } from "./helpers"

const ICONS = [
  ["Add", PlusIcon],
  ["Remove", MinusIcon],
]

export default {
  title: "Lists/Small List (Rounded)",
  tags: ["autodocs"],
  render: ({ items }) => {
    return `
    <ul class="
      h-[182px]
      w-[170px]
      rounded-[10px]
      overflow-y-scroll
      border
      border-fills-opaque-4
      p-1
      bg-white
      text-base
      text-text-opaque-light-1
      font-light"
    >
    ${map(
      items,
      (item) =>
        /*html*/ `<li class="py-1 px-[6px] outline-none rounded-[5px] focus:bg-default-light focus:text-white" tabindex=0>${item}</li>`
    )}
    </ul>

    <fieldset class="rounded mt-[10px] inline-flex items-stretch text-sm shadow-md">
    ${map(
      ICONS,
      ([label, path], index) => /*html*/ `
        <button class="p-[5px] active:bg-gray-100">
          <img src="${path}" alt="${label}" title="${label}"/>
        </button>
        ${
          index < ICONS.length - 1
            ? `<div class="w-[1px] h-[14px] self-center bg-fills-opaque-4" aria-hidden></div> <!-- separator -->`
            : ``
        }`
    )}
    </fieldset>`
  },
  argTypes: {
    items: [""],
  },
}

export const Default = {
  args: {
    items: Array(10).fill("Label"),
  },
}
