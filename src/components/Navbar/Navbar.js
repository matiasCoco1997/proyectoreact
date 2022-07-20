import Cartwidget from '../Cartwidget/Cartwidget'
import './Navbar.css'

const Navbar = () => {

    

    return (

        <nav>
            <h1>nombre de la empresa</h1>

            <div className="container-btns">
                <button className="nav-btn">boton 1</button>
                <button className="nav-btn">boton 2</button>
                <button className="nav-btn">boton 3</button>
                <Cartwidget></Cartwidget>
            </div>

        </nav>
    )
}

export default Navbar