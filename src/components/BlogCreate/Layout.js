import React from 'react'

import Nav from 'react-bootstrap/Nav'
import Footer from './Footer'

const Layout = props => (
  <div>
    <h1>Create a Blog Post</h1>
    <Nav />

    {props.children}

    <Footer />
  </div>
)

export default Layout
