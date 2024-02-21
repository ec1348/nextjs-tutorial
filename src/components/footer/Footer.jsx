import styles from "./footer.module.css"
const Footer = () => {
    return(
        <div className={styles.container}>
            <div className={styles.logo}> Eric Dev</div>
            <div className={styles.text}> Eric Dev All Right Reserved</div>
        </div>
    )
}

export default Footer