import { Link } from "react-router-dom"
import Data from "../Data/Data.json"

function NavBar(){
    
    return(
        <nav className="font-custom_font_2 flex my-2 border-b-2 border-orange-400 ">
            <div className="text-orange-400 
                            text-xl
                            md:text-5xl md:ml-5">
                <a href="/">{Data.restaurant_name}</a>
            </div>
            <div className="container">
                <div className="mr-5">
                    <ul className="flex flex-row justify-end space-x-10">
                        <li className="my-3">
                            <Button name={"Home"} to={"/"}></Button>
                        </li>
                        <li className="my-3">
                            <Button name={"Menu"} to={"/menu"}></Button>
                        </li>
                        <li className="my-3">
                            <Button name={"Contact"} to={"/contact"}></Button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


const Button = ({name,to}) =>{
    return(
        <Link to={to} className="NavBarButtons">
            {name}
        </Link>
    )
}



export default NavBar