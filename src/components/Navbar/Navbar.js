import Cartwidget from '../Cartwidget/Cartwidget'
import './Navbar.css'

const Navbar = () => {

    

    return (

        <nav>
            <img className="icon-brand" src="./images/brand.png" alt="Logo Natura"/>

            <div className="container-btns">
                <button className="nav-btn">Perfumes</button>
                <button className="nav-btn">Cremas</button>
                <button className="nav-btn">Labiales</button>
                <Cartwidget></Cartwidget>
            </div>

        </nav>
    )
}

export default Navbar