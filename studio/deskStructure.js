import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import {FaBrush} from 'react-icons/fa'

export const myStructure = (S, context) =>
  S.list()
    .title('Base')
    .items([
      orderableDocumentListDeskItem({
        type: 'theme',
        title: 'Theme',
        icon: FaBrush,
        S,
        context,
      }),
      // Minimum required configuration
      ...S.documentTypeListItems().filter((listItem) => !['theme'].includes(listItem.getId())),
    ])
