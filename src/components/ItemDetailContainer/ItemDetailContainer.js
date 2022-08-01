import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProductById } from '../../asyncMock'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState()

    const {productId} = useParams()

    useEffect( () => {
        

        getProductById(productId)
            .then (product => {
                setProduct(product)
            })
            .catch (error => {
                console.log(error)
            })
    }, [productId])

    return (
        <div className='prueba'>
            <h1 className='prueba2'>Detalle</h1>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer
