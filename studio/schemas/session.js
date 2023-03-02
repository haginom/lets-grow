import {FaFolder} from 'react-icons/fa'
import {SlugInput} from 'sanity-plugin-prefixed-slug'

export default {
  name: 'sessions',
  title: 'Sessions',
  type: 'document',
  icon: FaFolder,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.max(30).warning(`A title shouldn't be more than 30 characters.`),
    },

    {
      name: 'image',
      title: 'Main Image',
      description: 'The image that will be included in the link to the session.',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'color',
      title: 'Background Colour',
      type: 'color',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      components: {
        input: SlugInput,
      },
      options: {
        urlPrefix: 'http://www.letsgrow.org.uk/portal/session/',
        slugify: (slugString) => slugString.toLowerCase(),
        // You can also avoid slugifying entirely by returning the full value:
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'visitingBaby',
      title: 'Does the session include a visiting baby?',
      type: 'boolean',
    },
    {
      name: 'characterPrep',
      title: 'Character Preparation',
      type: 'reference',
      to: [{type: 'sessionResources'}],
      hidden: ({document}) => !document?.visitingBaby,
    },
    {
      name: 'howToVideo',
      title: "'How to' Video Guide",
      type: 'reference',
      to: [{type: 'sessionResources'}],
      hidden: ({document}) => !document?.visitingBaby,
    },
    {
      name: 'whiteArt',
      title: 'White Art',
      type: 'image',
      options: {
        hotspot: true,
      },
      hidden: ({document}) => !document?.visitingBaby,
    },
    {
      name: 'sessionPlan1',
      title: 'Session Plan: Part 1',
      type: 'reference',
      to: [{type: 'sessionResources'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'sessionPlan2',
      title: 'Session Plan: Part 2',
      type: 'reference',
      to: [{type: 'sessionResources'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'videoStill',
      title: 'Video Still',
      type: 'image',
      hidden: ({document}) => document?.visitingBaby,
    },
    {
      name: 'videoCall',
      title: 'Video Call',
      type: 'reference',
      to: [{type: 'sessionResources'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email with Audio',
      type: 'reference',
      to: [{type: 'sessionResources'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'topTips',
      title: 'Top Tips',
      type: 'reference',
      to: [{type: 'sessionResources'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'scrapbook',
      title: 'Scrapbook',
      type: 'reference',
      to: [{type: 'sessionResources'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'songs',
      title: 'Songs',
      type: 'reference',
      to: [{type: 'sessionResources'}],
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'sessionResources',
      title: 'Additional Resources',
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
