import {FaFolder} from 'react-icons/fa'

export default {
  name: 'sessionResources',
  title: 'Session Resources',
  type: 'document',
  icon: FaFolder,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'This should contain Session and Resource name',
    },

    {
      name: 'fileCategory',
      title: 'File Type',
      type: 'string',
      options: {
        list: [
          {title: 'PDF', value: 'pdf'},
          {title: 'Video', value: 'video'},
          {title: 'Folder', value: 'folder'},
          {title: 'Song', value: 'song'},
          {title: 'Webpage', value: 'webpage'},
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    },

    {
      name: 'url',
      title: 'Link',
      type: 'urlLink',
      hidden: ({document}) =>
        document?.fileCategory !== 'webpage' && document?.fileCategory !== 'song',
    },

    {
      name: 'fileAttachment',
      title: 'Upload File',
      type: 'fileAttachment',
      hidden: ({document}) =>
        document?.fileCategory === 'webpage' ||
        document?.fileCategory === 'song' ||
        document?.fileCategory === 'video',
    },
    {
      name: 'videoResources',
      title: 'Upload File',
      type: 'videoResources',
      hidden: ({document}) => document?.fileCategory !== 'video',
    },
  ],
}
