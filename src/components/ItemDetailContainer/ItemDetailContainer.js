import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProductById } from '../../asyncMock'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState()

    const { productId } = useParams()

    useEffect( () => {
        
        getProductById(productId)

            .then (product => { 
                setProduct(product)
            })

            .catch (error => { 
                console.log(error)
            })

    })

 
    return (
        
        <div className='itemDetailContainer'>
            <ItemDetail  {...product}/>
        </div>
    )
}

export default ItemDetailContainer
