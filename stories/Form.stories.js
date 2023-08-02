import SwitchStories from "./Switch.stories"
import SliderStories from "./Slider.stories"
import SliderTickedStories from "./SliderTicked.stories"
import PushButtonStories from "./PushButton.stories"
import { map } from "./helpers"

export default {
  title: "Lists/Form",
  tags: ["autodocs"],
  render: ({ groups }) => {
    return `
    <form class="w-[460px] space-y-4" onsubmit="event.preventDefault()">
      ${map(groups, ({ rows }) => {
        return `<!-- Form Group -->
        <fieldset class="
          rounded-md 
          bg-[rgba(0,0,0,0.03)] 
          border 
          border-[rgba(0,0,0,0.04)]"
        >
          ${map(rows, ({ left, right }) => {
            return `<!-- Form Row -->
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
          })}
        </fieldset>`
      })}
    </form>`
  },
  argTypes: {
    groups: [],
  },
}

export const Default = {
  args: {
    groups: [
      {
        rows: [
          {
            left: `
              <div class="flex flex-col">
                <label>Title</label>
                <span class="text-sm text-text-opaque-light-2">Subtitle</span>
              </div>`,
            right: `
              <div class="flex gap-2">
                ${PushButtonStories.render({
                  label: "Save",
                  disabled: false,
                  primary: true,
                })}
                ${PushButtonStories.render({
                  label: "Cancel",
                  disabled: false,
                  primary: false,
                })}
              </div>`,
          },
        ],
      },
      {
        rows: [
          {
            left: `<label>A checkbox</label>`,
            right: SwitchStories.render({
              checked: true,
              disabled: false,
            }),
          },
          {
            left: `<label>A slider</label>`,
            right: SliderStories.render({
              disabled: false,
              initialValue: 50,
            }),
          },
          {
            left: `<label>A different slider</label>`,
            right: SliderTickedStories.render({
              initialValue: 0,
              disabled: false,
            }),
          },
        ],
      },
    ],
  },
}
