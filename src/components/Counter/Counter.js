import './Counter.css'
import {useState, useEffect} from 'react'
const Counter = ({stock, onAdd, lessZone, takeOffBtn, countZone, countItems, addZone, addBtn, addToCartZone, addToCart})=>{
    
    const [count, setCount] = useState(1);

    useEffect(() => {

        return () => console.log('Render contador')
    }, [count])

    const increment = () => {

        if(count < stock){
            setCount(count + 1);
        }
    }

    const decrement = () => {

        if(count > 1 ){
            setCount(count - 1);
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
                <h3 className={countItems}>{count}</h3>
            </div>

            <div className={addZone}>
                <button onClick ={increment} className={addBtn}>
                    <img src='https://i.ibb.co/dJH28XP/add.png' alt='add button'/>
                </button>
            </div>

            <div className={addToCartZone}>
                <button onClick = {() => onAdd (count)} className={addToCart}>Agregar al carrito</button>
            </div>

        </>
    )

}

export default Counter



