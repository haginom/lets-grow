import {FaFolder} from 'react-icons/fa'

export default {
  name: 'sessionResources',
  title: 'Session Resources',
  type: 'document',
  icon: FaFolder,
  fields: [
    {
      name: 'fileName',
      title: 'File Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'session',
      type: 'reference',
      to: [{type: 'introSessions'}, {type: 'sessions'}],
      validation: (Rule) => Rule.required(),
      options: {
        filter: '!defined(parent)',
      },
    },
    {
      name: 'fileCategory',
      title: 'File Type',
      type: 'string',
      options: {
        list: [
          {title: 'PDF', value: 'pdf'},
          {title: 'Video', value: 'video'},
          {title: 'Image', value: 'image'},
          {title: 'Song', value: 'song'},
          {title: 'Webpage', value: 'webpage'},
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    },
    
    {
      name: 'fileTypeUrl',
      title: 'Is the session resource accessible via a url link?',
      type: 'boolean',

      validation: (Rule) =>
        Rule.custom((field, context) =>
          (field === false && context.document.file === false) ||
          (field === true && context.document.file === true)
            ? 'Either Url or File attachment must have a value'
            : true
        ),
    },
    {
      name: 'url',
      title: 'Link',
      type: 'string',
      hidden: ({document}) => !document?.fileTypeUrl,
    },
    {
      name: 'file',
      title: 'Upload a file? ',
      type: 'boolean',
      validation: (Rule) =>
        Rule.custom((field, context) =>
          (field === false && context.document.fileTypeUrl === false) ||
          (field === true && context.document.fileTypeUrl === true)
            ? 'Either Url or File attachment must have a value'
            : true
        ),
    },
    {
      name: 'fileAttachment',
      title: 'File Attachment',
      type: 'fileAttachment',
      hidden: ({document}) => !document?.file,
    },
  ],
}
