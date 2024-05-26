import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css'
import NavBar from './Components/NavBar/NavBar.jsx'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer.jsx'

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos a Gamer Squad'} />
    </div>
    
  )
}

export default App
