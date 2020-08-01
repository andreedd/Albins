import React from 'react'
import Navbar from "./Navbar"
import Footer from "./Footer"
import "./css/Layout.css"
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
            <Navbar/>
        </>
    )
}

export default layout
