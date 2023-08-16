import React from 'react'
import './PictureObject.css'

const PictureObject = ({picture}) => {
  return (
    <div className='container'>
      <ul className="container-PintureObject">
          <li key={picture.id}>
            <p className="id-img">ID: {picture.id}</p>
            <p className="autor-img">Autor: {picture.author}</p>
            <img className="size-img"src={picture.download_url} alt={`Imagen por ${picture.author}`} />
          </li>
      </ul>
    </div>
  );
};

export default PictureObject