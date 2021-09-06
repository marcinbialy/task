import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `http://localhost:5050/` // endpoint servera
  })
}
