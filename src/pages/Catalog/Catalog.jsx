import React from 'react'
import { Products } from '../../components'

const Catalog = () => {
  return (
    <div className="catalog">
        <div className="Catalog__container">
            <h1>Catalog</h1>
        </div>
        <div className="products" {Products.map((product) => <Product)}>
        </div>
    </div>
  )
}

export default Catalog