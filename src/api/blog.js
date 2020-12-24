import apiUrl from '../apiConfig'
import axios from 'axios'

export const createBlog = (user, form) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/blog_posts/',
    headers: {
      Authorization: `Token ${user.token}`
    },
    data: {
      blog: {
        place: form.place,
        description: form.description
      }
    }
  })
}

export const indexBlog = user => {
  return axios({
    method: 'GET',
    url: apiUrl + '/blog_posts/',
    headers: {
      Authorization: `Token ${user.token}`
    }
  })
}
