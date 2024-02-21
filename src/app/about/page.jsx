import Image from "next/image"
import styles from "./about.module.css"

const AboutPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.title}> About agency</h2>
                <h1 className={styles.subtitle}>We create digital ideas that are bigger, bolder, braver and better.</h1>
                <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ut, reiciendis ipsum excepturi illum nemo voluptate, ab assumenda earum repellat commodi libero suscipit harum dolorum eveniet error aut dolorem. Repellendus!</p>
                <div className={styles.boxs}>
                    <div className={styles.box}>
                        <h1> 10K </h1>
                        <p> year of experience</p>
                    </div>
                    <div className={styles.box}>
                        <h1> 10K </h1>
                        <p> year of experience</p>
                    </div>
                    <div className={styles.box}>
                        <h1> 10K </h1>
                        <p> year of experience</p>
                    </div>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image
                    src="/about.png"
                    alt="about image"
                    fill
                    className={styles.img}
                />
            </div>
        </div>
    )
}

export default AboutPage