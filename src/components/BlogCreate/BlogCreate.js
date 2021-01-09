import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import { createBlog } from '../../api/blog'
import messages from '../AutoDismissAlert/messages'

import apiUrl from '../../apiConfig'
import BlogForm from './BlogForm'
import Layout from './Layout'

class BlogCreate extends Component {
  constructor (props) {
    super(props)

    this.state = {
      blog: {
        place: '',
        description: ''
      },
      createdBlogId: null
    }
  }

  handleChange = event => {
    event.persist()

    this.setState(preState => {
      const updatedField = { [event.target.name]: event.target.value }

      const editedBlog = Object.assign(this.state.blog, updatedField)

      return { blog: editedBlog }
    })
  }

  onCreateBlog = event => {
    event.preventDefault()

    const { msgAlert, user, history } = this.props

    createBlog(this.state, user)
      .then(res => user(res.data.user))
      .then(() => msgAlert({
        heading: 'Create Blog Success',
        message: messages.createBlogSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/blog_posts_index'))
      .catch(error => {
        this.setState({ place: '', description: '' })
        msgAlert({
          heading: 'Create blog failed with error: ' + error.message,
          message: messages.createBlogFailure,
          variant: 'danger'
        })
      })
  }

  handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/blog_posts/`,
      headers: {
        'Authorization': `Token ${this.props.user.token}`
      },
      method: 'POST',
      data: { blog: this.state.blog }
    })
      .then(res => this.setState({ createdBlogId: res.data.blog._id }))
      .catch(console.error)
  }

  render () {
    const { handleChange, handleSubmit } = this
    const { createdBlogId, blog } = this.state

    if (createdBlogId) {
      return <Redirect to={`/blog_posts_index/${createdBlogId}`} />
    }

    return (
      <Layout>
        <BlogForm
          blog={blog}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath="/"
        />
      </Layout>
    )
  }
}
export default BlogCreate
