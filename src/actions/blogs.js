export const addBlog = (blog) => {
  return { type: 'ADD_BLOG', blog }
}

export const toggleBlog = (id) => {
  return { type: 'TOGGLE_BLOG', id }
}

export const deleteBlog = (id) => {
  return { type: 'DELETE_BLOG', id}
}
export const editBlog = (id) => {
  return { type: 'EDIT_BLOG', id}
}