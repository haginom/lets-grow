import {FaBrush} from 'react-icons/fa'
import {SlugInput} from 'sanity-plugin-prefixed-slug'

export default {
  name: 'theme',
  title: 'Themes',
  type: 'document',
  icon: FaBrush,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'backgroundColour',
      title: 'background color',
      type: 'color',
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
      title: 'Does the theme have an Overview page?',
      name: 'overview',
      type: 'boolean',
    },
    {
      title: 'Does the theme have a Handy Hints page?',
      name: 'handyHints',
      type: 'boolean',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      components: {
        input: SlugInput,
      },
      options: {
        urlPrefix: 'http://localhost:8000/portal/',
        slugify: (slugString) => slugString.toLowerCase(),
        // You can also avoid slugifying entirely by returning the full value:
      },
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'sessions',
      title: 'Sessions',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'sessions'}],
        },
      ],
    },
  ],
}
