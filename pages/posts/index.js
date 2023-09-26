import { Fragment } from 'react'
import AllPosts from '../../components/posts/all-posts'
import { getAllPosts } from '../../lib/posts-utils'
import Head from 'next/head'

export function getStaticProps (){
    const posts =  getAllPosts()
  
    return {
        props:{
            posts: posts
        }
    }
}


export default function AllPostsPage(props) {

   
  return (
    <Fragment>
    <Head>
      <title>
        All Posts
      </title>
      <meta name='description' content="All the Blog Posts" />
    </Head>
    <AllPosts posts={props.posts} />
  
    </Fragment>
  )
    
}
