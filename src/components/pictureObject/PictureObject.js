import React from 'react'
import './PictureObject.css'


const PictureObject = ({ pictures }) => {
  return (
    <div>
      <h3>Imágenes:</h3>
      <ul class="container-PintureObject">
        {pictures.map((picture) => (
          <li key={picture.id}>
            <p class="id-img">ID: {picture.id}</p>
            <p class="autor-img">Autor: {picture.author}</p>
            <img class="size-img"src={picture.download_url} alt={`Imagen por ${picture.author}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PictureObject