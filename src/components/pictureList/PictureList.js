import React from 'react';
import './PictureList.css';

const PictureList = ({ pictures, onDelete, onEdit }) => {
  return (
    <div className='containerPictureList'>
      <h3>Favoritos:</h3>
      <ul className="container-PictureList">
        {pictures.map((picture) => (
          <li key={picture.id} className="picture-card">
            <p>ID: {picture.id}</p>
            <p>Autor: {picture.author}</p>
            <img className='img-PictureList' src={picture.download_url} alt={`Imagen por ${picture.author}`} />
            <button onClick={() => onEdit(picture)}>Editar</button>
            <button onClick={() => onDelete(picture.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PictureList;