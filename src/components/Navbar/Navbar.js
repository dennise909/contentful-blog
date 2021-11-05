import React, { Component } from 'react';
import './Navbar.css'
import { Link} from 'react-router-dom';
class Navbar extends Component {


    render() {
        return (
        <div>
            <nav className="navbar">
                <ul>
                    <Link className ="button" to='/'> Home </Link>
                    <Link className ="button" to='/posts'> Posts </Link>
                    <Link className ="button" to='/contact'> Contact </Link>
                    <Link className ="button" to='/about'> About </Link>
                </ul>
            </nav>
        </div>
        );
    }
}

export default Navbar;