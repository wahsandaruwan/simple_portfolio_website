// Components
import {Link} from "react-router-dom"
// Icons
import {BiMenuAltLeft} from "react-icons/bi"
import {MdClose} from "react-icons/md"
// Hooks
import {useState} from "react"
// Data
import {navBar} from "../data/nav"

// Navigation Menu Component
const NavMenu = () => {
  // Menu State
  const [isShow, setIsShow] = useState(false)

  // Navlink Display State
  const [links, setLinks] = useState(navBar)

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
            {
              links.map((link) => {
                // Object Destructure
                const {id, title, url} = link
                return (
                  <li key={id} onClick={() => setIsShow(false)}>
                    <Link to={url}>{title}</Link>
                  </li>
                )
              })
            }
          </ul>
        </nav>
     </header>
    </>
  )
}

export default NavMenu
