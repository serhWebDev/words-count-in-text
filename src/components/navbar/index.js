import React from 'react';

const Navbar = () => (
    <header>
        <nav className="navbar-dark bg-dark">
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link text-white" href="https://github.com/serhiiVek/">my GitHub</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="https://github.com/serhiiVek/words-count-in-text">GitHub repository</a>
                </li>
            </ul>
        </nav>
    </header>
);

export default Navbar;
