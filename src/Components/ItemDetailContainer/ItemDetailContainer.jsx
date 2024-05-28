import { useState, useEffect } from "react";
import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import products from '../../json/products.json';
import { useParams } from "react-router-dom";


const getProductById =(productId)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve (products.find(product =>product.id === productId))
        }, 500)
    })
}

const ItemDetailContainer =()=>{
    const [product, setProduct] = useState(null)

    useEffect(() => {
        getProductById(1)
            .then(response => {
                setProduct(response)
            })
            .catch(error=>{
                console.error(error)
            })
    },[])
    
    return(
        <div className=' m-5 '>
            <ItemDetail {...product}/>
        </div>
        
    )
}
export default ItemDetailContainer

