import React from 'react'
import {navigate} from "gatsby"
import { isLoggedIn, logout } from "../services/auth"
import styles from "./navbar.module.css"

const footer = () => {
    return (
        <div>
            <p>FOOTER</p>
            {isLoggedIn() ? (
                    <li>
                        <a
                            href="/"
                            onClick={event => {
                            event.preventDefault()
                            logout(() => navigate(`/app/login`))
                            }}
                        >
                            Logout
                      </a>
                    </li>
                    ) : null}
        </div>
    )
}

export default footer
