import {FaMusic} from 'react-icons/fa'

export default {
  name: 'song',
  title: 'All Songs',
  type: 'document',
  icon: FaMusic,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
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
      name: 'songUpload',
      type: 'songUpload',
    },
  ],
}
