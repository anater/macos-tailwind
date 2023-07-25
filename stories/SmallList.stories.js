import PlusIcon from "./assets/LargeListPlusIcon.svg"
import MinusIcon from "./assets/LargeListMinusIcon.svg"
import SettingsIcon from "./assets/LargeListSettingsIcon.svg"

const ICONS = [
  ["Add", PlusIcon],
  ["Remove", MinusIcon],
  ["Settings", SettingsIcon],
]

export default {
  title: "Lists/Small List",
  tags: ["autodocs"],
  render: ({ items }) => {
    return `
    <div class="w-[170px] flex flex-col bg-white border border-fills-opaque-4">
      <ul class="h-[182px] overflow-y-scroll bg-white text-base text-text-opaque-light-1 font-light">
      ${items
        .map(
          (text) =>
            /*html*/ `<li class="py-1 px-[6px] outline-none focus:bg-default-light focus:text-white" tabindex=0>${text}</li>`
        )
        .join("\n")}
      </ul>

      <footer class="h-6 border-t border-fills-opaque-3 flex items-stretch">
      ${ICONS.map(
        ([label, path], index) => /*html*/ `
      <button class="px-2"><img src="${path}" alt="${label}" /></button>
      ${
        index < ICONS.length - 1
          ? `<div class="w-[1px] h-4 self-center bg-fills-opaque-4" aria-hidden></div> <!-- separator -->`
          : ``
      }
      `
      ).join("\n")}
      </footer>
    </div>`
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
