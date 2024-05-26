import './NavBar.css'
import Brand from '../Brand/Brand.jsx'
import CartWidget  from '../Cartwidget/CartWidget.jsx'


const NavBar = () => {
    return(
        <header>
            <div className="container">
                <div className="row m-auto">
                    <div className="col-9 col-lg-10">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid">
                            <button className="navbar-toggler icono-menu" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon  "></span>
                                    </button>
                                    <div className="navbar-brand ms-lg-5 mx-auto mx-lg-0">
                                        <Brand />
                                    </div>
                                    <div className="collapse navbar-collapse w-50 d-lg-flex justify-content-lg-center" id="navbarTogglerDemo03">
                                        <ul className="navbar-nav  ">
                                            <li className="nav-item mx-2">
                                            <a className=" f-5 animated-border text"  href="#">Inicio</a>
                                            </li>
                                            <li className="nav-item mx-2">
                                            <a className="f-5 animated-border text" href="#">Consolas</a>
                                            </li>
                                            <li className="nav-item mx-2">
                                            <a className="f-5 animated-border text "  href="#">Juegos</a>
                                            </li>
                                            <li className="nav-item mx-2">
                                            <a className="animated-border text "  href="#">Coleccionables</a>
                                            </li>
                                            <li className="nav-item mx-2">
                                            <a className="f-5 animated-border text" href="#">Contacto</a>
                                            </li>
                                        </ul>                         
                                    </div>
                            </div>

                        </nav>
                    </div>
                    <div className="col-3 col-lg-2 pt-3 container position-relative container-cart">
                        <CartWidget/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavBar