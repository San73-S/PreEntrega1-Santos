import CartWidget from "../cartWidget/CartWidget"
import '../../style/style.css';

function NavBar (){
    return (
        <nav className="navbar is-primary  is-justify-content-space-around is-align-items-center">
            <h2>Joe's Autopartes</h2>
            <div className="buttons is-marginless">
                <button className="is-light">¿Quienes somos?</button>
                <button className="is-light">Ubicacion</button>
                <button className="is-light">Contactanos</button>
            </div>  
            <CartWidget/>          
        </nav>
    )
}

export default NavBar