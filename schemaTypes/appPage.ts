export default {
  name: 'appPage',
  title: 'App Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'htmlContent',
      title: 'HTML Content',
      type: 'text',
      rows: 10,
      description: 'HTML content for the page'
    },
    {
      name: 'cssContent',
      title: 'CSS Content',
      type: 'text',
      rows: 10,
      description: 'CSS styles for the page'
    },
    {
      name: 'jsContent',
      title: 'JavaScript Content',
      type: 'text',
      rows: 10,
      description: 'JavaScript code for the page'
    },
    {
      name: 'featured',
      title: 'Featured on Homepage',
      type: 'boolean',
      initialValue: false
    }
  ]
}