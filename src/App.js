import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import { CartContextProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'


function App() {

  

  return (

    <div className="container">


      <CartContextProvider>
        <BrowserRouter>

          <Navbar/>

          <Routes>
            
            <Route path='/' element={<ItemListContainer/>}/>

            <Route path='/cart' element={<Cart/>}/>

            <Route path="/category/:categoryId" element={<ItemListContainer/>} />
            
            <Route path="/detail/:productId" element={<ItemDetailContainer/>} />

          </Routes>

        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
