import sanityClient from "@sanity/client"

const client = sanityClient({
  projectId: "a6vt2u3f",
  dataset: "production",
  apiVersion: "2022-02-10", // use current UTC date - see "specifying API version"!
  useCdn: true, // `false` if you want to ensure fresh data
})

export default client
