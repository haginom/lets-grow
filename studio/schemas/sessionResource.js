import {FaFolder} from 'react-icons/fa'

export default {
  name: 'sessionResources',
  title: 'Session Resources',
  type: 'object',
  icon: FaFolder,
  fields: [
    {
      name: 'fileName',
      title: 'File Name',
      type: 'string',
    },
    {
      name: 'fileAttachment',
      title: 'File Attachment',
      type: 'fileAttachment',
    },
  ],
}
