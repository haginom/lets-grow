import {FaMusic} from 'react-icons/fa'

export default {
  name: 'songVideo',
  title: 'Song Videos',
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
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Audio Recording', value: 'audio'},
          {title: 'Video Call', value: 'video'},
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    },

    {
      name: 'artist',
      title: 'Artist',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'videoResources',
      type: 'videoResources',
    },
  ],
}
