import { addArrowKeyListener, expand } from "./scripts/LargeList"

const map = (items = [], callback = () => "", separator = "") =>
  items.length > 0 ? items.map(callback).join(separator) : ""

const HeaderItem = (header, index) => /*html*/ `
  <th class="
    ${index === 0 ? `font-semibold` : `font-normal text-text-opaque-light-2`}
    py-1
    first:pl-5
    last:after:hidden
    after:inline-block
    after:float-right
    after:mr-2
    after:w-[1px]
    after:h-4
    after:bg-fills-opaque-4">
    ${header}
  </th>`

const ListItemChevron = `
  <svg width="4.00458527px" height="6.54709625px" viewBox="0 0 4.00458527 6.54709625" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="rotate-90">
      <title>Path</title>
      <g id="Components" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" fill-opacity="0.425">
          <g id="Components---Bars,-Controls,-Menus,-and-Lists" transform="translate(-28.421, -2215.5553)" fill="currentColor" fill-rule="nonzero">
              <g id="Lists" transform="translate(20, 2147)">
                  <g id="Standard-List" transform="translate(0, 33)">
                      <g id="Column-A" transform="translate(0, 27)">
                          <g id="Content-Type" transform="translate(8.421, 3)">
                              <g id="Chevron" transform="translate(0, 5.5553)">
                                  <path d="M4.00458527,3.27186584 C4.00234222,3.04646301 3.91069794,2.84548187 3.7296524,2.66892242 L1.21261597,0.199813843 C1.07940674,0.0666046143 0.91582489,0 0.721870422,0 C0.524345398,0 0.354652405,0.0697975159 0.212791443,0.209392548 C0.070930481,0.348987579 0,0.516105652 0,0.710746765 C0,0.910743713 0.0789642334,1.08700562 0.2368927,1.23953247 L2.3396759,3.26850128 L0.2368927,5.30419922 C0.0789642334,5.45896912 0,5.63635254 0,5.83634949 C0,6.0309906 0.070930481,6.19810867 0.212791443,6.3377037 C0.354652405,6.47729874 0.524345398,6.54709625 0.721870422,6.54709625 C0.91582489,6.54709625 1.07940674,6.48049164 1.21261597,6.34728241 L3.7296524,3.87480927 C3.82770538,3.78055573 3.89804077,3.68523788 3.94065857,3.58885574 C3.98327637,3.4924736 4.00458527,3.3868103 4.00458527,3.27186584 Z" id="Path"></path>
                              </g>
                          </g>
                      </g>
                  </g>
              </g>
          </g>
      </g>
  </svg>`

const Chevron = `
<span
  class="pl-[var(--level)] mx-2"
  onclick="
    const item = this.closest('[role=treeitem]');
    const isExpanded = item.getAttribute('aria-expanded') === 'true'
    expand(item, !isExpanded)"
>
  ${ListItemChevron}
</span>`

const ListItem = ({ labels, subitems }, level = 0) => /*html*/ `
<tr
  role="treeitem"
  tabindex=0 
  aria-expanded="true"
  data-level="${level}"
  onfocus="addArrowKeyListener(this)"
  style="--level: calc(25px * ${level})"
  class="
    group
    outline-none
    aria-hidden:hidden
    even:bg-[#f9f9f9]
    focus:bg-default-light
    focus:text-white"
>
  ${map(
    labels,
    (label, index) => /*html*/ `
      <td class="p-0">
        <div class="flex items-center">
          ${
            index === 0
              ? subitems.length
                ? Chevron
                : /*html*/ `<span class="pl-[var(--level)] mx-2"></span>`
              : ``
          }
          <span class="
            flex-1
            py-1
            border-b-[1px]
            border-b-fills-opaque-5"
          >
            ${label}
          </span>
        </div>
      </td>`
  )}
</tr>
${map(subitems, (item) => ListItem(item, level + 1))}`

const LargeList = {
  title: "Lists/Large List",
  tags: ["autodocs"],
  render: ({ headers, items }) => {
    return `
    <table class="w-full bg-white text-text-opaque-light-1">
      <thead class="text-left text-sm"><tr class="border-b-[1px] border-b-fills-opaque-5">
        <!-- FIXME: add carat for sorting -->
        ${map(headers, HeaderItem)}
      </tr></thead>
      <tbody class="text-sm" role="tree">
        ${map(items, (item) => ListItem(item))}
      </tbody>
    </table>
    <script>
    ${addArrowKeyListener.toString()}
    ${expand.toString()}
    </script>`
  },
  argTypes: {
    headers: [""],
    items: [""],
  },
}

export default LargeList

export const Default = {
  args: {
    headers: Array(3).fill("Header"),
    items: Array(3).fill({
      labels: Array(3).fill("Label"),
      subitems: Array(3).fill({
        labels: Array(3).fill("Sub Label"),
        subitems: [{ labels: Array(3).fill("Sub Sub Label"), subitems: [] }],
      }),
    }),
  },
}
