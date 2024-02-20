import Link from "next/link"

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
        },
        {
            title: "Admin",
            path: "/admin"
        }
    ]
    return(
        <div>
            {links.map((link, index) => {
                return <Link href={link.path} key={index}>{link.title}</Link>
            })}
        </div>
    )
}
export default Links