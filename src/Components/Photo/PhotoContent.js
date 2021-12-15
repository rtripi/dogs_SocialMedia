import React from 'react';
import css from './PhotoContent.module.css';
import { Link } from 'react-router-dom';
import PhotoComments from './PhotoComments';
import { UserContext } from '../../UserContext';
import PhotoDelete from './PhotoDelete';
import Image from '../Helper/Image';

const PhotoContent = ({ data, single }) => {
  const user = React.useContext(UserContext);
  const { photo, comments } = data;

  return (
    <div className={`${css.photo} ${single ? css.single : ''}`}>
      <div className={css.img}>
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className={css.details}>
        <div>
          <p className={css.author}>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}

            <span className={css.visualizacoes}>
              {photo.acessos > 5000 ? '+5K' : photo.acessos}
            </span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={css.attributes}>
            <li>{photo.peso} Kg</li>
            <li>{photo.idade} anos</li>
          </ul>
        </div>
      </div>
      <PhotoComments single={single} id={photo.id} comments={comments} />
    </div>
  );
};

export default PhotoContent;
