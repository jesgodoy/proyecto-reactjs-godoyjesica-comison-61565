import './CartWidget.css'
import cart from './assets/cart-icon.png'


const CartWidget  = () =>{
    return (
        <div class="conntainer mt-2">
            <button type="button" class="btn btn-cart position-relative">
            <i class="bi bi-cart4"></i>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-number">1</span>
        </button>
        </div>
        
    )
        
}

export default CartWidget 