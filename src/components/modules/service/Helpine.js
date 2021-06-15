import React from 'react'
import "./service.css"
import { Link } from "react-router-dom";

const Helpine = () => {
    return (
        <div className="helpline-section">
        <div className="helpline-content text-center">
            <h4>Need Consultancy Help</h4>
            <p className="text-white">Gatherin galso sprit moving shall flow</p>
            <Link to="/contact-us" className="btn btn-primary" >Contact Us</Link>
        </div>
    </div>
    )
}

export default Helpine
