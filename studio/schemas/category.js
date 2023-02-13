export default {
  name: 'fileCategory',
  title: 'File Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      options: {
        list: ['PDF', 'mp4', 'image'],
      },
    },
  ],
}
