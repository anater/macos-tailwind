export function addArrowKeyListener(item) {
  item.onblur = () => (document.onkeydown = undefined)

  document.onkeydown = (keyboardEvent) => {
    let sibling

    switch (keyboardEvent.key) {
      case "ArrowUp": {
        sibling = item.previousElementSibling
        while (sibling.hasAttribute("aria-hidden")) {
          sibling = sibling.previousElementSibling
        }
        break
      }

      case "ArrowDown": {
        sibling = item.nextElementSibling
        while (sibling.hasAttribute("aria-hidden")) {
          sibling = sibling.nextElementSibling
        }
        break
      }

      case "ArrowRight":
      case "ArrowLeft": {
        const isExpanded = keyboardEvent.key === "ArrowRight"
        expand(item, isExpanded)
        sibling = item
        break
      }

      default:
        break
    }

    sibling?.focus()
  }
}

export function expand(element, isExpanded) {
  console.log("expand", element, isExpanded)
  element.setAttribute("aria-expanded", isExpanded)

  const level = Number(element.dataset.level)
  let sibling = element.nextElementSibling

  // iterate through siblings until finding the next item at the same level
  while (sibling) {
    if (sibling.matches(`[data-level="${level}"]`)) {
      sibling = null
      break
    }

    const siblingLevel = Number(sibling.dataset.level)

    const reveal = isExpanded && siblingLevel === level + 1
    const hide = !isExpanded && siblingLevel > level

    if (reveal) sibling.removeAttribute("aria-hidden")
    else if (hide) sibling.setAttribute("aria-hidden", "")

    sibling = sibling.nextElementSibling
  }

  return element
}
