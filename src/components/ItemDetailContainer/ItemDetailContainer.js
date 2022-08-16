import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { dataBase } from '../../services/firebase'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState()
    const [loadingProduct, setLoadingProduct] = useState (true)

    const { productId } = useParams()

    useEffect( () => {
        
        getDoc(doc(dataBase, 'products', productId)).then(response => {

            const dataProduct =  response.data()

            const convertedProduct = {id: response.id, ...dataProduct}

            setProduct(convertedProduct)

        }).catch(error => {

            console.log(error)

        }).finally(() => {
          setLoadingProduct(false)  
        })

    }, [productId])

    
    if(loadingProduct){
        return <h1>Cargando...</h1>
    }

    return (
        
        <div className='itemDetailContainer'>
            <ItemDetail  {...product}/>
        </div>
    )
}

export default ItemDetailContainer
