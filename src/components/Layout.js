import React from 'react'
import Navbar from "./Navbar"
import Footer from "./Footer"
import "./Layout.css"
import { navigate } from "gatsby"
import { isLoggedIn } from "../services/auth"


const layout = ( {children }) => {
    if (!isLoggedIn()) {
        navigate("/app/login")
        return null
      }
    return (
        <>
            <Navbar/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    )
}

export default layout
