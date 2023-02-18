import {FaMusic} from 'react-icons/fa'

export default {
  name: 'songs',
  title: 'Songs',
  type: 'document',
  icon: FaMusic,

  fields: [
    {
      name: 'Name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'songs',
      title: 'Songs',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'song'}]}],
    },
  ],
}
