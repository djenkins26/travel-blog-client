import { Link, Redirect, withRouter } from 'react-router-dom'
import React, { Component } from 'react'
import axios from 'axios'
import messages from '../AutoDismissAlert/messages'

// import { showBlog } from '../../api/blog'
import apiUrl from '../../apiConfig'
import Layout from '../../components/BlogCreate/Layout'

class BlogShow extends Component {
  constructor (props) {
    super(props)

    this.state = {
      blog: null,
      deleted: false
    }
  }

  // onShowBlog = event => {
  //   event.preventDefault()
  //
  //   const { msgAlert, user } = this.props
  //
  //   showBlog(user, this.props.match.params.id)
  //     .then((res => this.setState({ blog:  }))
  //     .then(() => msgAlert({
  //       heading: 'Show Blog Success',
  //       message: messages.showBlogSuccess,
  //       variant: 'success'
  //     }))
  //     .catch(error => msgAlert({
  //       heading: 'Show blog failed with error: ' + error.message,
  //       message: messages.showBlogFailure,
  //       variant: 'danger'
  //     }))
  // }

  componentDidMount () {
    const { msgAlert, user, match } = this.props
    axios({

      url: `${apiUrl}/blog_posts/${match.params.id}/`,
      headers: {
        'Authorization': `Token ${user.token}`
      },
      method: 'GET'
    })
      .then(res => this.setState({ blog: res.data }))
      .then(() => msgAlert({
        heading: 'Show Blog Success',
        message: messages.showBlogSuccess,
        variant: 'success'
      }))
      .catch(error => msgAlert({
        heading: 'Show blog failed with error: ' + error.message,
        message: messages.showBlogFailure,
        variant: 'danger'
      }))
  }

destroy = () => {
  axios({
    url: `${apiUrl}/blog_posts/${this.props.match.params.id}`,
    method: 'DELETE'
  })
    .then(() => this.setState({ deleted: true }))
    .catch(console.error)
}

render () {
  const { blog, deleted } = this.state

  if (!blog) {
    return <p>Loading...</p>
  }

  if (deleted) {
    return <Redirect to={
      { pathname: '/', state: { msg: 'Blog successfully deleted!' } }
    } />
  }

  return (
    <Layout>
      <h4>{blog.place}</h4>
      <p>Description: {blog.description}</p>
      <button onClick={this.destroy}>Delete Blog</button>
      <Link to={`/blog_posts_show/${this.props.match.params.id}/edit`}>
        <botton>Edit</botton>
      </Link>
      <Link to='/blog_posts'>Back to blog posts</Link>
    </Layout>
  )
}
}

export default withRouter(BlogShow)
