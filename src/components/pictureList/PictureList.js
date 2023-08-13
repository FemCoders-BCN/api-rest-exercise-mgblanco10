// import React from 'react';
// import './PictureList.css';

// const PictureList = ({ pictures, onDelete, onEdit, editingPictureId, onEditAuthor }) => {
//   return (
//     <div className='containerPictureList'>
//       <h3>Favoritos:</h3>
//       <ul className="container-PictureList">
//         {pictures.map((picture) => (
//           <li key={picture.id} className="picture-card">
//             <p>ID: {picture.id}</p>
//             {editingPictureId === picture.id ? (
//               <div>
//                 <input
//                   type="text"
//                   value={picture.newAuthor || picture.author} // Use the newAuthor value or the original author
//                   onChange={(e) =>
//                     onEditAuthor(picture.id, e.target.value)

//                   }
//                 />
//                 <button onClick={() => onEdit(picture.id)}>Cancelar</button>
//                 <button onClick={() => onEditAuthor(picture.id, picture.newAuthor)}>Guardar</button>
//               </div>
//             ) : (
//               <p>Autor: {picture.author}</p>
//             )}
//             <img className='img-PictureList' src={picture.download_url} alt={`Imagen por ${picture.author}`} />
//             {editingPictureId !== picture.id ? (
//               <button onClick={() => onEdit(picture.id)}>Editar</button>
//             ) : null}
//             <button onClick={() => onDelete(picture.id)}>Eliminar</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PictureList;


import React from 'react';
import './PictureList.css';

const PictureList = ({ pictures, onDelete, onEdit, editingPictureId, onEditAuthor }) => {
  return (
    <div className='containerPictureList'>
      <h3>Favoritos:</h3>
      <ul className="container-PictureList">
        {pictures.map((picture) => (
          <li key={picture.id} className="picture-card">
            <p>ID: {picture.id}</p>
            {editingPictureId === picture.id ? (
              <div>
                <input
                  type="text"
                  value={picture.newAuthor || picture.author}
                  onChange={(e) => {
                    console.log("Changing value:", e.target.value); // Agregar este console.log
                    onEditAuthor(picture.id, e.target.value);
                  }}
                />
                <button onClick={() => onEdit(picture.id)}>Cancelar</button>
                <button onClick={() => onEditAuthor(picture.id, picture.newAuthor)}>Guardar</button>
              </div>
            ) : (
              <p>Autor: {picture.author}</p>
            )}
            <img className='img-PictureList' src={picture.download_url} alt={`Imagen por ${picture.author}`} />
            {editingPictureId !== picture.id ? (
              <button onClick={() => onEdit(picture.id)}>Editar</button>
            ) : null}
            <button onClick={() => onDelete(picture.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PictureList;






