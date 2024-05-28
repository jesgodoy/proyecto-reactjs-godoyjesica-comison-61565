import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, name, img, price, details, stock }) => {
    return (
        <div className="container my-5">
            <div className="row border border-primary p-4">
                <div className="col-lg-4">
                    <img src={img} alt={name} className="img-fluid" />
                </div>
                <div className="col-lg-8">
                    <h1 className="text-center">{name}</h1>
                    <p className="text-center"><b>${price}</b></p>
                    <p className="text-justify">{details}</p>
                    <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("Cantidad del producto", quantity)} />
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
