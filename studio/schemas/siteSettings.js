import {MdSettings} from 'react-icons/md'

export default {
  name: 'siteSettings',
  title: 'Site Settings',

  type: 'document',

  __experimental_actions: ['update', 'publish'],
  icon: MdSettings,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
    },
  ],
}
