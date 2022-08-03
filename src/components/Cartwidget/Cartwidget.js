// import { useState} from 'react'

import './Cartwidget.css'

const Cartwidget = () => {

    return (

        <div className="cartContainer">

            <img className="cart-nav" src="https://i.ibb.co/fYHTNH4/cart.png" alt="CartWidget"/>

            <div className="circle">
                <p className="countProductsCart">10</p>
            </div>
            
        </div>
        
    )
}

export default Cartwidget