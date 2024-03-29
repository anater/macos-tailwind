import SearchFieldIcon from "./assets/SearchFieldIcon.svg"

export default {
  title: "Controls/Search Field",
  tags: ["autodocs"],
  render: ({ placeholder, disabled, rounded }) => {
    const disabledAttr = disabled ? "disabled" : ""
    return `
    <div class="
      ${disabled ? `opacity-50` : ``}
      ${rounded ? `rounded-[5px]` : ``}
      overflow-hidden
      inline-flex
      justify-between
      items-center
      bg-white
      shadow-field
      text-base
      font-light
      ring-default-light/30
      focus-within:ring"
    >
      <img src="${SearchFieldIcon}" alt="search" class="mx-2" />
      <input ${disabledAttr}
        type="search"
        placeholder="${placeholder}"
        class="
          appearance-none
          outline-none
          flex-grow
          placeholder:text-base
          placeholder:text-text-opaque-light-3
          "
      />
    </div>
    `
  },
  argTypes: {
    placeholder: "",
    disabled: false,
  },
}

export const Default = {
  args: {
    placeholder: "Search",
    disabled: false,
    rounded: false,
  },
}

export const Rounded = {
  args: {
    placeholder: "Rounded",
    disabled: false,
    rounded: true,
  },
}

export const Disabled = {
  args: {
    placeholder: "Search",
    disabled: true,
    rounded: false,
  },
}
