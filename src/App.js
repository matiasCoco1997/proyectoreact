import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';


function App() {

  return (

    <div className="container">

      <BrowserRouter>

        <Navbar/>



        <Routes>

          <Route path='/' element={<ItemListContainer greeting='Bienvenidos'/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer greeting='Filtrados'/>} />
          <Route path="/detail/:productId" element={<ItemDetailContainer/>} />

        </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
