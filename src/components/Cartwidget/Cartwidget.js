// import { useState} from 'react'

import './Cartwidget.css'

const Cartwidget = () => {

    // const [count, setCount] = useState(0);

    // const increment = () => {
    //     setCount(count + 1);
    // }

    // const decrease = () => {

    //     if(count >= 1){
    //         setCount(count - 1);
    //     }

    //     else{
    //         alert("no hay productos para sacar del carrito");
    //     }
      
    // }

    return (

        <div className="cartContainer">

            <img src="./images/cart.png" alt="CartWidget"/>

            <div className="circle">
                <p>10</p>
            </div>
            
        </div>
        
    )
}

export default Cartwidget