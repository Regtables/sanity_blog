import React, { useEffect, useState } from 'react'
import PostCard from '../postCard/PostCard'

const HomeLatestPosts = ({posts}) => {
  const [latestPosts, setLatestPosts] = useState([])

  useEffect(() => {
    setLatestPosts(posts.slice(0,5))
  }, [posts])

  function renderPostCards(){
    return (
      latestPosts.map((post) => (
        <PostCard post = {post} key = {post.id} />
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
