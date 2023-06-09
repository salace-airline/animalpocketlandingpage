import * as React from 'react'
import Navbar from './Navbar.js'
import Footer from './Footer.js'
import BackgroundImage from './BackgroundImage.js'

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            { children }
            <Footer />
        </div>
    )
}

export default Layout