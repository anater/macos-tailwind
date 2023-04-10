import "../site/styles.src.css"

export default {
  title: "Controls/Circular Slider",
  tags: ["autodocs"],
  render: ({ disabled }) => {
    const disabledAttr = disabled ? "disabled" : ""
    return `
    <button ${disabledAttr}
      onmousedown="
        document.onmousemove = (e) => rotateKnob(e, this.firstElementChild)
        document.onmouseup = () => document.onmousemove = undefined"
      class="
        rounded-full
        w-5
        h-5
        border-0.5
        border-black/5
        shadow-sm
        flex
        items-center
        justify-center
        active:bg-gray-100
        disabled:pointer-events-none
        disabled:opacity-40"
    >
      <div aria-valuenow=0 class="
        w-full
        h-full
        flex
        justify-center
        before:block
        before:w-[6px]
        before:h-[6px]
        before:rounded-full 
        before:bg-black/50"
      ></div>
    </button>

    <script>
      function rotateKnob(mouseEvent, knob) {
        // get the mouse position relative to the button's position
        const rect = knob.getBoundingClientRect();
        const x = mouseEvent.clientX - rect.left;
        const y = mouseEvent.clientY - rect.top;

        // update the rotation on the knob based on whether the mouse moved up/down/left/right
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const deltaX = x + centerX;
        const deltaY = centerY + y;
        const angle = Math.atan2(deltaY, deltaX);
        const degrees = (angle * 180) / Math.PI;
        const rotate = \`rotate(\$\{degrees}deg)\`;

        knob.style.transform = rotate;
        knob.setAttribute('aria-valuenow', degrees);
      }
    </script>`
  },
  argTypes: {
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
