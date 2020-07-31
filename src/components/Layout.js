import React from 'react'
import Navbar from "./Navbar"
import Footer from "./Footer"
import "./Layout.css"
import { navigate } from "gatsby"
import { isLoggedIn } from "../services/auth"


const layout = ( {children }) => {

    if (!isLoggedIn()) {
        if (typeof window !== 'undefined') { navigate("/app/login"); }
        return null
        }
    
    return (
        <>
            <main>
                {children}
            </main>
            <Footer/>
            <Navbar/>
        </>
    )
}

export default layout
