import Cartwidget from '../Cartwidget/Cartwidget'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {

    return (

        <nav>
            {/* <Link className="icon-brand"> */}
                <img className="icon-brand" src="./images/brand.png" alt="Logo Natura"/>
            {/* </Link> */}
            

            <div className="container-btns">
                <Link to='/category/perfume' className="nav-btn">Perfumes</Link>
                <Link to='/category/crema' className="nav-btn">Cremas</Link>
                <Link to='/category/combo' className="nav-btn">Combos</Link>
                <Cartwidget></Cartwidget>
            </div>

        </nav>
    )
}

export default Navbar