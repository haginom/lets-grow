import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {colorInput} from '@sanity/color-input'
import {myStructure} from './deskStructure'
import {muxInput} from 'sanity-plugin-mux-input'

export default defineConfig({
  name: 'default',
  title: 'Studio',
  projectId: 'a6vt2u3f',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: myStructure,
    }),
    visionTool(),
    colorInput(),
    muxInput({mp4_support: 'standard'}),
  ],

  schema: {
    types: schemaTypes,
  },
})
