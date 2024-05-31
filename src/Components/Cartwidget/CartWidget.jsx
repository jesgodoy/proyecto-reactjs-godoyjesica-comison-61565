import { useContext } from 'react'
import './CartWidget.css'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'



const CartWidget  = () =>{

    const {totalProducts} =useContext(CartContext)

    if (totalProducts() > 0){
        return (<Link to={"/cart"}>
            <div className="conntainer mt-2">
                <button type="button" className="btn btn-cart position-relative">
                <i className="bi bi-cart4"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-number">{totalProducts()}</span>
                </button>
            </div>
        </Link>)
    }
    
        
}

export default CartWidget 