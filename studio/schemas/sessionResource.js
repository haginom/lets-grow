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
      title: 'Is the session resource a file (image, pdf etc.)? ',
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
