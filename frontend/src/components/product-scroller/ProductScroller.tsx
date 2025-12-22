import { useState, useEffect } from "react"
import axios from "axios"

type ProductScrollerProps = {
  category: string
}

interface Product {
  id: number
  title: string
  brand: string
  price: number
}

export default function ProductScroller({ category }: ProductScrollerProps) {
  const [products, setProducts] = useState<Product[]>([])

  const productsPerCategory = async (category: string) => {
    try {
      const res = await axios.get(
        "http://localhost:3000/products/category/by-name",
        {
          params: { name: category }
        }
      )
      setProducts(res.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    productsPerCategory(category)
  }, [category])

  return (
    <section>
      <h1>{category}</h1>
      {products.map(product => (
        <p key={product.id}>{product.title}</p>
      ))}
    </section>
  )
}
