import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {markdownSchema} from 'sanity-plugin-markdown'

export default defineConfig({
  name: 'default',
  title: 'Uncivilized Games',

  projectId: 'zvax5b4d',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), markdownSchema()],

  schema: {
    types: schemaTypes,
  },
})
