export default {
  name: 'game',
  title: 'Game',
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
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    },
    {
      name: 'scheduleDay',
      title: 'Schedule Day',
      type: 'string',
      options: {
        list: [
          { title: 'Monday', value: 'monday' },
          { title: 'Tuesday', value: 'tuesday' },
          { title: 'Wednesday', value: 'wednesday' },
          { title: 'Thursday', value: 'thursday' },
          { title: 'Friday', value: 'friday' },
          { title: 'Saturday', value: 'saturday' },
          { title: 'Sunday', value: 'sunday' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'scheduleTime',
      title: 'Schedule Time',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'playerCount',
      title: 'Current Player Count',
      type: 'number',
      validation: Rule => Rule.min(0).required()
    },
    {
      name: 'maxPlayers',
      title: 'Maximum Players',
      type: 'number',
      validation: Rule => Rule.min(1).required()
    },
    {
      name: 'gameLink',
      title: 'StartPlaying.Games Link',
      type: 'url',
      validation: Rule => Rule.required()
    }
  ]
}