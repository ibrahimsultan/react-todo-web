import React from 'react'
import './style.css'

export const Footer = () => {

    let footerStyle = {
        position: "relative",
        top: "5vh",
        width: "100%"
    }

    return (
        <footer className="bg-dark text-light py-4" style={footerStyle}>
            <h1 className="text-center">
                CREATE DAILY TODOS
            </h1>
            <h5 className="text-center">
                Made by <a href="https://ibrahimsultan.github.io/Ibrahims-Profile-Resume/" 
                style={{textDecoration: "none", color: "aqua"}}>
                    IBRAHIM SULTAN
                </a>
            </h5>

        </footer>
    )
}
