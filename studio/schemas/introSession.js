import {FaFolder} from 'react-icons/fa'
import {SlugInput} from 'sanity-plugin-prefixed-slug'

export default {
  name: 'introSessions',
  title: 'Intro Sessions',
  type: 'document',
  icon: FaFolder,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'color',
      title: 'color',
      type: 'color',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      components: {
        input: SlugInput,
      },
      options: {
        urlPrefix: 'http://localhost:8000/sessions/',
        slugify: (slugString) => slugString.toLowerCase(),
        // You can also avoid slugifying entirely by returning the full value:
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'sessionResources',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'sessionResources', title: 'Session Resources'}],
        },
      ],
    },
  ],
}
