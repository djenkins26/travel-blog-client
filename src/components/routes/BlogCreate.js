import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

class BlogCreate extends Component {
  constructor (props) {
    super(props)

    this.state = {
      blog: {
        place: '',
        description: ''
      },
      createdId: null
    }
  }
handleInputChange = (event) => {
  event.persist()
  this.setState(prevState => {
    const updatedField = {
      [event.target.name]: event.target.value
    }
    const updatedData = Object.assign({}, prevState.blog, updatedField)
    return { blog: updatedData }
  })
}
handleSubmit = (event) => {
  event.preventDefault()
  axios({
    url: `${apiUrl}/create-blog`,
    method: 'post',
    data: { blog: this.state.blog }
  })
    .then(response => {
      this.setState({ createdId: response.data.blog._id })
    })
    .catch(console.error)
}

render () {
  if (this.state.createdId) {
    return <Redirect to={`/create-blog/${this.state.createdId}`}/>
  }
  return (
    <div>
      <h1>Blog Post Create Page</h1>
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Input Place Here"
          name="place"
          value={this.state.blog.place}
          onChange={this.handleInputChange}
        />
        <input
          placeholder="Describe Your Experience"
          name="description"
          value={this.state.blog.description}
          onChange={this.handleInputChange}
        />
        <button type="submit">Create Travel Blog Post</button>
      </form>
    </div>
  )
}
}
export default BlogCreate
