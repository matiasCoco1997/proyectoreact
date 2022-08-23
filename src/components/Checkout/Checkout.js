import './Checkout.css'
import CartContext from "../../context/CartContext"
import { useContext, useState } from 'react'
import { dataBase } from '../../services/firebase'
import { addDoc, collection,  getDocs, query, where, documentId, writeBatch } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {

    const [load, setLoad]  = useState(false)
    const [orderCreated, setOrderCreated] = useState(false)
    const { cart, totalToPay, clearCart} = useContext(CartContext) 

    const [ dataOrder, setDataOrder ] = useState({

        name:'',
        surname:'',
        phone:'',
        address:''
    })



    const handleChange = (e) => {
        console.log(e.target.name)
        setDataOrder({
            ...dataOrder,
            [e.target.name]:e.target.value
        })
        
    }




    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const navigate = useNavigate()

    const createOrder = async () => {

        setLoad(true)
        console.log(' 3 load vale ' + load) //console.log que da falso
        try{

            const order = {
                
                buyer: {
                    name:dataOrder.name,             
                    surname:dataOrder.surname,
                    phone:dataOrder.phone,
                    address:dataOrder.address
                },
        
                items: cart, 
                total: totalToPay(),
                date: new Date()
            }

            

            const idProducts = cart.map(prod => prod.id)
    
            const productsReference = collection (dataBase, 'products')
    
            const productsAddedFromFirestore = await getDocs(query(productsReference, where(documentId(), 'in', idProducts))) 
    
            const { docs } = productsAddedFromFirestore 
    
            const noStockProducts = []
    
            const batch = writeBatch(dataBase)
    
            docs.forEach(doc => {
    
                const dataDoc = doc.data()
    
                const stockDataBase = dataDoc.stock 
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
    
                const quantityProducts = productAddedToCart?.quantity
    
                if(stockDataBase >= quantityProducts){
    
                    batch.update(doc.ref, { stock: stockDataBase - quantityProducts})
    
                }else{
                    noStockProducts.push({ id:doc.id , ...dataDoc })
                }
    
            })
    
            if(noStockProducts.length === 0){

                await batch.commit()
                
                const orderReference = collection(dataBase, 'orders')
    
                const orderAdded = await addDoc(orderReference, order)
    
                clearCart()

                setOrderCreated(true)

                console.log(`Order id: ${orderAdded.id}`)
                console.log(' 1 load vale ' + load) //console.log que da falso
                
                setTimeout(() =>{
                    navigate('/')
                },3000)
                
    
            }else{
                console.log('Hay productos de los agregados que estan fuera de stock')
            }

        }catch(error){
            console.log(error)

        }
        
        console.log(' 2 load vale ' + load)//console.log que da falso

        if(load){
            return (<h1>Se esta generando la orden de compra ...</h1>)
        }

        if(orderCreated){
            return (<h1>La orden fue creada correctamente, en 3 segundos será redirigido al inicio...</h1>)
        }
    }

    


    return (
        
        <div className="checkoutContainer">

            <h1 className="checkoutTitle">Checkout</h1>

            <form className="formOrder" onSubmit={handleSubmit}>

                <input type="text" name="name" placeholder="Ingrese su nombre" onChange={handleChange} value={dataOrder.name}></input>

                <input type="text" name="surname" placeholder="Ingrese su apellido" onChange={handleChange} value={dataOrder.surname}></input>

                <input type="text" name="phone" placeholder="Ingrese su teléfono" onChange={handleChange} value={dataOrder.phone}></input>

                <input type="text" name="address"  placeholder="Ingrese su dirección" onChange={handleChange} value={dataOrder.address}></input>

                <button className="pucharseOrder" onClick={createOrder}>Generar orden de compra</button>

            </form>

        </div>
    )
}

export default Checkout