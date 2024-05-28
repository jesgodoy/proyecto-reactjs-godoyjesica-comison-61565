import './CartWidget.css'



const CartWidget  = () =>{
    return (
        <div className="conntainer mt-2">
            <button type="button" className="btn btn-cart position-relative">
            <i className="bi bi-cart4"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-number">1</span>
        </button>
        </div>
        
    )
        
}

export default CartWidget 