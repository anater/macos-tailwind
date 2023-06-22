export default {
  title: "Lists/Menu",
  tags: ["autodocs"],
  render: ({ items }) => {
    console.log({ items })
    return `
    <ul role=menu class="
      relative
      rounded-lg
      w-[200px]
      p-[5px]
      text-base
      text-text-opaque-light-1
      font-medium"
    >
      ${items
        .map(
          (item) => /*html*/ `
            <li
              role=menuitem
              tabindex=0
              onfocus="addArrowKeyListener(this)"
              class="
                rounded-md
                py-1
                px-[6px]
                cursor-default
                outline-none
                focus:bg-material-selection
                focus:text-text-opaque-dark-1
                hover:bg-material-selection
                hover:text-text-opaque-dark-1"
            >${item}</li>`
        )
        .join("")}
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

const items =
  "New, Text, Make Rich Text, Prevent Editing, Wrap on Page, Allow Hypehnation, Make Layout Vertical, List..., Table...".split(
    ", "
  )

export const Default = {
  args: {
    items,
  },
}
