import Image from "next/image"
import styles from "./singlePost.module.css"

const SinglePostPage = () => {
    return(
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/19952291/pexels-photo-19952291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill className={styles.img} />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}> title </h1>
                <div className={styles.detail}>
                    <Image src="https://images.pexels.com/photos/19952291/pexels-photo-19952291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width={50} height={50}  className={styles.avatar}/>

                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailVale}>Eric Chen</span>
                    </div>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Publish</span>
                        <span className={styles.detailVale}>02.21.2024</span>
                    </div>
                </div>
                <div className={styles.content}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed fugiat molestias aperiam quia pariatur obcaecati, molestiae animi necessitatibus sit perferendis! Quia, accusantium a nihil rem beatae cumque maiores odit quis.
                </div>
            </div>
        </div>
    )
}

export default SinglePostPage