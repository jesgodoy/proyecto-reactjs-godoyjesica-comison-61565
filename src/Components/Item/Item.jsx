import { Link } from "react-router-dom";

const Item = ({ product }) => {
    return (
        <div className="col-md-4 mb-3">
            <div className="card mt-5">
                <div className="text-center">
                    <img src={product.img} className="card-img-top p-3 img-card" alt={product.name} />
                </div>
                <div className="card-body text-center">
                    <h5 className="card-title">{product.name}</h5>
                    <h6 className="card-price">${product.price}</h6>
                    <Link to={"/product/" + product.id} className="btn btn-primary">Ver Detalles</Link>
                </div>
            </div>
        </div>
    );
};

export default Item;

