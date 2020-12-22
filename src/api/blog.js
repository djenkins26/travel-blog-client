import apiUrl from '../apiConfig'
import axios from 'axios'

export const createBlog = (user, form) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/create-blog/',
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
