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
      name: 'comingSoon',
      title: 'Coming Soon',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Order ',
      type: 'number',
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
      title: 'Include the Overview page?',
      name: 'overview',
      type: 'boolean',
    },
    {
      title: 'Include Handy Hints?',
      name: 'handyHints',
      type: 'boolean',
    },
    {
      title: "Include the Welcome to Let's Grow with Mr Bloom session",
      name: 'welcomeMrBloom',
      type: 'boolean',
    },
    {
      title: 'Include the Introductory session with Bob, Flo & the Babies session',
      name: 'introSession',
      type: 'boolean',
    },
    {
      title: 'Upload Mr Bloom image',
      name: 'mrBloom',
      type: 'image',
      hidden: ({document}) => document?.introSession,
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      components: {
        input: SlugInput,
      },
      options: {
        urlPrefix: 'http://http://www.letsgrow.org.uk/portal/',
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
  initialValue: {
    comingSoon: false,
  },
}
