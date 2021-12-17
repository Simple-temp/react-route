import {Link} from 'react-router-dom';
import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <header>
            <div className='container'>
                    <div className="logo">
                        <h1>Coursera</h1>
                        <input type="text" placeholder='Type Web Related Language' />
                        <button className='btn'>Search</button>
                    </div>
                    <ul>
                        <Link className='li' to="/">Home</Link>
                        <Link className='li' to="/courses">Courses</Link>
                        <Link className='li' to="/review">Ordered Review</Link>
                        <Link className='li' to="/contact">Contact</Link>
                    </ul>
            </div>
        </header>
    );
};

export default Navbar;