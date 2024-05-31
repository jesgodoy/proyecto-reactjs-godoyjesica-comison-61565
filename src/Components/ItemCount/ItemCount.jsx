
import {useState} from 'react'
import { Link } from "react-router-dom";

const ItemCount =({stock, onAdd})=>{
    const [quantity, setQuantity]  = useState (1)
    const [productStock, setProductStock] = useState(stock)
    const [visible, setVisible] = useState(true)
    
    
    const handleAdd = () => quantity < productStock ? setQuantity(quantity + 1): null
    
    const handleSubstract = ()=>quantity > 1 ? setQuantity(quantity - 1) : null;

    const addToCart = () =>{
      if (quantity <= productStock) {
        setProductStock(productStock - quantity)
        onAdd(quantity)
        setQuantity(1)
        setVisible(false)
        console.log("agregaste"+ quantity + "productos al carrito")
      } 
    }

    return(
        <div className='container my-4'>
            <div className='d-flex justify-content-center text-center my-4'>
                <button type="button" className="btn btn-info fs-3" onClick={handleSubstract}>-</button>
                <h4 className='p-1 mx-3 pt-3 fs-3'>{quantity}</h4>
                <button type="button" className="btn btn-info fs-3"  onClick={handleAdd}>+</button>
            </div>
            <div>
            {visible ? <button type="button" className="btn bg-light" onClick={addToCart}>Agregar al Carrito</button> : <Link to={"/cart"} className="btn bg-light">Terminar Mi Compra</Link>}
              
            </div>
        </div>
    )
}

export default ItemCount

/*return(
  {productStock > 1 ? <button type="button" className="btn btn-info fs-4" onClick={onAdd}>Agregar al Carrito</button> : <button type="button" className="btn btn-danger fs-4"><b>SIN STOCK</b></button>}
)*/