import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProductById } from '../../asyncMock'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect( () => {
        
        getProductById(productId).then (product => { 
                setProduct(product)
            }).finally(() => {

                setLoading(false)
            })
    }, [productId])

    
    if(loading){
        return <h1>Cargando...</h1>
    }

    return (
        
        <div className='itemDetailContainer'>
            <ItemDetail  {...product}/>
        </div>
    )
}

export default ItemDetailContainer
