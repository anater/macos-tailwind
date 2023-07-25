export const map = (items = [], callback = () => "", separator = "") =>
  items.length > 0 ? items.map(callback).join(separator) : ""
