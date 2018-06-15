import React from 'react';
import { connect } from 'react-redux';
import Blog from './Blog';

const filtered = (blogs, filter) => {
  switch (filter) {
    case 'All':
      return blogs;
    case 'New':
      return blogs.filter( t => !t.complete )
    case 'Read':
      return blogs.filter( t => t.complete )
  }
}

const BlogList = ({ blogs, filter }) => (
 <h2>
    { filtered(blogs, filter).map( (t) => {
        return ( <Blog key={t.id} {...t} /> )
      })
    }
</h2>
)

const mapStateToProps = (state) => {
  return { blogs: state.blogs, filter: state.filter }
}

export default connect(mapStateToProps)(BlogList)