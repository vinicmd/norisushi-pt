'use client'

import {useEffect, useState} from 'react'
import {useRouter} from 'next/navigation'

import {api} from '@/services/api'
import styles from '@/app/buffet/[_id]/styles.module.css'

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
        setOrder(order)
        if (order.status !== 'OPEN') return router.replace('/')
      } catch (error: unknown) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
    generateStaticParams()
  }, [params._id, router])
  return !isLoading && <div className={styles.buffet}>My Post: {order._id}</div>
}
