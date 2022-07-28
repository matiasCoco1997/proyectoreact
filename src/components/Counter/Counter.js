import {useState, useEffect} from 'react'
const Counter = ({stock, onAdd})=>{

    const [count, setCount] = useState(1);

    useEffect(() => {

        return () => console.log('render')
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
            <div className='count-container'>

                    <button onClick ={decrement} className="takeOff-btn">
                        <img src='./images/less.png' alt='takeOffArrow'/>
                    </button>

                    <h3 className='count'>{count}</h3>  

                    <button onClick ={increment} className="add-btn">
                        <img src='./images/add.png' alt='add button'/>
                    </button>
    
            </div>

            <button onClick = {() => onAdd (count)} className="addToCart">Agregar al carrito</button>
        </>
    )

}

export default Counter

