import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
  projectId: '1hbpwfrj',
  dataset: 'production',
  apiVersion: '2022-01-31',
  useCdn: true,
  token: process.env.REACT_APP_SANITY_API

})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)