import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Menu extends Component {
    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/"> Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/topics"> Topicos </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about"> Sobre </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
};

export default Menu;
