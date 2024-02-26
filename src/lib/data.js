// Temporary data

const users = [
  { id: 1, name: "Eric Chen"},
  { id: 2, name: "Peter Chen"},
  { id: 3, name: "Duke Chen"},
  { id: 4, name: "Anne Chen"},
  { id: 5, name: "Mary Chen"},
  { id: 6, name: "Nica Chen"},
]

const posts = [
  { id: 1, title: "Post Title", body: ".........", userId: 1},
  { id: 2, title: "Post Title", body: ".........", userId: 2},
  { id: 3, title: "Post Title", body: ".........", userId: 5},
  { id: 4, title: "Post Title", body: ".........", userId: 6},
  { id: 5, title: "Post Title", body: ".........", userId: 3},
  { id: 6, title: "Post Title", body: ".........", userId: 4},
]

export const getPosts = async () => {
  return posts
}

export const getPost = async (id) => {
  return posts.find((post) => post.id === parseInt(id))
}

export const getUser = async (id) => {
  return users.find((user) => user.id === parseInt(id))
}