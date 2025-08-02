import { Link, NavLink } from "react-router-dom"
import logo from "../assets/shared/desktop/logo.svg"
import facebookIcon from "../assets/shared/desktop/icon-facebook.svg"
import twitterIcon from "../assets/shared/desktop/icon-twitter.svg"
import instagramIcon from "../assets/shared/desktop/icon-instagram.svg"


export default function Footer(){
    return(
        <footer className="bg-black px-6">
        <div className="grid grid-cols-1 justify-center items-center gap-10 text-white text-center py-10 px-6 md:max-w-6xl mx-auto md:px-0 md:auto-rows-auto md:grid-cols-2 md:text-left">
            <Link to="/" className="text-3xl font-black flex justify-center md:justify-start md:col-span-full lg:col-span-1 lg:col-end-2 lg:row-start-1 lg:row-end-2">
                <img src={logo} alt="" />
            </Link>
            <nav className="flex flex-col justify-center items-center gap-5 font-bold text-sm md:flex-row md:justify-start md:col-span-full lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2 lg:justify-end">
                <NavLink to="/" className="tracking-widest">HOME</NavLink>
                <NavLink to="/" className="tracking-widest">HEADPHONES</NavLink>
                <NavLink to="/" className="tracking-widest">SPEAKERS</NavLink>
                <NavLink to="/" className="tracking-widest">EARPHONES</NavLink>  
            </nav>
            <p className="opacity-50 md:col-span-full lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
            <p className="text-lg font-bold opacity-50 lg:col-start-1 lg:col-end-3 lg:row-start-3 lg:row-end-4">Copyright 2021. All Rights Reserved</p>
            <div className="flex flex-row justify-center gap-4 md:justify-end lg:row-start-2 lg:row-end-3 lg:col-start-2 lg:col-end-3 lg:items-end">
                <img src={facebookIcon} alt="facebook icon" />
                <img src={twitterIcon} alt="twitter icon" />
                <img src={instagramIcon} alt="instagram icon" />
            </div>
        </div>
        </footer>
    )
}