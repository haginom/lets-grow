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
      name: 'fileAttachment',
      type: 'fileAttachment',
    },
  ],
}
