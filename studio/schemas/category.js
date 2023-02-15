export default {
  name: 'fileCategory',
  title: 'File Category',
  type: 'document',
  hidden: true,
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
