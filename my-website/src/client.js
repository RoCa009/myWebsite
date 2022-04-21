const sanityClient = require('@sanity/client')
const ImageUrlBuilder = require('@sanity/image-url')

export const client = sanityClient({
    projectId: '5yoz1iiy',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: process.env.REACT_SANITY_TOKEN
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)