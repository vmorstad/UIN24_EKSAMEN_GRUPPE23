export const teams = {
  title: "Teams",
  name: "teams",
  type: "document",
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
      }
    },
    {
      name: 'pokemon',
      title: 'Pokémon',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'pokemon' } }]
    }
  ]
}