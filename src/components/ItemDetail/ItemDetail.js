import './ItemDetail.css'
import Counter from '../Counter/Counter'


const ItemDetail = ( {name, price, category, image, alt, stock, description}) => {

    const handleOnAdd = (quantity) =>{
        console.log('La cantidad agregada es:'+ quantity)
   }

    return (
       <div className="detailItem">

            <div className="nameZoneDetail">
                <h1 className='nameOfProductDetail'>{name}</h1> 
            </div>

            <div className="priceZoneDetail">
                <h2 className='priceOfProductDetail'>Precio: {price}$</h2>
            </div>

            <div className="imgZoneDetail">
                <img src={image} alt={alt}/>
            </div>

            <div className="stockZoneDetail">
                <h3 className='stockOfProductDetail'>Stock: {stock}</h3>
            </div>
            
            <div className="categoryZoneDetail">
                <h3 className='categoryOfProductDetail'>Categoria: {category}</h3>
            </div>

            <div className="descriptionZoneDetail">
                <p className='descriptionOfProductDetail'>{description}</p>
            </div>  

            <Counter 
            onAdd={handleOnAdd} stock={stock} 
            lessZone='lessButtonZoneDetail' 
            takeOffBtn='buttonTakeOffDetail' 
            countZone='countZoneDetail' 
            countItems='countDetail' 
            addZone='addButtonZoneDetail' 
            addBtn='buttonAddProductDetail' 
            addToCartZone='addToCartZoneDetail' 
            addToCart='buttonAddToCartDetail'/>
              
       </div>

    )
}

export default ItemDetail