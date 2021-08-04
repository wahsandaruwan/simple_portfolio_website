import {BiMenuAltLeft} from "react-icons/bi"
import { MdClose } from "react-icons/md"
import {Link} from "react-router-dom"
import {useState} from "react"

const NavMenu = () => {
  // Menu State
  const [isShow, setIsShow] = useState(false)

  return (
    <>
      <div className="menu-btn">
        <button onClick={() => setIsShow(!isShow)}>
          {isShow ? <MdClose/> : <BiMenuAltLeft/>}
        </button>
      </div>

      <header className={`${isShow ? "hdr show" : "hdr"}`}>
        <nav className="menu-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
     </header>
    </>
  )
}

export default NavMenu
