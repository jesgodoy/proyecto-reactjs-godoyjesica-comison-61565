import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css'
import NavBar from './Components/NavBar/NavBar.jsx'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx';
import ItemCount from './Components/ItemCount/ItemCount.jsx';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos a Gamer Squad'} />
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("cantidad del producto", quantity)}/>
    </div>
    
  )
}

export default App
