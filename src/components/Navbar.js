import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
  return (
    <div className="container">
            <nav>
                <ul className="navLinks">
                    <li className="navLinkItem">
                        <Link to="/" className="navLinkText">
                            Home
                        </Link>
                    </li>
                    <li className="navLinkItem">
                        <Link to="/about" className="navLinkText">
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
  )
}

export default Navbar
