import React from 'react'
import { Link } from 'react-router-dom'
import {FaFacebookSquare, FaInstagramSquare} from "react-icons/fa"
import {AiFillTwitterSquare} from "react-icons/ai"

const Footer = () => {
    return (
        <footer className="page-footer">
            <div className="container-fluid text-center">

                    <div className="col-md-3 mb-md-0 mb-3">
                            <Link><FaFacebookSquare/></Link>
                            <Link><AiFillTwitterSquare/></Link>
                            <Link><FaInstagramSquare/></Link>
                    </div>
            </div>

            <div className="footer-copyright text-center py-3">© 2021 Copyright:
                <Link to="https://semyonp.com/"> Semyonp.com</Link>
            </div>

        </footer>
    )
}

export default Footer
