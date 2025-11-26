import { Link } from "react-router";
import Logo from "../assets/matt-logo2.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-2 w-3/4 mx-auto">
      <div>
        <img src={Logo} width={61} height={36} alt="logo" />
      </div>
      <div className="flex gap-x-3">
        <Link className="hover:text-[#7190F0]" to="/">Home</Link>
        <Link className="hover:text-[#7190F0]" to="/blog">My Blog</Link>
      </div>
    </nav>
  )
}

export default Navbar