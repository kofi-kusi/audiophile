import { Link, NavLink } from "react-router-dom"
import hamburger from "../assets/shared/tablet/icon-hamburger.svg"
import cartIcon from "../assets/shared/desktop/icon-cart.svg"
import logo from "../assets/shared/desktop/logo.svg"


export default function Header(){
    return(
        <header className="text-white border-b-1 border-gray py-8 px-6 flex justify-between items-center md:max-w-6xl mx-auto md:px-0">
            <button className="md:mr-8 lg:hidden">
                <img src={hamburger} alt="hamburger icon" />
            </button>
            <Link to="/">
                <img src={logo} alt="logo" />
            </Link>
            <nav className="hidden lg:flex justify-center items-center gap-5 font-bold text-sm">
                <NavLink to="/" className="tracking-widest">HOME</NavLink>
                <NavLink to="/" className="tracking-widest">HEADPHONES</NavLink>
                <NavLink to="/" className="tracking-widest">SPEAKERS</NavLink>
                <NavLink to="/" className="tracking-widest">EARPHONES</NavLink>  
            </nav>
            <button className="cursor-pointer md:ml-auto lg:ml-0">
                <img src={cartIcon} alt="cart icon" />
            </button>
        </header>
    )
}