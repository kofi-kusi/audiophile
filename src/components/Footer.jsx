import { Link, NavLink } from "react-router-dom"
import logo from "../assets/shared/desktop/logo.svg"
import facebookIcon from "../assets/shared/desktop/icon-facebook.svg"
import twitterIcon from "../assets/shared/desktop/icon-twitter.svg"
import instagramIcon from "../assets/shared/desktop/icon-instagram.svg"


export default function Footer(){
    return(
        <footer className="bg-black flex flex-col justify-between items-center gap-10 text-white text-center py-10 px-6">
            <Link to="/" className="text-3xl font-black">
                <img src={logo} alt="" />
            </Link>
            <nav className="flex flex-col justify-center items-center gap-5 font-bold text-sm">
                <NavLink to="/" className="tracking-widest">HOME</NavLink>
                <NavLink to="/" className="tracking-widest">HEADPHONES</NavLink>
                <NavLink to="/" className="tracking-widest">SPEAKERS</NavLink>
                <NavLink to="/" className="tracking-widest">EARPHONES</NavLink>  
            </nav>
            <p className="opacity-50">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
            <p className="text-lg font-bold opacity-50">Copyright 2021. All Rights Reserved</p>
            <div className="flex flex-row gap-4">
                <img src={facebookIcon} alt="facebook icon" />
                <img src={twitterIcon} alt="twitter icon" />
                <img src={instagramIcon} alt="instagram icon" />
            </div>
        </footer>
    )
}