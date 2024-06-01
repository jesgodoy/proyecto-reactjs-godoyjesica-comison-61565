import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom";


const Cart = () =>{
    const {cart, removeProduct, clear, sumProducts, totalProducts} = useContext(CartContext);

    if(totalProducts() == 0){
        return(
            <div className="container my-5">
                <div className="col">
                    <h1 className="text-center"> No existen productos en el Carrito</h1>
                    <div className="my-4 align-middle text-center">
                    <Link to={"/"} className="btn btn-info p-2 text-center fs-2">Volver a la Pagina Princupal</Link>
                    </div>
                </div>

            </div>
        )
    }



    return(

        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <div className="table-responsive">
                        <table className="table ">
                            <thead>
                                <tr>
                                    <th colSpan={6} className="text-center py-2"><button className="btn btn-danger fs-6" onClick={clear}>Vaciar Carrito</button></th>
                                </tr>
                                <tr>
                                    <th className="text-center fs-6">Producto</th>
                                    <th className="text-center fs-6">Imagen</th>
                                    <th className="text-center fs-6">Precio</th>
                                    <th className="text-center fs-6">Cantidad</th>
                                    <th className="text-center fs-6">Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map(product => (
                                    <tr key={product.id}>
                                        <td className="align-middle text-center fs-6">{product.name}</td>
                                        <td><img src={product.img} alt={product.name} className="img-fluid" width={100} /></td>
                                        <td className="align-middle text-center fs-6">$ {product.price}</td>
                                        <td className="align-middle text-center fs-6">x {product.quantity}</td>
                                        <td className="align-middle text-center fs-6">$ {product.quantity * product.price}</td>
                                        <td className="align-middle text-center"><i className="bi bi-trash-fill" onClick={() => {removeProduct(product.id)}} title="Eliminar Producto"></i></td>
                                    </tr>
                                ))}
                                <tr>
                                    <td colSpan={4} className="align-middle text-center fs-6"><b>Total</b></td>
                                    <td colSpan={2} className="align-middle text-center fs-6"><b>S {sumProducts()}</b></td>
                                </tr>
                                <tr>
                                    <td colSpan={6} className="text-center"><Link to={"/checkout"} className="btn btn-info">Checkout</Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}

export default Cart


