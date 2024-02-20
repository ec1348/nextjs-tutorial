import Link from "next/link"

const Notfound = () => {
    return (
        <div>
            <h1>Oops, not found your page!</h1>
            <p>Please rediret to home</p>
            <Link href="/">Return Home</Link>
        </div>
    )
}

export default Notfound