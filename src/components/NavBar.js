import CartWidget from "./CartWidget"

const NavBar = () => {
    return(
    <nav className="navBar">
        <CartWidget/>
        <a href="#" className="nav_link">Carrito</a>
        <a href="#" className="nav_link">En oferta</a>
        <a href="#" className="nav_link">Cuenta</a>
    </nav>
    )
}

export default NavBar