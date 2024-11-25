import NavBar from "./NavBar"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="flex justify-between md:justify-around my-5">
      <Link to="/"><h1 className="text-2xl md:text-4xl text-rose-500 font-bold animate-pulse">A Virtual Library</h1></Link>  
      <NavBar />
    </header>
  )
}

export default Header