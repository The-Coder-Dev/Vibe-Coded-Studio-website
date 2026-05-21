import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('TheOjas Studio')
    .items([
      // Portfolio section
      S.listItem()
        .title('Portfolio')
        .child(
          S.list()
            .title('Portfolio')
            .items([
              S.documentTypeListItem('project').title('Projects'),
              S.documentTypeListItem('testimonial').title('Testimonials'),
            ])
        ),

      S.divider(),

      // About — singleton (only one document)
      S.listItem()
        .title('About Me')
        .id('about')
        .child(
          S.document()
            .schemaType('about')
            .documentId('aboutSingleton')
            .title('About Me')
        ),
    ])

