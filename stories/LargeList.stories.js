import "../site/styles.src.css"
// const ListItemChevron = `
// <svg width="5.31021118px" height="9.09986115px" viewBox="0 0 5.31021118 9.09986115" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
//   <g id="Components" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
//       <g id="Components---Bars,-Controls,-Menus,-and-Lists" transform="translate(-205.0579, -1690.8681)" fill="currentColor" fill-rule="nonzero">
//           <g id="Menus" transform="translate(0, 1618)">
//               <g id="Menu" transform="translate(20, 62)">
//                   <g id="Font" transform="translate(5, 5)">
//                       <g id="Right-Symbols" transform="translate(180.0579, 5.8681)">
//                           <path d="M5.31021118,4.54888916 C5.30888875,4.32996114 5.22316233,4.13678741 5.05303192,3.96936798 L1.24880219,0.208580017 C1.10974884,0.0695266724 0.940114339,0 0.739898682,0 C0.532674154,0 0.357551575,0.07081604 0.214530945,0.21244812 C0.0715103149,0.3540802 0,0.52642568 0,0.729484558 C0,0.930758158 0.0769322713,1.10918681 0.230796814,1.26477051 L3.56807709,4.54690552 L0.230796814,7.83300781 C0.0769322713,7.98991394 0,8.1690038 0,8.3702774 C0,8.57333628 0.0715103149,8.74569829 0.214530945,8.88736343 C0.357551575,9.02902857 0.532674154,9.09986115 0.739898682,9.09986115 C0.940114339,9.09986115 1.10974884,9.03030141 1.24880219,8.89118195 L5.05303192,5.12841034 C5.14137014,5.03987376 5.2063179,4.94885763 5.24787521,4.85536194 C5.28943253,4.76186625 5.31021118,4.65970866 5.31021118,4.54888916 Z" id="Path" style="mix-blend-mode: normal;"></path>
//                       </g>
//                   </g>
//               </g>
//           </g>
//       </g>
//   </g>
// </svg>`

const map = (items = [], callback = () => "", separator = "") =>
  items.length > 0 ? items.map(callback).join(separator) : ""

const HeaderItem = (header, index) => /*html*/ `
  <th class="
    ${index === 0 ? `font-semibold` : `font-normal text-text-opaque-light-2`}
    py-1
    last:after:hidden
    after:inline-block
    after:float-right
    after:mr-2
    after:w-[1px]
    after:h-4
    after:bg-fills-opaque-4">
    ${header}
  </th>`

const ListItem = ({ labels, subitems }) => /*html*/ `
  <tr class="even:bg-[#f9f9f9]">
    <td aria-hidden></td>
    ${map(labels, (l) => `<td class="py-1">${l}</td>`)}
  </tr>
  ${map(subitems, ListItem)}`

const LargeList = {
  title: "Lists/Large List",
  tags: ["autodocs"],
  render: ({ headers, items }) => {
    return `
    <table class="w-full bg-white text-text-opaque-light-1">
      <thead class="text-left text-sm"><tr class="border-b-[1px] border-b-fills-opaque-5">
        <th aria-hidden></th>
        <!-- FIXME: add carat for sorting -->
        ${map(headers, HeaderItem)}
      </tr></thead>
      <tbody class="text-sm">
        ${map(items, ListItem)}
      </tbody>
    </table>`
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
    items: Array(6).fill({
      labels: Array(3).fill("Label"),
      subitems: [{ labels: Array(3).fill("Sub Label"), subitems: [] }],
    }),
  },
}
