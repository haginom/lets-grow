export default {
  title: 'Video Resource',
  name: 'videoResource',
  type: 'document',
  fields: [
    {title: 'Title', name: 'title', type: 'string'},
    {
      title: 'Video file',
      name: 'video',
      type: 'mux.video',
    },
  ],
}