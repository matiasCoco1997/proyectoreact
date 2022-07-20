// import { useState} from 'react'
// import Cartwidget from '../Cartwidget/Cartwidget'
import './Product.css'

const Product = (props) => {

    return (

        <div className="productContainer">
            <h3>{props.children}</h3>
            
            {/* <div>
                <img src="" alt=""/>
                <button className="add-btn">Agregar al carrito</button>
                <button className="takeOff-btn">Quitar del carrito</button> 
            </div> */}
            
        </div>
    )
}

export default Product