export default {
  title: 'Video Resources',
  name: 'videoResources',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      title: 'Video file',
      name: 'video',
      type: 'mux.video',
    },
  ],
}
