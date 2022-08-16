import { useContext} from 'react'
import {Link} from 'react-router-dom'
import CartContext from '../../context/CartContext'

import './Cartwidget.css'

const Cartwidget = () => {

    const {getQuantity} = useContext(CartContext)

    const quantity = getQuantity()

    return (

        quantity > 0 && (
            <Link to='/cart' className="cartContainer">

                <img className="cart-nav" src="https://i.ibb.co/fYHTNH4/cart.png" alt="CartWidget"/>

                <div className="circle">
                    <p className="countProductsCart">{quantity}</p>
                </div>
                
            </Link>
        )
    )
} 

export default Cartwidget