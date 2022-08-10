import './ItemCount.css'
import {useState, useEffect} from 'react'

const ItemCount = ({stock=0, initial=1, onAdd, lessZone, takeOffBtn, countZone, countItems, addZone, addBtn, addToCartZone, addToCart})=>{
    
    const [quantity, setQuantity] = useState(initial);

    useEffect(() => {

        return () => console.log('Render contador')
    }, [quantity])

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
            <div className={lessZone}>
                <button onClick ={decrement} className={takeOffBtn}>
                    <img src='https://i.ibb.co/G238RkC/less.png' alt='takeOffArrow'/>
                </button>
            </div>

            <div className={countZone}>
                <h3 className={countItems}>{quantity}</h3>
            </div>

            <div className={addZone}>
                <button onClick ={increment} className={addBtn}>
                    <img src='https://i.ibb.co/dJH28XP/add.png' alt='add button'/>
                </button>
            </div>

            <div className={addToCartZone}>
                <button onClick = {() => onAdd(quantity)} className={addToCart}>Agregar al carrito</button>
            </div>

        </>
    )

}

export default ItemCount



