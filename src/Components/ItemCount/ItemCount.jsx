import {useState} from 'react'


const ItemCount =({stock, initial, onAdd})=>{
    const [quantity, setQuantity]  = useState (initial)
    
    
    const handleAdd = () => quantity < stock ? setQuantity(quantity+1): null
    
    const handleSubstract = ()=>quantity > 1 ? setQuantity(quantity - 1) : null;

    return(
        <div className='container'>
            <div className='d-flex justify-content-center text-center'>
                <button type="button" className="btn btn-secondary" onClick={handleSubstract}>-</button>
                <h4 className='p-1 mx-2'>{quantity}</h4>
                <button type="button" className="btn btn-secondary"  onClick={handleAdd}>+</button>
            </div>
            <div>
                <button className='rounded mt-3 p-3 button-count' onClick={()=>  onAdd(quantity)} disabled={!stock}>
                    {stock ? 'agregar al carrito' : 'No hay stock disponible'}
                </button>
            </div>
        </div>
    )
}

export default ItemCount
