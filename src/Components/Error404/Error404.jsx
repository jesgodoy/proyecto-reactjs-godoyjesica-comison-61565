import { Link } from 'react-router-dom'

const Error404 = () =>{
    return(
        <div className="container my-5 ">
            <div className="row">
                <div className="col-md-6">
                    <div className="my-5">
                    <h2 className="text-center">GAME</h2>
                    <h2 className="text-center">OVER</h2>
                    </div>
                    
                </div>
                <div className="col-md-6 text-center my-2">
                    <h1>❌ ERROR 404! ❌</h1>
                    <h3>No se encuentra la página que estás buscando!</h3>
                </div>
            </div>
            <div className="text-center mt-5">
            <Link to="/" className="btn btn-info" >Volver a la Pagina Principal</Link>
            </div>
        </div>
    )
}

export default Error404