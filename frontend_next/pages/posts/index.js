import React from 'react'
import axios from 'axios'

import AllPosts from '../../components/allPosts/AllPosts'

const Posts = ({postsData}) => {
  return (
    <div>
        <AllPosts posts = {postsData.data} />
    </div>
  )
}

export default Posts

export const getStaticProps = async () => {
  const postReq = await axios.get('http://localhost:1337/api/posts')
  
  return {
    props : {
      postsData: postReq.data,
    }
  }
}
