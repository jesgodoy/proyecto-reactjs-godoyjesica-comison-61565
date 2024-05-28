
import ItemCount from '../ItemCount/ItemCount.jsx'
/*
const ItemDetail = ({product})=>{
    return(
        <article>
            <div className='text-center mt-5'>
                <h2 >{name}</h2>
            </div>
            <div className='d-flex'>
                <picture className='text-center'>
                    <img src={product.img} className='image-detail' alt={product.name} />
                </picture>
                <section className='m-5'>
                    <p className='fs-3' >Catagoria: {product.category}</p>
                    <p className='fs-6' >Descripcion: {product.details}</p>
                    <p className='fs-3 text-center'>price: $ {product.price}</p>
                    <div className='text-center'>
                        <ItemCount initial={1} stock={product.stock} onAdd={(quantity) => console.log("cantidad del producto", quantity)}/>
                    </div>
                </section>
            </div>
        </article>
    )
}

export default ItemDetail*/

const ItemDetail = ({product}) => {
    return (
        <div className="container my-5">
            <div className="row p-4">
                <div className="col-lg-4">
                    <img src={product.img} alt={product.name} className="img-fluid" />
                </div>
                <div className="col-lg-8">
                    <h1 className="text-center">{product.name}</h1>
                    <p className="text-center"><b>${product.price}</b></p>
                    <p >{product.details}</p>
                    <div className='text-center'>
                        <ItemCount initial={1} stock={product.stock} onAdd={(quantity) => console.log("cantidad del producto", quantity)}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail
