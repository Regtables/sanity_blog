import React, { useState, useEffect } from 'react'
import MarkdownIt from 'markdown-it'
import axios from 'axios'
import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'

import { client, urlFor } from '../../client'

// import image from '../../assets/image.png'

const Post = ({postData}) => {
  const md = new MarkdownIt();
  const [post, setPost] = useState({})
  const imageProps = useNextSanityImage(client, urlFor(postData.imageUrl));

  // console.log('url ' + imageProps)

  let imageUrl;
  console.log(urlFor(post.imageUrl))
  useEffect(() => {
    setPost(postData[0])
    // imageUrl = urlFor(post.imageUrl)
    // console.log(postData[0])
  }, [postData])

  // console.log(post)

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
        {
          post.imageUrl && (
            <img src = {urlFor(post.imageUrl)} alt = 'img' width = '300' height = '600' />
          )
        }
    
        
    </article>
  )
}

export default Post

export const getStaticProps = async ({params}) => {
  const query = `*[id == ${params.id}]`
  const postReq = await client.fetch(query)

  return{
    props: {
      postData: postReq,
    }
  }
}

export const getStaticPaths = async () => {
  const postsReq = await client.fetch('*[_type == "posts"]');

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
