import React from 'react'

import Nav from 'react-bootstrap/Nav'

const UpdateLayout = props => (
  <div>
    <h1>Update Blog Post</h1>
    <Nav />

    {props.children}

  </div>
)

export default UpdateLayout
