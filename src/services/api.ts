import {urlResolver} from '@/utils/urlResolver'
import axios from 'axios'

const url = urlResolver()
const authorization = process.env.NEXT_PUBLIC_AUTHORIZATION
console.log(process.env.NODE_ENV)

export const api = axios.create({
  baseURL: url,
  timeout: 5000,

  headers: {
    Authorization: authorization,
  },
})
