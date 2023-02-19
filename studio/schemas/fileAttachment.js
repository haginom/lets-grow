export default {
  name: 'fileAttachment',
  title: 'File Attachment',
  type: 'object',
  fields: [
    {
      name: 'fileName',
      title: 'Name',
      type: 'string',
      validation: (Rule) =>
        Rule.required().max(30).warning(`A title shouldn't be more than 30 characters.`),
    },
    {
      name: 'file',
      type: 'file',
      title: 'File Attachment',
    },
  ],
}
