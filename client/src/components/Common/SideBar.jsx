import React from 'react';
import {Link} from "react-router-dom";


const SideBar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-space-between text-white p-4 vh-100">
            <a href="">
                <i className="bi bi-bootstrap fs-5 me-2"></i>
                <span className="cude fs-4">CRUD FOOD</span>
            </a>
            <hr className="text-bg-secondary mt-2"/>
            <ul className="nav nav-pills flex-column p-0 m-0">
                <li className="nav-item p-1">
                    <a className="nav-link text-black-50" href="">
                        <span className="fs-5">MENU</span>
                    </a>
                </li>
                <li className="nav-item p-1">
                    <Link className="nav-link text-black-50" to="/CreateFood">
                        <i className="bi bi-cart-dash-fill me-2 fs-5"></i>
                        <span className="fs-5">Create Food</span>
                    </Link>
                </li>
                <li className="nav-item p-1">
                    <Link className="nav-link text-black-50" to="/">
                        <i className="bi bi-blockquote-right me-2 fs-5"></i>
                        <span className="fs-5">All Foods</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default SideBar;