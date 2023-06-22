export default {
  title: "Controls/Progress Bar",
  tags: ["autodocs"],
  render: ({ progress }) => {
    return `
      <progress 
        value="${progress}" 
        max=100 
        class="w-[150px] h-[6px] rounded-full overflow-hidden text-default-light"
      >
        ${progress}%
      </progress>
      <style>
        /* FIX: ideally we use tailwind here too */
        progress[value]::-webkit-progress-bar {
          background-color: rgb(0 0 0 / 0.05);
          box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.02) inset, 0px 0px 2px 0px rgba(0, 0, 0, 0.03) inset, 0px 0px 2px 0px rgba(0, 0, 0, 0.04) inset;
        }

        progress[value]::-webkit-progress-value {
          background-color: currentColor;
          border-radius: 3px;
        }
      </style>
    `
  },
  argTypes: {
    progress: 0,
  },
}

export const Default = {
  args: {
    progress: 30,
  },
}
