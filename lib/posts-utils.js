import fs from "fs"
import path from 'path'
import matter
 from "gray-matter"

const folderPath = path.join(process.cwd(), 'posts')

export function getPostsFile() {
    return fs.readdirSync(folderPath)
}

export function getFileData (postIdentifier){
    const postSlug = postIdentifier.replace(/\.md$/, "")
    const filepath = path.join(folderPath, `${postSlug}.md`)
    const fileContent = fs.readFileSync(filepath, 'utf-8')

    const { data, content } = matter(fileContent)

    
    
    const postData = {
        slug: postSlug,
        ...data,
         content
    }
    
    return postData
}   

export function getAllPosts (){
  const postfiles = getPostsFile()

  const allposts = postfiles.map((postfile)=>getFileData(postfile)
  )

  const sortedPosts = allposts.sort((postA, postB) => postA.date > postB.date ? -1: 1)


  return sortedPosts;
}

export function getFeaturedPostsData () {
    const allposts = getAllPosts()
   
    
    const featuredPosts = allposts.filter(post=> post.isFeatured )
    
    return featuredPosts
}