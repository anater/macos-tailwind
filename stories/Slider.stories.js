import "../site/styles.src.css"

export default {
  title: "Controls/Slider",
  tags: ["autodocs"],
  render: ({ ticked }) => {
    const dataList = ticked
      ? `
    <datalist id="ticks">
      <option value="0"></option>
      <option value="25"></option>
      <option value="50"></option>
      <option value="75"></option>
      <option value="100"></option>
    </datalist>`
      : ``
    const stepAttr = `step=${ticked ? 25 : 1}`
    const listAttr = ticked ? 'list="ticks"' : ""

    return `<input type="range" ${stepAttr} ${listAttr} class="
      appearance-none
      w-[150px]
      h-1
      rounded-full
      bg-fills-opaque-5
      shadow-progress
      focus:outline-none
      range-thumb:appearance-none
      range-thumb:bg-white
      range-thumb:h-5
      range-thumb:w-5
      range-thumb:rounded-full
      range-thumb:shadow-sm
      range-thumb:border-solid
      range-thumb:border-0.5
      range-thumb:border-fills-opaque-5
    " /> ${dataList}`
  },
  argTypes: {
    ticked: false,
  },
}

export const Default = {
  args: {
    ticked: false,
  },
}

export const Ticked = {
  args: {
    ticked: true,
  },
}
