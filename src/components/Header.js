import React from 'react';

import css from './Header.module.css';
import Url from 'utils/Url';

function Header() {
    return (
        <header className={css.header}>
            <div className={css.headerItem}>
                <button>
                    <img src={Url('/assets/camera.svg')} alt="Home"/>
                </button>
            </div>
            <div className={css.headerItem}>
                <button>
                    <img src={Url('/assets/logo.png')} alt="Explore"/>
                </button>
            </div>
			<div className={css.headerItem}>
                <button>
                    <img src={Url('/assets/message.svg')} alt="Explore"/>
                </button>
            </div>
        </header>
    );
}

export default Header;
