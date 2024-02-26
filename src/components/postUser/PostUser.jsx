import styles from "./postUser.module.css"

const getUser = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {cache:'no-store'})

  if(!res.ok){
    throw new Error('Something is wrong') 
  }
  return res.json()
}

const PostUser = async ({ userId }) => {
  
  const user = await getUser(userId)

  return (
    <div className={styles.container}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.name}</span>
    </div>
  )
}

export default PostUser