import React from 'react';

import css from './ProfileData.module.css';

function ProfileData(props) {
    return (
        <div className={css.stat}>
            <span className={css.statNum}>{props.num}</span>
            <span className={css.statLabel}>{props.label}</span>
        </div>
    );
}

export default ProfileData;
