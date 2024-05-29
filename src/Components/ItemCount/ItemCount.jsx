import {useState} from 'react'


const ItemCount =({stock})=>{
    const [quantity, setQuantity]  = useState (1)
    const [productStock, setProductStock] = useState(stock)
  
    
    
    const handleAdd = () => quantity < productStock ? setQuantity(quantity + 1): null
    
    const handleSubstract = ()=>quantity > 1 ? setQuantity(quantity - 1) : null;

    const onAdd = () =>{
      if (quantity <= productStock) {
        setProductStock(productStock - quantity)
        setQuantity(1)
        console.log("Agregaste " + quantity + " productos al Carrito!")
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
              {productStock > 1 ? <button type="button" className="btn btn-info fs-4" onClick={onAdd}>Agregar al Carrito</button> : <button type="button" className="btn btn-danger fs-4"><b>SIN STOCK</b></button>}
            </div>
        </div>
    )
}

export default ItemCount
