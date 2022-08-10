import { useContext} from 'react'
import CartContext from '../../context/CartContext'

import './Cartwidget.css'

const Cartwidget = () => {

    const {getQuantity} = useContext(CartContext)

    const quantity = getQuantity()

    return (

        <div className="cartContainer">

            <img className="cart-nav" src="https://i.ibb.co/fYHTNH4/cart.png" alt="CartWidget"/>

            <div className="circle">
                <p className="countProductsCart">{quantity}</p>
            </div>
            
        </div>
        
    )
} 

export default Cartwidget