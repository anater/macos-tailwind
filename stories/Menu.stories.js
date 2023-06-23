export default {
  title: "Lists/Menu",
  tags: ["autodocs"],
  render: ({ items }) => {
    return `
    <ul role=menu class="
      relative
      rounded-lg
      w-[200px]
      p-[5px]
      text-base
      text-text-opaque-light-1
      font-normal"
    >
      ${items.map(MenuItem).join("")}
      <!-- Border -->
      <div class="
        rounded-lg
        absolute 
        inset-0 
        z-[-1]
        border-0.5
        border-very-transparent-black
        shadow-menu-border"
      ></div>
      <!-- Material -->
      <div class="
        rounded-lg
        absolute 
        inset-0 
        z-[-2]
        bg-material-menu
        backdrop-blur-[30px]
        backdrop-saturate-100"
      ></div>
      <!-- Shadows -->
      <div class="
        rounded-lg
        absolute 
        inset-0 
        z-[-3]
        shadow-menu
        bg-white
        mix-blend-multiply"
      ></div>
    </ul>
    <script>
    function addArrowKeyListener(menuitem) {
      menuitem.onblur = () => document.onkeydown = undefined

      document.onkeydown = (keydownEvent) => {
        let sibling;

        switch(keydownEvent.key) {
          case 'ArrowUp': {
            sibling = menuitem.previousElementSibling;
            break;
          }
          case 'ArrowDown': {
            sibling = menuitem.nextElementSibling;
            break;
          }
          default: break;
        }
        
        if (sibling?.matches("[role=menuitem]")) sibling.focus()
      }
    }
  </script>`
  },
  argTypes: {
    items: [""],
  },
}
const MenuItemChevron = `
<svg width="5.31021118px" height="9.09986115px" viewBox="0 0 5.31021118 9.09986115" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <g id="Components" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="Components---Bars,-Controls,-Menus,-and-Lists" transform="translate(-205.0579, -1690.8681)" fill="currentColor" fill-rule="nonzero">
          <g id="Menus" transform="translate(0, 1618)">
              <g id="Menu" transform="translate(20, 62)">
                  <g id="Font" transform="translate(5, 5)">
                      <g id="Right-Symbols" transform="translate(180.0579, 5.8681)">
                          <path d="M5.31021118,4.54888916 C5.30888875,4.32996114 5.22316233,4.13678741 5.05303192,3.96936798 L1.24880219,0.208580017 C1.10974884,0.0695266724 0.940114339,0 0.739898682,0 C0.532674154,0 0.357551575,0.07081604 0.214530945,0.21244812 C0.0715103149,0.3540802 0,0.52642568 0,0.729484558 C0,0.930758158 0.0769322713,1.10918681 0.230796814,1.26477051 L3.56807709,4.54690552 L0.230796814,7.83300781 C0.0769322713,7.98991394 0,8.1690038 0,8.3702774 C0,8.57333628 0.0715103149,8.74569829 0.214530945,8.88736343 C0.357551575,9.02902857 0.532674154,9.09986115 0.739898682,9.09986115 C0.940114339,9.09986115 1.10974884,9.03030141 1.24880219,8.89118195 L5.05303192,5.12841034 C5.14137014,5.03987376 5.2063179,4.94885763 5.24787521,4.85536194 C5.28943253,4.76186625 5.31021118,4.65970866 5.31021118,4.54888916 Z" id="Path" style="mix-blend-mode: normal;"></path>
                      </g>
                  </g>
              </g>
          </g>
      </g>
  </g>
</svg>`

const KeyBoardShortcut = (keys) =>
  `<kbd class="space-x-1 text-[#C6C6C6] text-lg group-hover:text-current group-focus:text-current">
    ${keys
      .split("")
      .map((key) => `<kbd>${key}</kbd>`)
      .join("")}
  </kbd>`

const items = [
  {
    left: "New",
    right: MenuItemChevron,
    submenu: [],
  },
  {
    left: "Text",
    right: MenuItemChevron,
    submenu: [],
  },
  {
    separator: true,
    left: "Make Rich Text",
    right: KeyBoardShortcut("⇧⌘H"),
    submenu: [],
  },
]

export const Default = {
  args: {
    items,
  },
}

function MenuItem({ left, right, separator }) {
  const separatorClasses = separator
    ? "relative mt-2 before:absolute before:-top-1 before:left-2 before:right-2 before:h-[1px] before:bg-[#E8E8E8]"
    : ""
  return `
  <li
    role=menuitem
    tabindex=0
    onfocus="addArrowKeyListener(this)"
    class="${separatorClasses}
      group
      flex
      items-center
      rounded-md
      py-1
      px-[6px]
      cursor-default
      outline-none
      focus:bg-material-selection
      focus:text-text-opaque-dark-1
      hover:bg-material-selection
      hover:text-text-opaque-dark-1"
  >
    ${left ? `<span class="flex-1">${left}</span>` : ``}
    ${right ? `<span>${right}</span>` : ``}
  </li>`
}
