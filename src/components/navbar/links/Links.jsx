"use client"
import Image from "next/image";
import styles from "./links.module.css"
import Navlink from "./navlink/Navlink"
import { useState } from "react"; 

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
const Links = () => {
    const [open, setOpen] = useState(false)
    const session = true;
    const isAdmin = true;
    return(
        <div className={styles.container}>
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
            <Image 
                src="/menu.png"     
                alt=""  
                width={30} 
                height={30} 
                onClick={()=>setOpen((prev)=> !prev)} 
                className={styles.menuBtn}
            />
            {open && (
                <div className={styles.mobileLinks}>
                    {links.map((link, index) => {
                        return <Navlink item={link} key={index} />
                    })}
                </div>
            )}
        </div>
    )
}
export default Links