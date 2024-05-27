const Item = ({id, name,img, price,stock}) => {
    return (
        <div className="col-md-4 mb-3">
            <div className="card mt-5">
            <div className="text-center">
                <img src={img} className="card-img-top p-3 img-card" alt={name} />
            </div>
            <div className="card-body text-center">
                <h5 className="card-title">{name}</h5>
                <h6 className="card-price">${price}</h6>
                <button className="btn btn-primary">Ver Detalles</button>
            </div>
        </div>
        </div>
    );
};

export default Item;