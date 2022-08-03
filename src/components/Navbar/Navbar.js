import Cartwidget from '../Cartwidget/Cartwidget'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {

    return (

        <nav>
            <Link to='/' className="icon-brand">
                <img className="icon-brand" src="https://i.ibb.co/vJkmmDS/brand.png" alt="Logo Natura"/>
            </Link>
            

            <div className="container-btns">
                <Link to='/category/Perfumes' className="nav-btn">Perfumes</Link>
                <Link to='/category/Cremas' className="nav-btn">Cremas</Link>
                <Link to='/category/Combos' className="nav-btn">Combos</Link>
                <Cartwidget></Cartwidget>
            </div>

        </nav>
    )
}

export default Navbar