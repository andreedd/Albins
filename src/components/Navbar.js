import React from 'react'
import {Link, navigate} from "gatsby"
import { isLoggedIn, logout } from "../services/auth"
import styles from "./navbar.module.css"

const navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navlist}>
                <Link to="/categories">Home</Link>
                <Link to="/search">Search</Link>
            </div>
        </nav>
    )
}

export default navbar