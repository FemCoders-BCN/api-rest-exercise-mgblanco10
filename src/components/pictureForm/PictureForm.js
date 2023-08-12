import React, { useState } from 'react';
import './PictureForm.css';

const PictureForm = ({ onSubmit }) => {
  const [author, setAuthor] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPicture = { author, download_url: imageUrl };
    onSubmit(newPicture);
    setAuthor('');
    setImageUrl('');
  };

  return (
    <div className="container-PictureForm">
      <h3>Agregar a Favoritos:</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Autor:
          <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </label>
        <label>
          URL de la imagen:
          <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        </label>
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default PictureForm;
