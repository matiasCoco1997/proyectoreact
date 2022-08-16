import './Item.css'
import { Link } from 'react-router-dom'



const   Item = ({product}) => {

    const handleOnClick = (e) =>{
        e.stopPropagation()
    }

    return (

        <li className="itemContainer" key= {product.id} onClick={handleOnClick}>
            
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
            
            <div className='viewDetailZone'>
                <Link to={`/detail/${product.id}`}   className='viewDetail-btn'>
                    <p>Ver detalle</p>
                </Link>   
            </div>
            

        </li>
    )
}

export default Item