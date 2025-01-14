import { type SchemaTypeDefinition } from 'sanity'
import blogPost from './blogtype'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogPost],
}
