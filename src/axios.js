import axios from 'axios'
import config from '@/config'

const axiosConfig = {
  baseURL: config.apiURL,
  headers: {}
}

if (localStorage.cccToken) {
  axiosConfig.headers.Authorization = localStorage.cccToken
}

export default axios.create(axiosConfig)
