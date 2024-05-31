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
                    <table className="table">
                        <tbody>
                            <tr>
                                <td colSpan={6} className="align-middle text-center py-4 "><button className="btn btn-danger fs-4" onClick={clear}>Vaciar Carrito</button></td>
                                    
                            </tr>


                            {cart.map(product =>(
                                <tr key={product.id} >
                                    <td className="align-middle text-center fs-4">{product.name}</td>
                                    <td><img src={product.img} alt={product.name} width={200}/></td>
                                    <td className="align-middle text-center fs-4">$ {product.price}</td>
                                    <td className="align-middle text-center fs-4">x {product.quantity}</td>
                                    <td className="align-middle text-center fs-4">$ {product.quantity * product.price}</td>
                                    <td className="align-middle text-center"><i className="bi bi-trash-fill" onClick={()=> {removeProduct(product.id)}}title="Eliminar Producto"></i></td>
                                </tr> 
                            ))}
                            <tr>
                                <td colSpan={4} className="align-middle text-center fs-3 py-5"><b>Total</b></td>
                                <td className="align-middle text-center fs-3 py-5"><b>S {sumProducts()}</b></td>
                                <td className="align-middle text-end"><button>checkout</button></td>
                            </tr>
                        </tbody>

                    </table>

                </div>
            </div>
        </div>
        
        
    )
}

export default Cart


