import { useState, useEffect } from "react";
import productsJSON from '../../json/products.json';
import ItemList from '../ItemList/ItemList';

const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productsJSON);
        }, 3000);
    });
};

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then(response => {
                setProducts(response);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div className="container my-5">
            <div className="row">
                <h1 className="fs-3 text-center  greeting">{greeting}</h1>
            </div>
            <div className="row">
                <ItemList products={products} />
            </div>
            
        </div>
    );
};

export default ItemListContainer;