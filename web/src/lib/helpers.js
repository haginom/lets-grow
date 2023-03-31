import client from "../services/sanity"
import imageUrlBuilder from "@sanity/image-url"

//image builder
const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

export function cn(...args) {
  return args.filter(Boolean).join(" ")
}

export function mapEdgesToNodes(data) {
  if (!data.edges) return []
  return data.edges.map(edge => edge.node)
}

export function filterOutDocsWithoutSlugs({ slug }) {
  return (slug || {}).current
}

export function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

export function LightenDarkenColor(col, amt) {
  var usePound = false
  if (col[0] === "#") {
    col = col.slice(1)
    usePound = true
  }
  var num = parseInt(col, 16)
  var r = (num >> 16) + amt

  if (r > 255) r = 255
  else if (r < 0) r = 0

  var b = ((num >> 8) & 0x00ff) + amt

  if (b > 255) b = 255
  else if (b < 0) b = 0

  var g = (num & 0x0000ff) + amt

  if (g > 255) g = 255
  else if (g < 0) g = 0

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16)
}

export const capitalizeWords = (str, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, match =>
    match.toUpperCase()
  )

export const groupBy = (array, property) =>
  array.reduce(
    (grouped, element) => ({
      ...grouped,
      [element[property]]: [...(grouped[element[property]] || []), element],
    }),
    {}
  )
export const getStringBeforeHyphen = str => {
  const index = str.indexOf("-")
  if (index === -1) {
    return str // return the whole string if there's no hyphen
  }
  return str.slice(0, index).trim() // return the substring before the hyphen
}
