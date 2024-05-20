export const team = {
  name: 'team',
  title: 'Team',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    },
    {
      name: 'pokemon',
      title: 'Pokemon',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'pokemon' }] }],
    },
  ],
};
