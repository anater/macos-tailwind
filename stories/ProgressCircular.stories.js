export default {
  title: "Controls/Progress Circular",
  tags: ["autodocs"],
  render: ({ stroke, radius, progress }) => {
    const normalizedRadius = radius - stroke * 2
    const circumference = normalizedRadius * 2 * Math.PI
    const offset = circumference - (progress / 100) * circumference

    return `
      <svg
        height="${radius * 2}"
        width="${radius * 2}"
      >
        <circle
          class="stroke-black/5"
          stroke-dasharray="${circumference} ${circumference}"
          stroke-dashoffset="0"
          stroke-width="${stroke}"
          stroke-linecap="round"
          fill="transparent"
          r="${normalizedRadius}"
          cx="${radius}"
          cy="${radius}"
        />
        <circle
          class="stroke-default-light"
          stroke-dasharray="${circumference} ${circumference}"
          stroke-dashoffset="${offset}"
          stroke-width="${stroke}"
          stroke-linecap="round"
          fill="transparent"
          r="${normalizedRadius}"
          cx="${radius}"
          cy="${radius}"
        />
      </svg>

      <style>
        circle {
          transition: stroke-dashoffset 0.35s;
          transform: rotate(-90deg);
          transform-origin: 50% 50%;
        }
      </style>
    `
  },
  argTypes: {
    stroke: 0,
    radius: 0,
    progress: 0,
  },
}

export const Default = {
  args: {
    stroke: 5,
    radius: 32,
    progress: 30,
  },
}
