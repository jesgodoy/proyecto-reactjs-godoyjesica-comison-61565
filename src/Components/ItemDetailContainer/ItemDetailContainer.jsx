import { useState, useEffect, } from 'react'
import Loading from '../Loading/Loading.jsx'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import productsJSON from '../../json/products.json'
import { useParams } from 'react-router-dom'

/*const getProductById =(productId)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve (productsJSON.find(prod =>prod.id === productId))
        }, 500)
    })
}*/
const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productsJSON);
        }, 2000);
    });
};

const ItemDetailContainer =()=>{
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true);
    const {id} = useParams ()

    useEffect(() => {
        const fetchData = async () =>{
            const data = await getProducts();
            setProduct (id ? data.find(product => product.id == id): {})
            setLoading (false)
        };
        fetchData()
        
    }, [id])
    
    return(
        <div className='container my-5 border border-primary'>
    
            {
                loading ? <Loading /> : <ItemDetail product={product} />
            }
        
        </div>
        
    )
}
export default ItemDetailContainer