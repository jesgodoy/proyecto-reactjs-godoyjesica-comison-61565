import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore/lite";
import { Link } from "react-router-dom";

const Checkout = () => {
    const { cart, clear, removeProduct, sumProducts, totalProducts } = useContext(CartContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [orderId, setOrderId] = useState("");
    const [errors, setErrors] = useState({});

    const generateOrder = () => {
        const validateForm = () => {
            const newErrors = {};

            if (!name) {
                newErrors.name = "El nombre es obligatorio.";
            }

            if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                newErrors.email = "Ingrese un email válido.";
            }

            if (!phone || !/^\d+$/.test(phone)) {
                newErrors.phone = "Ingrese un número de teléfono válido.";
            }

            if (!address) {
                newErrors.address = "La Dirección es obligatoria.";
            }

            setErrors(newErrors);
            return Object.keys(newErrors).length === 0; // Return true if no errors
        };

        if (validateForm()) {
            const buyer = { name: name, email: email, phone: phone, address: address };
            const products = cart.map((product) => ({ id: product.id, quantity:product.quantity, title: product.name, price: product.price }));
            const fecha = new Date();
            const date = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
            const order = { buyer: buyer, products: products, date:date, total: sumProducts() };
            const db = getFirestore();

            const ordersCollection = collection(db, "orders");

            addDoc(ordersCollection, order).then((data) => {
                setOrderId(data.id);
                setName("");
                setEmail("");
                setPhone("");
                setAddress("")
                clear();

            });
        }
    };
    
   if(orderId){
        return(
            <div className="container my-5">
                <div className="row my-4 align-middle text-center">
                    <div className="alert alert-light" role="alert">
                        <h2> Tu Compra se proceso con exito. Tu Orden de Compra es: {orderId}</h2>
                    </div>
                </div>    
                <div className="row my-4 align-middle text-center">
                   <button className="btn btn-info"><Link to={"/"} className=" p-3 text-center fs-2">Volver a la Pagina Princupal</Link></button> 
                </div>    
            </div>
            
            

        )
    }

    
    if(totalProducts() == 0){
        return(
            <div className="container my-5">
                <div className="col">
                    <h1 className="text-center"> No existen productos en el Carrito</h1>
                    <div className="my-4 align-middle text-center">
                    <Link to={"/"} className="btn btn-info p-3 text-center fs-2">Volver a la Pagina Princupal</Link>
                    </div>
                </div>

            </div>
        )
    }

    return (
        <div className="container-fluid m-5 pe-5">
            <div className="row">
                <div className="col mx-5">
                    <table className="table">
                        <tbody>
                            {cart.map((product) => (
                                <tr key={product.id}>
                                    <td className="align-middle text-center">{product.name}</td>
                                    <td>
                                        <img src={product.img} alt={product.name} width={100} />
                                    </td>
                                    <td className="align-middle text-center">$ {product.price}</td>
                                    <td className="align-middle text-center">x {product.quantity}</td>
                                    <td className="align-middle text-center">$ {product.quantity * product.price}</td>
                                    <td className="align-middle text-center">
                                        <i
                                            className="bi bi-trash-fill"
                                            onClick={() => {
                                                removeProduct(product.id);
                                            }}
                                            title="Eliminar Producto"
                                        ></i>
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={4} className="align-middle text-center fs-6 py-2">
                                    <b>Total</b>
                                </td>
                                <td className="fs-6 py-5">
                                    {" "}
                                    <b>S {sumProducts()}</b>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col mx-5 pe-5">
                    <form className="container">
                        <div className="mb-3 me-5 pe-5">
                            <label className="form-label fs-4">Nombre</label>
                            <input
                                type="text"
                                className={`form-control ms-4 rounded-pill border border-primary fs-4 ${
                                    errors.name ? "is-invalid" : ""
                                }`}
                                onInput={(event) => {
                                    setName(event.target.value);
                                }}
                            />
                            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                        </div>
                        <div className="mb-3 me-5 pe-5">
                            <label className="form-label fs-4">Email</label>
                            <input
                                type="text"
                                className={`form-control ms-4 rounded-pill border border-primary fs-4 ${
                                    errors.email ? "is-invalid" : ""
                                }`}
                                onInput={(event) => {
                                    setEmail(event.target.value);
                                }}
                            />
                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        </div>
                        <div className="mb-3 me-5 pe-5">
                            <label className="form-label fs-4">Teléfono</label>
                            <input
                                type="text"
                                className={`form-control ms-4 rounded-pill border border-primary fs-4 ${
                                    errors.phone ? "is-invalid" : ""
                                }`}
                                onInput={(event) => {
                                    setPhone(event.target.value);
                                }}
                            />
                            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                        </div>
                        <div className="mb-3 me-5 pe-5">
                            <label className="form-label fs-4">Dirección</label>
                            <input
                                type="text"
                                className={`form-control ms-4 rounded-pill border border-primary fs-4 ${
                                    errors.address ? "is-invalid" : ""
                                }`}
                                onInput={(event) => {
                                    setAddress(event.target.value);
                                }}
                            />
                            {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                        </div>
                        <div className="text-center ">
                            <button type="button" className="btn btn-info fs-4" onClick={generateOrder}>
                                Generar Orden
                            </button>
                        </div>
                        
                    </form>
                </div>
            </div>
            
        </div>
    );
};

export default Checkout;
