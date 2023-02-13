export default {
  name: 'fileAttachment',
  title: 'File Attachment',
  type: 'object',
  fields: [
    {
      name: 'file',
      // Notice the the type here is 'file'.
      // In the unsuccessful approach, it was originally 'reference'
      type: 'file',
      title: 'File Attachment',
    },
  ],
}
