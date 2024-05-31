import { useState, useEffect, } from 'react'
import Loading from '../Loading/Loading.jsx'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore/lite'


const ItemDetailContainer =()=>{
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true);
    const {id} = useParams ()

    useEffect(() => {
        const db = getFirestore();
        const documentRef = doc(db, "products", id);
        getDoc(documentRef).then(snapShot =>{
            if (snapShot.exists()) {
                setProduct({id:snapShot.id, ...snapShot.data()});
                setLoading(false);
            } else {
                console.log("No existe el Documento!");
                setItem({});
            }
        })
        
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