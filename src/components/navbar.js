import React  from "react";
import Modal from './modal';
import { Link, NavLink } from "react-router-dom";
import '../index.css';

const Navbar = ({selectedItem}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                Shop <code><i>groceries</i></code>
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <div className="nav-item nav-link">
                        <Modal selectedItem={selectedItem} />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
