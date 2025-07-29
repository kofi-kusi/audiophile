import { Link } from "react-router-dom"

export default function Header(){
    return(
        <div className="max-w-9/10 mx-auto">
            <div></div>
            <div>
                <Link to="/"><h1 className="text-white text-2xl font-bold">audiophile</h1></Link>
            </div>
            <div></div>
        </div>
    )
}