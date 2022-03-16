import React from 'react'
import {Link} from "react-router-dom"
// import useStyles from "../styles/Header.style"

const Header = () => {
    // const classes = useStyles()
    return(
        <div className="ui menu">
            <div className="header item">
                <Link to="/">
                    {/* <h2 className={classe.title}>Fakeshop</h2> */}
                    <h2>Fakeshop</h2>
                </Link>
            </div>
        </div>
    )
}

export default Header