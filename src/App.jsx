import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar.jsx';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer.jsx';
import Error404 from './Components/Error404/Error404.jsx';
import CartContextProvider from './Context/CartContext.jsx';


function App() {
  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer greeting={'Bienvenidos a Gamer Squad'} />}/>
            <Route exact path= "/category/:categoryId" element={<ItemListContainer/>}/>
            <Route exact path={"/product/:id"} element={<ItemDetailContainer />} />
            <Route exact path={"*"} element={<Error404/>}/>
          </Routes>     
        </BrowserRouter>
      </CartContextProvider>
      
    </div>
    
  )
}

export default App
