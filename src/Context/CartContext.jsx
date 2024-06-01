import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addProduct= (product, quantity) => {
        if (isInCart(product.id)) {
            const products = cart.find(prod => prod.id === product.id);
            products.quantity += quantity;
            setCart([...cart]);
        } else {
            setCart([...cart, {...product, quantity:quantity}]);
        }
    }
    
    
    const removeProduct= (id) => {
        const products = cart.filter(product => product.id !== id);
        setCart([...products]);
    }
    const clear = () => {
        setCart([]);
    }
    const isInCart = (id) => {
        return cart.some(product => product.id === id); 
    }

    const sumProducts = () => {
        return cart.reduce((acumulador, product) => acumulador += product.quantity * product.price, 0);
    }

    const totalProducts = () => {
        return cart.reduce((acumulador, product) => acumulador += product.quantity, 0);
    }

    

    return (
        <CartContext.Provider value={{cart, addProduct, removeProduct, clear, sumProducts, totalProducts}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider