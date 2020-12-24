import React from 'react'
import { Link } from 'react-router-dom'

const BlogForm = ({ blog, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label>Place</label>
    <input
      placeholder="Place"
      value={blog.place}
      name="place"
      onChange={handleChange}
    />

    <label>Description</label>
    <input
      placeholder="Tell us about it!"
      value={blog.description}
      name="description"
      onChange={handleChange}
    />

    <button type="submit">Submit</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>
  </form>
)

export default BlogForm
