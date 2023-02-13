import {FaFolder} from 'react-icons/fa'

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
      name: 'sessionPlan',
      title: 'Session Plan',
      type: 'array',
      of: [{type: 'sessionPlan'}],
    },
    {
      name: 'sessionResources',
      title: 'Session Resources',
      type: 'array',
      of: [{type: 'sessionResources'}],
    },
  ],
}
