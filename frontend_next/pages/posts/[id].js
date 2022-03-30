import React, { useState, useEffect } from 'react'
import MarkdownIt from 'markdown-it'
import axios from 'axios'

const Post = ({postData}) => {
  const md = new MarkdownIt();
  const [post, setPost] = useState({})

  useEffect(() => {
    setPost(postData.data.attributes)
  }, [])

  let stringContent = post?.content?.toString();

  let htmlContent = md.render(postData.data.attributes.content)
  
  return (
    <article>
        <h1>{post.title}</h1>
        <section dangerouslySetInnerHTML = {{__html: htmlContent}}></section>
    </article>
  )
}

export default Post

export const getStaticProps = async ({params}) => {
  const postReq = await axios.get(`http://localhost:1337/api/posts/${params.id}`)

  return{
    props: {
      postData: postReq.data
    }
  }
}

export const getStaticPaths = async () => {
  const postsReq = await axios.get('http://localhost:1337/api/posts')

  const paths = postsReq.data.data.map((post) => {
    return {
      params: {
        id: post.id.toString(),
      }
    }
  })
  return {
    paths,
    fallback: false,
  }
}
