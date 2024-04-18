import React, { Fragment } from 'react'
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.svg"
import styles from "./NavBar.module.css"

const NavBar = () => {
  return (
    <Fragment>
        <nav>
            <img src={logoImg} alt="logo" />
            <ul>
                <li><Link to="/Video-Content-Search-Website">Home</Link></li>
                {/* <li>Usage</li>
                <li>About</li>
                <li>Contacts</li> */}
            </ul>
        </nav>
    </Fragment>
  )
}

export default NavBar