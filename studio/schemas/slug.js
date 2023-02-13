import {SlugInput} from 'sanity-plugin-prefixed-slug'

export default {
  name: 'testing-slugs',
  type: 'document',
  fields: [
    {
      // If you want to customize how slugs are formatted
      name: 'slug_custom_format',
      type: 'slug',
      components: {
        input: SlugInput,
      },
      options: {
        urlPrefix: 'https://site.url',
        slugify: (slugString) => slugString.toLowerCase(),
      },
    },
  ],
}
