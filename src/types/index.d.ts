type Order = {
  __v: number
  _id: string
  table: string
  createdAt: string
  products: Array<Products>
  status: 'OPEN' | 'CLOSED' | 'DELETED'
  contributor?: number
}

type Product = {
  _id: string
  name: string
  price: number
  category: string
  description: string | undefined
  __v: number
}

type Category = {
  _id: string
  name: string
  icon: string
  __v: number
  order: number
}
