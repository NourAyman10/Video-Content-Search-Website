import React, { Fragment } from 'react'
import NavBar from '../components/navBar/NavBar'
import Footer from '../components/footer/Footer'

const MainLayout = ({ children }) => {
    return (
        <Fragment>
            <NavBar />
            <main>{children}</main>
            <Footer />
        </Fragment>
    )
}

export default MainLayout