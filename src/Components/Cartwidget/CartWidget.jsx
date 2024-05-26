import cart from './assets/cart-icon.png'

const CartWidget  = () =>{
    return (
        <div>
            <img src= {cart} alt="carrito de compras" />
            <span className='position-absolute rounded-circle p-1  number-cart'>0</span>
        </div>
    )
        
}

export default CartWidget 