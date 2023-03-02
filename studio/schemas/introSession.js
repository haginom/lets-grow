import {FaTag} from 'react-icons/fa'
import {SlugInput} from 'sanity-plugin-prefixed-slug'

export default {
  name: 'introSessions',
  title: "Welcome to Let's Grow Sessions",
  type: 'document',
  icon: FaTag,
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
      title: 'Background Colour',
      type: 'color',
    },
    {
      name: 'slug',
      title: 'Slug',
      description: 'The URL for the Introductory Session',
      type: 'slug',
      components: {
        input: SlugInput,
      },
      options: {
        urlPrefix: 'http://www.letsgrow.org.uk/sessions/',
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
          to: [{type: 'sessionResources'}],
        },
      ],
    },
  ],
}
