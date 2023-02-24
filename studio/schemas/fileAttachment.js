export default {
  name: 'fileAttachment',
  title: 'File Attachment',
  type: 'object',
  fields: [
    {
      name: 'fileName',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'file',
      type: 'file',
      title: 'File Attachment',
    },
  ],
}
