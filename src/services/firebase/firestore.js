import { getDocs, collection, query, where } from 'firebase/firestore'
import { dataBase } from './index'

export const getProducts = (categoryId) => {

    const colletctionOfProducts = !categoryId ? collection(dataBase, 'products') : query(collection(dataBase, 'products'), where('category', '==', categoryId))

    return getDocs(colletctionOfProducts).then(response => {

      const Convertedproducts = response.docs.map(doc => {

        const dataProduct =  doc.data()

        return { id: doc.id , ...dataProduct }
      })

      return (Convertedproducts)

    }).catch(error => {

      return (error)
      
    })
}