import './ItemListContainer.css'
import '../Item/Item.css'
import { useState, useEffect} from 'react'
import { getProducts} from '../../asyncMock'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = ({greeting}) => {
  
  const [products, setProducts] = useState ([])

  useEffect(() => {

    getProducts().then(products => {
      setProducts(products)
    })

  }, []) 

    return (

        <div className="principal-content">

          <h2>{greeting}</h2>
          <ItemList products={products} />

        </div>
        
    )
}

export default ItemListContainer