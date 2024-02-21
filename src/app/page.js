import Image from "next/image";
import styles from "./home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Create thought agency.</h1>
        <p className={styles.description}>Lorem, </p>
        <div className={styles.btns}>
          <button className={styles.btn}>Learn more</button>
          <button className={styles.btn}>Contact</button>
        </div>
        <div className={styles.brand}>
          <Image  className= {styles.brandImg} src="/brands.png" alt="brand image" fill />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image  className= {styles.heroImg} src="/hero.gif" alt="hero image" fill />
      </div>
    </div>
  );
}
