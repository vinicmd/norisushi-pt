import {urlResolver} from '@/utils/urlResolver'
import axios from 'axios'

const url = urlResolver()
const authorization = process.env.NEXT_PUBLIC_AUTHORIZATION

export const api = axios.create({
  baseURL: url,
  timeout: 5000,

  headers: {
    Authorization: authorization,
  },
})
