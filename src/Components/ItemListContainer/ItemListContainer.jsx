import { useState, useEffect } from "react";
import ItemList from '../ItemList/ItemList';
import Loading from '../Loading/Loading.jsx'
import productsJSON from '../../json/products.json';
import { useParams } from "react-router-dom";

const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productsJSON);
        }, 2000);
    });
};

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const data = await getProducts();
            setProducts(categoryId ? data.filter(product => product.category == categoryId) : data);
            setLoading(false);
        };

        fetchData();
    }, [categoryId]);

    return (
        <div className=" container">
            <h1 className="fs-3 text-center mt-5 greeting">{greeting}</h1>
            <div className="row">
                {
                    loading ? <Loading /> : <ItemList products={products} />
                }
            </div>
        </div>
    );
};

export default ItemListContainer;