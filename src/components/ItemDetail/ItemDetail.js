import './ItemDetail.css'
import { useState, useContext} from 'react'
import CartContext from '../../context/CartContext'
import {Link} from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ( {id, name, price, category, image, alt, stock, description}) => {

    const [quantityToAdd, setQuantityToAdd] = useState(0)

    const { addItem, getProductQuantity } = useContext(CartContext)

    const handleOnAdd = (quantity) =>{
       
        if(quantity > stock){

            alert('No es posible agregar la cantidad de productos deseados al carrito.')
        }

        else{

            setQuantityToAdd(quantity)

            const productToAdd = {
    
                id, name, price, quantity, image, alt
            }
            
            addItem(productToAdd)
        }
        

   }

   const productQuantity = getProductQuantity(id)
   

    return (
       <div className="detailItem">

            <div className="nameZoneDetail">
                <h1 className='nameOfProductDetail'>{name}</h1> 
            </div>

            <div className="priceZoneDetail">
                <h2 className='priceOfProductDetail'>Precio: {price}$</h2>
            </div>

            <div className="imgZoneDetail">
                <img src={image} alt={alt}/>
            </div>

            <div className="stockZoneDetail">
                <h3 className='stockOfProductDetail'>Stock: {stock}</h3>
            </div>
            
            <div className="categoryZoneDetail">
                <h3 className='categoryOfProductDetail'>Categoria: {category}</h3>
            </div>

            <div className="descriptionZoneDetail">
                <p className='descriptionOfProductDetail'>{description}</p>
            </div>  

            {
                quantityToAdd === 0 ? 
                
                (<ItemCount onAdd={handleOnAdd} stock={stock} initial={productQuantity}/>)

                : 

                (<Link to='/cart' className='confirmButton'>Finalizar compra</Link>)
            }
            
              
       </div>

    )
}

export default ItemDetail