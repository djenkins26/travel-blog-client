import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'

class BlogsIndex extends Component {
  constructor (props) {
    super(props)

    this.state = {
      blogs: []
    }
  }

  componentDidMount () {
    axios({

      url: `${apiUrl}/blog_posts/`,
      headers: {
        'Authorization': `Token ${this.props.user.token}`
      },
      method: 'GET'
    })
      .then(res => this.setState({ blogs: res.data }))
      .catch(console.error)
  }

  render () {
    let blogs
    if (!this.state.blogs) {
      blogs = 'Loading...'
    } else if (this.state.blogs.length === 0) {
      blogs = 'No blogs created yet'
    } else {
      blogs = this.state.blogs.map(blog => (
        <li key={blog.id}>
          <Link to={`/blog_posts_show/${blog.id}`}>{blog.place}</Link>
        </li>
      ))
    }

    return (
      <div>
        <h2>Blog Posts</h2>
        {blogs}
      </div>
    )
  }
}

export default BlogsIndex
