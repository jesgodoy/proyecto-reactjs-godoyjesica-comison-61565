

import { useContext, useState } from "react"
import { CartContext } from "../../Context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore/lite";


const Checkout = ()=>{
    const{cart, sumProducts, removeProduct} = useContext(CartContext)
    const[name, setName]= useState("")
    const[email, setEmail]= useState("")
    const[phone, setPhone]= useState("")
    const[address, setAdress]= useState("")
    const[orderId, setOrderId]= useState("")


    const generateOrder = () =>{
        const buyer ={name:name, email:email, phone:phone, address:address};
        const products =cart.map(product =>({id:product.id, title:product.name, price:product.price}));
        const order ={buyer:buyer, products:products, total:sumProducts()}
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(data => {
            setOrderId(data.id)
        })

    }

    return(
        <div className="container-fluid m-5 pe-5">
            <div className="row">
                <div className="col mx-5">
                        <table className="table">
                            <tbody>
                                {cart.map(product =>(
                                    <tr key={product.id} >
                                        <td className="align-middle text-center">{product.name}</td>
                                        <td><img src={product.img} alt={product.name} width={100}/></td>
                                        <td className="align-middle text-center">$ {product.price}</td>
                                        <td className="align-middle text-center">x {product.quantity}</td>
                                        <td className="align-middle text-center">$ {product.quantity * product.price}</td>
                                        <td className="align-middle text-center"><i className="bi bi-trash-fill" onClick={()=> {removeProduct(product.id)}}title="Eliminar Producto"></i></td>
                                    </tr> 
                                ))}
                                <tr>
                                    <td colSpan={4} className="align-middle text-center fs-6 py-2"><b>Total</b></td>
                                    <td className="fs-6 py-5"> <b>S {sumProducts()}</b></td>
                                </tr>
                            </tbody>

                        </table>

                    </div>
                    <div className="col mx-5 pe-5">
                        <form className="container">
                            <div className="mb-3 me-5 pe-5">
                                <label className="form-label fs-4">Nombre</label>
                                <input type="text" className="form-control ms-4 rounded-pill border border-primary fs-4" onInput={(event) => {setName(event.target.value)}} />
                            </div>
                            <div className="mb-3 me-5 pe-5">
                                <label className="form-label fs-4">Email</label>
                                <input type="text" className="form-control ms-4 rounded-pill border border-primary fs-4" onInput={(event) => {setEmail(event.target.value)}} />
                            </div>
                            <div className="mb-3 me-5 pe-5">
                                <label className="form-label fs-4">Teléfono</label>
                                <input type="text" className="form-control ms-4  rounded-pill border border-primary fs-4" onInput={(event) => {setPhone(event.target.value)}}  />
                            </div>
                            <div className="mb-3 me-5 pe-5">
                                <label className="form-label fs-4">Teléfono</label>
                                <input type="text" className="form-control ms-4 rounded-pill border border-primary fs-4" onInput={(event) => {setAdress(event.target.value)}}  />
                            </div>
                            <button type="button" className="btn bg-light fs-4" onClick={ generateOrder}>Generar Orden</button>
                        </form>
                    </div>
                    
                </div>
            <div className="row">
                <div className="col my-4">
                {orderId ? <div className="alert text-center fs-3" role="alert">Tu Compra se proceso con exito. Tu Orden de Compra es: <h4>{orderId}</h4></div> : ""}
                </div>
            </div>

        </div>
    )
}
export default Checkout