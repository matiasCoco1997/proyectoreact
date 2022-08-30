import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../services/firebase/firestore'
import { useAsync } from '../hooks/useAsync'

const ItemListContainer = () => {


  const { categoryId } = useParams()

  const getProductsFromFirestore = () => getProducts(categoryId)

  const{ information, error, isLoading } = useAsync( getProductsFromFirestore , [categoryId])


  if(isLoading){

    return <h1 className='titleGreeting'>Cargando productos...</h1>

  }

  if(error){

    return <h1 className='titleGreeting'>Hubo un error</h1>
  }

  return (

    <div className="principal-content">
          
      <h2 className='titleGreeting'>{categoryId}</h2>

      <ItemList products={information} />

    </div>
        
  )
}

export default ItemListContainer