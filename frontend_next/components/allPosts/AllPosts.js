import React from 'react'
import PostCard from '../postCard/PostCard'

const AllPosts = ({posts}) => {
  function renderAllPosts() {
    return (
      posts.map((post) => (
        <PostCard post = {post} key = {post.attributes.id}/>
      ))
    )
  }

  return (
    <div>
      <h2>All Posts</h2>
      {renderAllPosts()}
    </div>
  )
}

export default AllPosts
