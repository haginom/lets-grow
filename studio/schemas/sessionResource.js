export default {
  name: 'sessionResources',
  title: 'Session Resources',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'This should contain Session and Resource name',
      validation: (Rule) =>
        Rule.required().max(30).warning(`A title shouldn't be more than 30 characters.`),
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
      name: 'url',
      title: 'Link',
      type: 'urlLink',
      hidden: ({document}) => document?.fileCategory !== 'webpage',
    },

    {
      name: 'fileAttachment',
      title: 'Upload File',
      type: 'fileAttachment',
      hidden: ({document}) => document?.fileCategory === 'webpage',
    },
  ],
}
