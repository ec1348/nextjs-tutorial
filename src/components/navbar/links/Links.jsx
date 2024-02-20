import styles from "./links.module.css"
import Navlink from "./navlink/Navlink"

const Links = () => {
    let links = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Blog",
            path: "/blog"
        },
        {
            title: "Contact",
            path: "/contact"
        }
    ]
    const session = true;
    const isAdmin = true;
    return(
        <div className={styles.links}>
            {links.map((link, index) => {
                return <Navlink item={link} key={index}/>
            })}
            {session ?
            isAdmin && <><Navlink item={{title: "Admin", path: "/admin"}}/>
            <button className={styles.logoutBtn}>Logout</button></>
             :
             <Navlink item={{ title: "Login", path: "/login"}} />
            }
        </div>
    )
}
export default Links