import SwitchStories from "./Switch.stories"
import SliderStories from "./Slider.stories"
import SliderTickedStories from "./SliderTicked.stories"
import PushButtonStories from "./PushButton.stories"
import { map } from "./helpers"

export default {
  title: "Lists/Form",
  tags: ["autodocs"],
  render: ({}) => {
    return `
    <form class="p-4 w-[460px]">
      ${FormGroup({
        rows: [
          [
            `<label>Title</label>`,
            SwitchStories.render({
              small: true,
              checked: true,
              disabled: false,
            }),
          ],
          [
            `<label>Title</label>`,
            SliderStories.render({
              disabled: false,
              initialValue: 50,
            }),
          ],
          [
            `<label>Title</label>`,
            SliderTickedStories.render({
              initialValue: 0,
              disabled: false,
            }),
          ],
        ],
      })}

      ${FormGroup({
        rows: [
          [
            `<div class="flex flex-col">
              <label>Title</label>
              <span class="text-sm text-text-opaque-light-2">Subtitle</span>
            </div>`,
            PushButtonStories.render({
              disabled: false,
              primary: false,
            }),
          ],
        ],
      })}
    </form>`
  },
  argTypes: {
    items: [""],
  },
}

export const Default = {
  args: {},
}

function FormGroup({ rows }) {
  // rows = 2d array where each item is a row and each sub-item is left/right content
  return `<!-- Form Group -->
  <fieldset class="
    mt-4
    rounded-md 
    bg-[rgba(0,0,0,0.03)] 
    border 
    border-[rgba(0,0,0,0.04)]
    first:mt-0"
  >
    ${map(rows, ([left, right]) => FormRow({ left, right }))}
  </fieldset>`
}

function FormRow({ left, right }) {
  return `
  <div class="
    flex
    justify-between
    items-center
    py-[10px]
    mx-[10px]
    border-b
    border-b-fills-opaque-5
    text-base
    last:border-none"
  >
    <!-- Left Accessory -->${left}
    <!-- Right Accessory -->${right}
  </div>`
}
