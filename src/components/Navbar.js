import React from 'react';

import css from './Navbar.module.css';
import Url from 'utils/Url';

function Navbar(props) {
    function handleNavChange(page) {
        if (props.onNavChange) {
            props.onNavChange(page);
        }
    }

    return (
        <nav className={css.navbar}>
            <div className={css.navItem}>
                <button onClick={e=>handleNavChange('home')}>
                    <img src={Url('/assets/home.svg')} alt="Home"/>
                </button>
            </div>
            <div className={css.navItem}>
                <button onClick={e=>handleNavChange('explore')}>
                    <img src={Url('/assets/explore.svg')} alt="Explore"/>
                </button>
            </div>
			<div className={css.navItem}>
                <button onClick={e=>handleNavChange('newpost')}>
                    <img src={Url('/assets/newpost.svg')} alt="New Post"/>
                </button>
            </div>
            <div className={css.navItem}>
                <button onClick={e=>handleNavChange('activity')}>
                    <img src={Url('/assets/like.svg')} alt="Activity"/>
                </button>
            </div>
            <div className={css.navItem}>
                <button onClick={e=>handleNavChange('profile')}>
                    <img src={Url('/assets/profile.svg')} alt="Profile"/>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
