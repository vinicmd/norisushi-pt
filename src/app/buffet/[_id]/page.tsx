'use client'

import {api} from '@/services/api'
import {useEffect, useState} from 'react'

export default function Page({params}: {params: {_id: string}}) {
  const [order, setOrder] = useState<Order>({
    __v: 0,
    _id: params._id,
    table: '',
    createdAt: '',
    products: [],
    status: 'CLOSED',
    contributor: 0,
  })
  useEffect(() => {
    async function generateStaticParams() {
      try {
        const order = await api(`/orders/${params._id}`)
        setOrder(order.data[0])
      } catch (error: unknown) {
        console.log(error)
      }
    }
    generateStaticParams()
  }, [params._id])
  return <div>My Post: {order._id}</div>
}
