import React, { useState, useEffect } from 'react'
import axios from 'axios'
import HomeHeader from '../components/homeHeader/HomeHeader'
import HomeLatestPosts from '../components/homeLatestPosts/HomeLatestPosts'

const Home = ({postsData}) => {

  return (
    <main>
        <HomeHeader />
        <HomeLatestPosts posts = {postsData} />
    </main>
  )
}

export default Home

export const getStaticProps = async () => {
  const postReq = await axios.get('http://localhost:1337/api/posts')
  
  return {
    props : {
      postsData: postReq.data,
    }
  }
}
