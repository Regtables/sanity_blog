import { MdTitle } from 'react-icons/md'

export default {
  name: 'posts',
  title: 'Posts',
  icon: MdTitle,
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'Id',
      type: 'number',
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of your blog post',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'A short description of your blog post'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
      description: 'The content of your blog post',
      validation: Rule => Rule.required()
    },
    {
      name: 'imageUrl',
      title: 'ImageUrl',
      type: 'image',
      description: 'A image related to your blog post',
      options: {
        hotspot: true
      }
    }
  ]
}