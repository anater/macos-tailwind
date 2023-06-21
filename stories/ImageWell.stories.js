import "../site/styles.src.css"
import ImageWellPreview from "./assets/ImageWellPreview.jpg"

export default {
  title: "Controls/Image Well",
  tags: ["autodocs"],
  render: ({ disabled }) => {
    return `
    <div class="${disabled ? `opacity-50` : ``}
      inline-flex
      h-11
      w-11
      rounded-sm
      items-center
      justify-center
      bg-fills-opaque-5
      border-[1px]
      border-white
      shadow-image-well
    ">
      <input ${disabled ? `disabled` : ``}
        type="file"
        style="background-image: url('${ImageWellPreview}')"
        accept="image/*"
        onchange="
          const [file] = this.files
          const path = globalThis.URL.createObjectURL(file)
          this.style.backgroundImage = \`url('\${path}')\`"
        class="
          appearance-none
          w-full
          h-full
          bg-contain
          bg-no-repeat
          bg-center
          file-selector-button:opacity-0" 
      />
    </div>`
  },
  argTypes: {
    color: "",
    disabled: false,
  },
}

export const Default = {
  args: {
    disabled: false,
  },
}

export const Disabled = {
  args: {
    disabled: true,
  },
}
