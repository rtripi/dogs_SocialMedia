import React from 'react';
import css from './Image.module.css';

const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = React.useState(true);
  function handleLoad({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }
  return (
    <div className={css.wrapper}>
      {skeleton && <div className={css.skeleton}></div>}
      <img onLoad={handleLoad} className={css.img} alt={alt} {...props} />
    </div>
  );
};

export default Image;
