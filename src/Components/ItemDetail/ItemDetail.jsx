
import ItemCount from '../ItemCount/ItemCount.jsx'


const ItemDetail = ({product}) => {
    return (
        <div className="container my-3">
            <div className="row p-4">
                <div className="col-lg-4">
                    <img src={product.img} alt={product.name} className="img-fluid" />
                </div>
                <div className="col-lg-8">
                    <h1 className="text-center">{product.name}</h1>
                    <p className="text-center fs-2 my-4"><b>${product.price}</b></p>
                    <p className="fs-5 my-4">{product.description}</p>
                    <div className='text-center'>
                        <ItemCount stock={product.stock}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail
