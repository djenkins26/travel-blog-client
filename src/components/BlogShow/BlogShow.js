// import React, { Component } from 'react'
// import { Redirect } from 'react-router-dom'
// import axios from 'axios'
//
// import apiUrl from '../../apiConfig'
//
// class BlogShow extends Component {
//   constructor () {
//     super()
//     this.state = {
//       blog: null,
//       deleted: false
//     }
//   }
//   componentDidMount () {
//     axios(apiUrl + '/blog_posts/' + this.props.match.id)
//       .then(response => {
//         this.setState({ blog: response.data.blog })
//       })
//       .catch(console.error)
//   }
//
//
// // <Link to={'/update-book/' + this.props.match.params.id}>Update Book</Link> goes after deletebutton
//
// export default BlogShow
