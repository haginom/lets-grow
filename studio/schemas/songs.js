import {FaMusic} from 'react-icons/fa'

export default {
  name: 'songs',
  title: 'Songs',
  type: 'document',
  icon: FaMusic,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'songVideo',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'songVideo'}],
        },
      ],
    },
  ],
}
