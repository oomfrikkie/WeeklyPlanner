import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import "./productscroller.css"

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
  const navigate = useNavigate()

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

      <div className="product-scroller">
        {products.map(product => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <div className="product-image-wrapper">
              <img src="OneFifty.png" alt="" className="scroller-product-image"
/>

            </div>

            <h2>{product.title}</h2>
            <p>€{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
