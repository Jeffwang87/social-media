import React from 'react';
import { Link } from 'react-router-dom';

import css from './Navbar.module.css';
import Url from 'utils/Url';
function Navbar() {
    return (
        <nav className={css.navbar}>
            <div className={css.navItem}>
                <Link to="/">
                    <img src={Url('/assets/home.svg')} alt="Home"/>
                </Link>
            </div>
            <div className={css.navItem}>
                <Link to="/explore">
                    <img src={Url('/assets/explore.svg')} alt="Explore"/>
                </Link>
            </div>
			<div className={css.navItem}>
                 <Link to="/newpost">
                    <img src={Url('/assets/newpost.svg')} alt="New Post"/>
                </Link>
            </div>
            <div className={css.navItem}>
                 <Link to="/activity">
                    <img src={Url('/assets/like.svg')} alt="Activity"/>
                </Link>
            </div>
            <div className={css.navItem}>
                 <Link to="/profile">
                    <img src={Url('/assets/profile.svg')} alt="Profile"/>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
