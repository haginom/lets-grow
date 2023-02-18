
export const myStructure = (S, context) =>
  S.list()
    .title('Base')
    .items([...S.documentTypeListItems()])
