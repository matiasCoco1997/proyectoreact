import Counter from '../Counter/Counter'
import './Item.css'


const Item = ({product}) => {

    const handleOnAdd = (quantity) =>{
         console.log('La cantidad agregada es:'+ quantity)
    }

    return (

        <li className="itemContainer" key= {product.id}>

            <img className="imgProduct" src={product.image} alt={product.alt}></img>

            <h3 className="titleOfProduct">{product.name}</h3>

            <h3 className="priceOfProduct">{product.price}$</h3>

            <p className="stock">Unidades disponibles: {product.stock}</p>

            <Counter onAdd={handleOnAdd} stock={product.stock}/>        

        </li>
    )
}

export default Item