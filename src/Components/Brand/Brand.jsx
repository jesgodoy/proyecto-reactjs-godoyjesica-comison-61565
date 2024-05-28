import { Link } from 'react-router-dom'
import brand from './assets/logo.png'

const Brand = () => {
    return (
        <Link to="/" ><img src={brand} alt="Tienda Gamer Squad" /></Link>
        
    )
}
export default Brand