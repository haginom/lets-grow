export default {
  name: 'urlLink',
  title: 'Link',
  type: 'object',
  fields: [
    {
      name: 'linkName',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'url',
      type: 'url',
      title: 'Url Address',
    },
  ],
}
