import Image from "next/image"
import styles from "./singlePost.module.css"
import PostUser from "@/components/postUser/PostUser"
import { Suspense } from "react"


const getPost = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {cache:"no-store"})
    if(!res.ok){
        throw new Error('Something is wrong') 
    }
    return res.json()
}

const SinglePostPage = async ({params}) => {
    const { id } = params
    const post = await getPost(id)
    return(
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/19952291/pexels-photo-19952291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill className={styles.img} />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.detail}>
                    <Image src="https://images.pexels.com/photos/19952291/pexels-photo-19952291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width={50} height={50}  className={styles.avatar}/>
                    <Suspense fallback={<div>loading...</div>}>
                        <PostUser userId={post.userId} />
                    </Suspense>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Publish</span>
                        <span className={styles.detailVale}>02.21.2024</span>
                    </div>
                </div>
                <div className={styles.content}>{post.body}</div>
            </div>
        </div>
    )
}

export default SinglePostPage