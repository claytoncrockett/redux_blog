import React from 'react';
import { connect } from 'react-redux';
import { incId } from './actions/nextId';
import { addBlog, editBlog } from './actions/blogs';

class BlogForm extends React.Component {
  state = { name: '' }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch, id } = this.props
    const { name } = this.state
    const blog = { name, id, complete: false }
    dispatch(addBlog(blog))
    dispatch(incId())
    this.setState({ name: '' })
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }

  render() {
    const { name } = this.state

    return (
      <div>
        <h3 class="blink_me purple">Add A Blog Post</h3>
        <form onSubmit={this.handleSubmit}>
          <textarea value={name} onChange={this.handleChange} />
          <button class="btn yellow">Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { id: state.nextId }
}

export default connect(mapStateToProps)(BlogForm);