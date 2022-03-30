import React from 'react'
import axios from 'axios'

import { client } from '../../client'
import AllPosts from '../../components/allPosts/AllPosts'

const Posts = ({postsData}) => {
  return (
    <div>
        <AllPosts posts = {postsData} />
    </div>
  )
}

export default Posts

export const getStaticProps = async () => {
  // const postReq = await axios.get('http://localhost:1337/api/posts')
  let postReq;

  const query = '*[_type == "posts"]'
  postReq = await client.fetch(query);
  
  return {
    props : {
      postsData: postReq
    }
  }
}
