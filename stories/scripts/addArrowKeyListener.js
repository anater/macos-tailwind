export default function addArrowKeyListener(item) {
  item.onblur = () => (document.onkeydown = undefined)

  document.onkeydown = (keydownEvent) => {
    const level = Number(item.dataset.level)
    const itemSelector = `[data-level="${level}"]`
    const childSelector = `[data-level="${level + 1}"]`

    let sibling
    switch (keydownEvent.key) {
      case "ArrowUp": {
        sibling = item.previousElementSibling
        while (sibling.getAttribute("aria-expanded") === "false") {
          sibling = sibling.previousElementSibling
        }
        break
      }

      case "ArrowDown": {
        sibling = item.nextElementSibling
        while (sibling.getAttribute("aria-expanded") === "false") {
          sibling = sibling.nextElementSibling
        }
        break
      }

      case "ArrowRight":
      case "ArrowLeft": {
        sibling = item.nextElementSibling

        while (sibling) {
          if (sibling.matches(itemSelector)) {
            sibling = null
            break
          }
          if (sibling.matches(childSelector)) {
            const isArrowRight = keydownEvent.key === "ArrowRight"
            sibling.setAttribute("aria-expanded", isArrowRight)
          }
          sibling = sibling.nextElementSibling
        }
        break
      }

      default:
        break
    }
    console.log({ key: keydownEvent.key, sibling })
    sibling?.focus()
  }
}
