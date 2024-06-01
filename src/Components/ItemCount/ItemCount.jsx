
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const ItemCount = ({ stock, onAdd }) => {
    const [quantity, setQuantity] = useState(1);
    const [productStock, setProductStock] = useState(stock);
    const [visible, setVisible] = useState(true);
    
    useEffect(() => {
        setProductStock(stock);
    }, [stock]);
    
    const handleAdd = () => {
        if (quantity < productStock) {
            setQuantity(quantity + 1);
        }
    };
    
    const handleSubstract = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const addToCart = () => {
        if (quantity <= productStock && quantity > 0) {
            setProductStock(productStock - quantity);
            onAdd(quantity);
            setQuantity(1);
            setVisible(false);
            
        }
    };

    return (
        <div className='container my-4'>
            <div className='d-flex justify-content-center text-center my-4'>
                <button type="button" className="btn btn-info fs-3" onClick={handleSubstract}>-</button>
                <h4 className='p-1 mx-3 pt-3 fs-3'>{quantity}</h4>
                <button type="button" className="btn btn-info fs-3" onClick={handleAdd}>+</button>
            </div>
            <div>
                {visible ? (
                    <button type="button" className="btn btn-info fs-4" onClick={addToCart} disabled={quantity < 1 || productStock < 1}>
                        Agregar al Carrito
                    </button>
                ) : (
                    <div>
                        <button type="button" className="btn btn-info fs-4 m-1" onClick={addToCart} disabled={quantity < 1 || productStock < 1}>
                            Agregar al Carrito
                        </button>
                        <Link to={"/cart"} className="btn btn-primary fs-4 m-1">Terminar Mi Compra</Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ItemCount;
