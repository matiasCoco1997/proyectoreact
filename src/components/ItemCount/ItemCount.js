import './ItemCount.css'
import {useEffect, useState} from 'react'

const ItemCount = ({ onAdd, stock = 0, initial = 1}) => {
    
    const [quantity, setQuantity] = useState(initial);

    useEffect(() => {
        setQuantity(initial)
    }, [initial])

    const increment = () => {
        if(quantity < stock){
            setQuantity(quantity + 1);
        }
    }

    const decrement = () => {
        if(quantity > 1 ){
            setQuantity(quantity - 1);
        }
    }


    return (

        <>
            <div className='lessButtonZoneDetail'>
                <button onClick ={decrement} className='buttonTakeOffDetail'>
                    <img src='https://i.ibb.co/G238RkC/less.png' alt='takeOffArrow'/>
                </button>
            </div>

            <div className='countZoneDetail'>
                <h3 className='countDetail'>{quantity}</h3>
            </div>

            <div className='addButtonZoneDetail'>
                <button onClick ={increment} className='buttonAddProductDetail'>
                    <img src='https://i.ibb.co/dJH28XP/add.png' alt='add button'/>
                </button>
            </div>

            <div className='addToCartZoneDetail'>
                <button onClick = {() => onAdd(quantity)} className='buttonAddToCartDetail'>Agregar al carrito</button>
            </div>

        </>
    )

}

export default ItemCount



