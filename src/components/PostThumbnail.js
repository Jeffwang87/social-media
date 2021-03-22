import React from 'react';

import css from './PostThumbnail.module.css';
import Url from 'utils/Url';

function PostThumbnail(props) {
  return (
    <div className={css.square}>
      <div className={css.content}>
        <img className={css.image} src={Url(props.post.photo)} alt="Post Thumbnail"/>
      </div>
    </div>
  );
}

export default PostThumbnail;
