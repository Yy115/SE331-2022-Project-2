import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://54.234.147.205:8080',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
export default apiClient
