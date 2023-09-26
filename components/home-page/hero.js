
import classes from './hero.module.css'
import  Image  from 'next/image'

export default function Hero() {
  return (
    <section className={classes.hero}>
        <div className={classes.image}>
            <Image src='/images/site/Zen.jpg'
            width={300}
            height={300}
            alt= 'Picture of Koketso'
            />
        </div>
        <h1>
            Hey✌️!, I'm Koketso
        </h1>
        <p>
            I am a software engineer who is very new to this gig and I love working with other people. I focus on FullStack web Technologies but also aim to keep growing to other sectors of the software tech industry!
        </p>
    </section>
  )
}
