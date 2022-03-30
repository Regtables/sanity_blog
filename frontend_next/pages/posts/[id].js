import React, { useState, useEffect } from 'react'
import MarkdownIt from 'markdown-it'
import axios from 'axios'
import Image from 'next/image'
import { client, urlFor } from '../../client'

const Post = ({postData}) => {
  const md = new MarkdownIt();
  const [post, setPost] = useState({})

  useEffect(() => {
    setPost(postData[0])
    // console.log(postData[0])
  }, [postData])

  console.log(post)

  // let stringContent = post?.content?.toString();

  // let htmlContent = md.render(postData.content)
  
  return (
    <article>
        <h1>{post.title}</h1>
        {/* <section dangerouslySetInnerHTML = {{__html: htmlContent}}></section> */}
        {
          post?.content?.map((item, index) => {
           return <p key = {index}>{item.children[0].text}</p>
          })
        }
        <img src = {post.imageUrl && urlFor(post.imageUrl)} width = '300px' height = '600px' alt = 'img' />
        
    </article>
  )
}

export default Post

export const getStaticProps = async ({params}) => {
  // const postReq = await axios.get(`http://localhost:1337/api/posts/${params.id}`)
  // const { id = '' } = params;
  let postReq;

  const url = `https://1hbpwfrj.api.sanity.io/v2022-01-31/data/query/production?query=*[_type == "posts"]`

  const res = await axios.get(`https://1hbpwfrj.api.sanity.io/v2022-01-31/data/query/production?query=*[id==${params.id}]`)
  console.log(res.data.result)

  // postReq = await client.fetch(`*[id == ${params.id}`)
  // console.log(postReq)

  return{
    props: {
      postData: res.data.result,
    }
  }
}

export const getStaticPaths = async () => {
  // const postsReq = await axios.get('http://localhost:1337/api/posts')

  let postsReq;

  postsReq = await client.fetch('*[_type == "posts"]');
  console.log(postsReq)

  const paths = postsReq.map((post) => {

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

// export const getStaticPaths = async () => {
//   // const postsReq = await axios.get('http://localhost:1337/api/posts')

//   let postReq;

//   postReq = await 

//   const paths = postsReq.data.data.map((post) => {
//     return {
//       params: {
//         id: post.id.toString(),
//       }
//     }
//   })
//   return {
//     paths,
//     fallback: false,
//   }
// }
