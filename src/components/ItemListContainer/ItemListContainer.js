import './ItemListContainer.css'
import { useState, useEffect} from 'react'
// import { getProducts, getProductsByCategory} from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { dataBase } from '../../services/firebase'

const ItemListContainer = () => {

  const [products, setProducts] = useState ([])

  const [loadingProducts, setLoadingProducts] = useState (true)

  const { categoryId } = useParams()


  useEffect(() => {


    const colletctionOfProducts = !categoryId ? collection(dataBase, 'products') : query(collection(dataBase, 'products'), where('category', '==', categoryId))

    getDocs(colletctionOfProducts).then(response => {

      const Convertedproducts = response.docs.map(doc => {

        const dataProduct =  doc.data()

        return { id: doc.id , ...dataProduct }
      })

      setProducts(Convertedproducts)

    }).catch(error => {

      console.log(error)
      
    }).finally(() => {

      setLoadingProducts(false)
    })

  }, [categoryId]) 

  if(loadingProducts){

    return <h1 className='loading'>Cargando productos...</h1>

  }

    return (

        <div className="principal-content">
          
          <h2 className='titleGreeting'>{categoryId}</h2>

          <ItemList products={products} />

        </div>
        
    )
}

export default ItemListContainer