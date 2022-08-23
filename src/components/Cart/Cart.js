import './Cart.css'
import CartContext from "../../context/CartContext"
import { useContext} from "react"
import { Link } from 'react-router-dom'

const Cart = ()=>{

    const { cart, removeItem, clearCart, getQuantity, totalToPay } = useContext(CartContext)

    let productsInCart = getQuantity()

    let totalPrice = totalToPay();

    return (

        <div className='cart'>

            <div className='titles-addedProducts'>
                <div>PRODUCTO</div>
                <div>DESCRIPCIÓN</div>
                <div>UNIDADES</div>
                <div>PRECIO UNITARIO</div>
                <div>SUBTOTAL</div>
            </div>

            {productsInCart === 0 && 
                <div className='emptyCart'>

                    <h2>El carrito se encuentra vacio</h2>
                    <Link to="/" className='returnToBuy'>Volver a comprar</Link>

                </div>
            }

            {cart.map(prod => 
        
                <div key={prod.id} className="productContainer">

                    <div className='cartImg'> 
                        <img src={prod.image} alt={prod.description}/>
                    </div>


                    <div className='cartDescripcion'>
                        <h3>
                            {prod.name}
                        </h3> 
                    </div>

                    <div className='cartQuantity'>
                        <h3>
                          {prod.quantity}
                        </h3> 
                    </div>

                    <div className='priceCartProduct'>
                        <h3>
                            {prod.price} $
                        </h3> 
                    </div>

                    <div className='priceTotalProduct'>
                        <h3>
                            {prod.price * prod.quantity} $
                        </h3> 
                    </div>

                    <div className='cartButton'>
                        <button onClick={() => removeItem(prod.id)}>Quitar del carrito</button>
                    </div>
                </div>
            )}  

            <div className='cartFooter'>

                <div> 
                    <h2>
                        Cantidad de productos agregados al carrito: {productsInCart}
                    </h2>

                    <h2>
                        Total a pagar: {totalPrice} $
                    </h2>
                </div>

                {productsInCart > 0 ? 
                
                    <div className='btnsContainerFinishBuy'>
                        <button className='clearCartBtn' onClick={() => clearCart()}>Vaciar Carrito</button>

                        <Link to='/checkout' className='checkoutBtn'>Checkout</Link>

                    </div> 
                
                : <></>}
                
                {/* <div className='btnsContainerFinishBuy'>
                    <button className='clearCartBtn' onClick={() => clearCart()}>Vaciar Carrito</button>

                    <Link to='/checkout' className='checkoutBtn'>Checkout</Link>
                </div> */}

                

            </div>

        </div>

        
        
    )

}

export default Cart