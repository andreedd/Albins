import React from 'react'
import {Link, navigate} from "gatsby"
import { isLoggedIn, logout } from "../services/auth"

const navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/categories">Categories</Link>
                </li>
                <li>
                    <Link to="/songs">Songs</Link>
                </li>
                <li>
                    <Link to="/search">Search</Link>
                </li>
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
            </ul>
        </nav>
    )
}

export default navbar