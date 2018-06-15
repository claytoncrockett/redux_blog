import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { toggleBlog, deleteBlog, editBlog } from './actions/blogs'

const Blog = ({ id, name, complete, dispatch }) => (
    <Fragment>
      <h3 class="rainbow"
          style={ complete ? { textDecoration: 'line-through', color: 'red', opacity: '.4' } : {} }
        >
          {name}
      </h3>
      <button class="btn blue" onClick={() => dispatch(toggleBlog(id))}>Mark as Read</button>
      <button class="btn red" onClick={() => dispatch(deleteBlog(id))}>Delete</button>
      <button class="btn green" onClick={() => dispatch(editBlog(id))}>Edit</button>
  </Fragment>
)

export default connect()(Blog)