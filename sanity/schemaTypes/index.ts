import { type SchemaTypeDefinition } from 'sanity'
import { projectType } from './projectType'
import { aboutType } from './aboutType'
import { testimonialType } from './testimonialType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, aboutType, testimonialType],
}
