'use client'

import {useEffect, useState} from 'react'
import {useRouter} from 'next/navigation'

import {api} from '@/services/api'
import styles from '@/app/buffet/[_id]/styles.module.css'
import {Loading} from '@/components/Loading'
import {AxiosError} from 'axios'

export default function Page({params}: {params: {_id: string}}) {
  const [isLoading, setIsLoading] = useState(true)
  const [order, setOrder] = useState<Order>({
    __v: 0,
    _id: params._id,
    table: '',
    createdAt: '',
    products: [],
    status: 'CLOSED',
    contributor: 0,
  })

  /*   const productSchema = {
    product: {
      name: 'ProductName',
      type: '',
    },
    quantity: 3,
    createdAt: 'string',
    closedAt: 'string',
    status: 'InProgress',
  } */

  const router = useRouter()

  useEffect(() => {
    async function generateStaticParams() {
      try {
        const response = await api.get(`/orders/${params._id}`)
        const order = response.data[0] as Order
        if (order.status !== 'OPEN') return router.push('/')
        setOrder(order)
      } catch (error: unknown) {
        const {response} = error as AxiosError
        if (response?.status === 404) return router.push('/')
      } finally {
        setIsLoading(false)
      }
    }
    generateStaticParams()
  }, [order.status, params._id, router])
  return isLoading ? (
    <Loading />
  ) : (
    <div className={styles.buffet}>My Post: {order._id}</div>
  )
}
