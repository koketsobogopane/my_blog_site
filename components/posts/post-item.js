import Link from "next/link";
import classes from './post-item.module.css'
import Image from "next/image";


export default function PostItem(props) {
  const { title, image, excerpt, slug, date } = props.post
  
  const formattedDate = new Date(date).toLocaleDateString( 'en-US', {
    day: "numeric",
    month:"long" ,
    year: 'numeric'
  })

  const ImagePath = `/images/posts/${slug}/${image}`
  
  return (
    <li className={classes.post}>
      <Link href={`/posts/${slug}`}>
      <div className={classes.image}>
        <Image src={ImagePath} alt={title} width={300} height= {200} layout="responsive" />  
      </div>
      <div className={classes.content}>
        <h3>
          {title}
        </h3>
        <time>
          {formattedDate}
        </time>
        <p>
          {excerpt}
        </p>
      </div>
      </Link>
    </li>
  )
}