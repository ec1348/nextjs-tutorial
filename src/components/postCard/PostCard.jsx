import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"

const PostCard = () => {
    return(
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="https://images.pexels.com/photos/19952291/pexels-photo-19952291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill className={styles.img} />
                </div>
                <span className={styles.date}>02.21.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>title</h1>
                <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, nemo. Nihil voluptatum perferendis tempora repudiandae in, earum atque voluptatibus molestias architecto optio qui dolor natus neque eum ad nulla adipisci.</p>
                <Link href="/blog/post" className={styles.link}> Read more</Link>
            </div>
        </div>
    )
}

export default PostCard