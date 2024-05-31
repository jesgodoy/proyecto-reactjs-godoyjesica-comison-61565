import { useState, useEffect } from "react";
import ItemList from '../ItemList/ItemList';
import Loading from '../Loading/Loading.jsx';
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore/lite";



const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        const db = getFirestore()
        const productsCollection = collection(db, "products");
        const resultQuery = categoryId ? query(productsCollection, where("category", "==", categoryId)) : productsCollection
        getDocs(resultQuery).then(snapShot =>{
            console.log(snapShot);
            if(snapShot.size > 0){
                setProducts(snapShot.docs.map(product => ({id:product.id, ...product.data()})))
                setLoading(false)
            }else{
                setProducts([])
            }
        })
    },[categoryId]);
    

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