import Counter from '../Counter/Counter'
import './Item.css'
import { Link } from 'react-router-dom'


const   Item = ({product}) => {

    const handleOnAdd = (quantity) =>{
         console.log('La cantidad agregada es:'+ quantity)
    }

    return (

        <li className="itemContainer" key= {product.id}>
            
            <div className='imgZone'>
                <img className="imgProduct" src={product.image} alt={product.alt}/>
            </div>

            <div className='titleZone'>
                <h3 className="titleOfProduct">{product.name}</h3>
            </div>
            
            
            <div className='priceZone'>
                <h3 className="priceOfProduct">{product.price}$</h3>
            </div>

            <div className='stockZone'>
                <p className="stock">Unidades disponibles: {product.stock}</p>
            </div>
            
            <Counter 
            onAdd={handleOnAdd} stock={product.stock} 
            lessZone='lessZone' 
            takeOffBtn='takeOff-btn' 
            countZone='countZone' 
            countItems='count' 
            addZone='addZone' 
            addBtn='add-btn' 
            addToCartZone='addToCartZone' 
            addToCart='addToCart'/> 
            
            <div className='viewDetailZone'>
                <Link to={`/detail/${product.id}`}   className='viewDetail-btn'>
                    <p>Ver detalle</p>
                </Link>   
            </div>
            

        </li>
    )
}

export default Item