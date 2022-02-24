import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = (
    {
        active = 'Stock'
    }) => {

    return (
        <>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-light" style={{width:"280px"}}>
                <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <span className="fs-4 ms-2">Home</span>
                </Link>
                <hr style={{color:"black"}}/>
                <ul className="nav nav-pills flex-column mb-auto mt-0">
                    <li className="nav-item">
                        <Link to="/profile" className="nav-link link-dark">
                            <span><i className="fas fa-user-circle"></i> Profile</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/stock" className="nav-link active">
                            <span><i className="fas fa-boxes"></i> Inventory</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/profile" className="nav-link link-dark">
                            <span><i className="fas fa-folder-plus"></i> Order</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/profile" className="nav-link link-dark">
                            <span><i className="fas fa-phone-square-alt"></i> Support</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/profile" className="nav-link link-dark">
                            <span><i className="fas fa-user-secret"></i> Privacy</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="container">
                <Link to="/create" className="btn btn-outline-dark" style={{width:"250px"}}>New Product</Link>
            </div>
        </>
    );
}
export default NavigationSidebar;
