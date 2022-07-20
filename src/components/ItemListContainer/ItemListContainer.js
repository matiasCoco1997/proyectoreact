import './ItemListContainer.css'
import Product from '../Product/Product'
const ItemListContainer = ({greeting}) => {
  
    return (

        <div className="principal-content">

          <h2>{greeting}</h2>

          <div className="listOfProducts">
            <Product>Producto 1</Product>
            <Product>Producto 2</Product>
            <Product>Producto 3</Product>
            <Product>Producto 4</Product>
            <Product>Producto 5</Product>
            <Product>Producto 6</Product>
            <Product>Producto 7</Product>
            <Product>Producto 8</Product>
            <Product>Producto 9</Product>
          </div>

        </div>
        
    )
}

export default ItemListContainer