import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

import './App.css';


function App() {
  return (
    <div className="container">

      <header className="App-header">
        <Navbar></Navbar>
      </header>

      <main>
        <ItemListContainer greeting='Bienvenidos'></ItemListContainer>
      </main>
  
      
    </div>
  );
}

export default App;
