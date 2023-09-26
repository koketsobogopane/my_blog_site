import { Fragment } from 'react'
import PostContent from '../../components/posts/post-detail/post-content'
import { getFileData, getPostsFile } from '../../lib/posts-utils';
import Head from 'next/head'

export function getStaticProps(context){
    const { params } = context;
    const { slug } = params

    const postData = getFileData(slug)
    
    return {
        props: {
            post: postData
        }, 
        revalidate: 600
    }
}

export function getStaticPaths(){
    const postFileNames = getPostsFile();

    const slugs = postFileNames.map(filename => filename.replace(/\.md$/, ""))

    return{
        paths: slugs.map(slug => ({ params: { slug: slug}})),
        fallback : false
    }
}

export default function PostDetailsPage(props) {
  return (
    <Fragment>
        <Head>
            <title>{props.post.title}</title>
            <meta name='description' content={props.post.excerpt}/>
        </Head>
        <PostContent post={props.post} />
    </Fragment>
    
  )
}
