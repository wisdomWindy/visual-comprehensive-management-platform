import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.PROD ? '/api' : '',
  timeout: 5000,
})

export default instance