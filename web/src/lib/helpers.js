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
