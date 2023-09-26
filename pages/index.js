import React, { Fragment } from 'react'
import Hero from '../components/home-page/hero'
import FeaturedPosts from '../components/home-page/featured-posts'
import { getFeaturedPostsData } from '../lib/posts-utils'
import Head from 'next/head'






export function getStaticProps(){
    const postsData = getFeaturedPostsData()
    
    return{
        props:{
            posts: postsData
        }
    }
} 

export default function HomePage(props) {
    
  return (
    <Fragment>
      <Head>
        <title>
          Welcome to my BlogSite
        </title>
        <meta name='description' content='Some of my exciting and interesting featured posts'/>
        </Head>
        <Hero />
        <FeaturedPosts posts={props.posts}/>
    </Fragment>
  )
}


