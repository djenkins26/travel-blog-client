import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'

import messages from '../AutoDismissAlert/messages'

import apiUrl from '../../apiConfig'
import BlogForm from '../BlogCreate/BlogForm'
import UpdateLayout from './UpdateLayout'

class BlogUpdate extends Component {
  constructor (props) {
    super(props)

    this.state = {
      blog: {
        place: '',
        description: ''
      },
      updated: false
    }
  }

  // componentDidMount () {
  //   axios(`${apiUrl}/blog_posts/${this.props.match.params.id}`)
  //     .then(res => this.setState({ blog: res.data }))
  //     .catch(console.error)
  // }

  handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }

    const editedBlog = Object.assign(this.state.blog, updatedField)

    this.setState({ blog: editedBlog })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { msgAlert } = this.props

    axios({
      url: `${apiUrl}/blog_posts/${this.props.match.params.id}/`,
      headers: {
        'Authorization': `Token ${this.props.user.token}`
      },
      method: 'PATCH',
      data: { blog: this.state.blog }
    })
      .then(() => this.setState({ updated: true }))
      .then(() => msgAlert({
        heading: 'Update Blog Success',
        message: messages.updateBlogSuccess,
        variant: 'success'
      }))
      .catch(error => {
        this.setState({ place: '', description: '' })
        msgAlert({
          heading: 'Update blog failed with error: ' + error.message,
          message: messages.updateBlogFailure,
          variant: 'danger'
        })
      })
      .catch(console.error)
  }

  render () {
    const { blog, updated } = this.state
    const { handleChange, handleSubmit } = this

    if (updated) {
      return <Redirect to={'/blog_posts_index/'} />
    }

    return (
      <UpdateLayout>
        <BlogForm
          blog={blog}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath={`/blog_posts_show/${this.props.match.params.id}`}
        />
      </UpdateLayout>
    )
  }
}
export default withRouter(BlogUpdate)
