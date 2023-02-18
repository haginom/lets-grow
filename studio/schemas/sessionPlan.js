export default {
  type: 'object',
  name: 'sessionPlan',
  title: 'Session Plan',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'session',
      title: 'Session',
      type: 'reference',
      to: {type: 'sessions'},
    },
    {
      name: 'fileAttachment',
      type: 'fileAttachment',
    },
  ],
}
