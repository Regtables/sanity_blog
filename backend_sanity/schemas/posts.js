import { MdTitle } from 'react-icons/md'

export default {
  name: 'posts',
  title: 'Posts',
  icon: MdTitle,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of your blog post'
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
      description: 'The content of your blog post'
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