import React from 'react';
import { PHOTO_DELETE } from '../../api';
import useFetch from '../../Hooks/useFetch';
import css from './PhotoDelete.module.css';

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm('Deseja deletar a imagem?');
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <button disabled className={css.delete}>
          Deletar
        </button>
      ) : (
        <button onClick={handleClick} className={css.delete}>
          Deletar
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
