import React, { useEffect, useState } from 'react'
import PostCard from '../postCard/PostCard'

const HomeLatestPosts = ({posts}) => {
  const [latestPosts, setLatestPosts] = useState([])

  useEffect(() => {
    setLatestPosts(posts.data.slice(0,5))
  }, [posts])

  function renderPostCards(){
    return (
      latestPosts.map((post) => (
        <PostCard post = {post} key = {post.attributes.id} />
      ))
    )
  }

  return (
    <div>
      <h2>Latest Posts</h2>
      {renderPostCards()}
    </div>
  )
}

export default HomeLatestPosts
