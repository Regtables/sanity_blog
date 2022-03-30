import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const PostCard = ({post}) => {
  return (
    <Link href = {`/posts/${post.id}`}>
        <motion.div 
          className = 'post-card'
          whileHover = {{ scale: [1, 1.01] }}
          transition = {{ duration: 0.3, ease: 'easeInOut' }}
        >
            <h3>{post.attributes.title}</h3>
            <p>{post.attributes.description}</p>
        </motion.div>
    </Link>
  )
}

export default PostCard
