// import React, { useState } from 'react';
// import Navbar from '../../components/navbar/Navbar';
// import { LoremPicsumService } from '../../services/LoremPicsumService'; 

// const PicturePage = () => {
//   const pictureService = LoremPicsumService();

//   const [imageId, setImageId] = useState('');
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleInputChange = (event) => {
//     setImageId(event.target.value);
//   };

//   const fetchImageById = async () => {
//     try {
//       const response = await pictureService.getById(imageId, '200'); 
//       setSelectedImage(response.data);
//     } catch (error) {
//       console.error('Error al obtener la imagen:', error);
//       setSelectedImage(null);
//     }
//   };

//   return (
//     <main>
//       <h2>Aquí estará la imagen de la segunda llamada</h2>
//       <Navbar />
//       <div>
//         <h3>Imagen:</h3>
//         <input
//           type="number"
//           placeholder="Ingresa el ID de la imagen (0 a 29)"
//           value={imageId}
//           onChange={handleInputChange}
//           style={{ width: "210px" }} 
//         />
//         <button onClick={fetchImageById}>Obtener Imagen</button>
//         {selectedImage ? (
//           <ul className="container-PintureObject">
//             <li key={selectedImage.id}>
//               <p className="id-img">ID: {selectedImage.id}</p>
//               <p className="autor-img">Autor: {selectedImage.author}</p>
//               <img
//                 className="size-img"
//                 src={selectedImage.download_url}
//                 alt={`Imagen por ${selectedImage.author}`}
//               />
//             </li>
//           </ul>
//         ) : (
//           <p>Ingresa un ID válido y haz clic en "Obtener Imagen" para mostrar la imagen.</p>
//         )}
//       </div>
//     </main>
//   );
// };

// export default PicturePage;

import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { LoremPicsumService } from '../../services/LoremPicsumService';

const PicturePage = () => {
  const pictureService = LoremPicsumService();

  const [imageId, setImageId] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleInputChange = (event) => {
    setImageId(event.target.value);
  };

  const fetchImageById = async () => {
    try {
      const response = await pictureService.getById(`image${imageId}`, '200'); // Utilizamos '200' como tamaño
      setSelectedImage(response.config.url);
    } catch (error) {
      console.error('Error al obtener la imagen:', error);
      setSelectedImage(null);
    }
  };

  return (
    <main>
      <h2>Aquí estará la imagen de la segunda llamada</h2>
      <Navbar />
      <div>
        <h3>Imagen:</h3>
        <input
          type="number"
          placeholder="Ingresa el ID de la imagen (0 a 29)"
          value={imageId}
          onChange={handleInputChange}
          style={{ width: "210px" }}
        />
        <button onClick={fetchImageById}>Obtener Imagen</button>
        {selectedImage ? (
          <ul className="container-PintureObject">
            <li>
              {/* La imagen se muestra utilizando la URL directamente */}
              <img
                className="size-img"
                src={selectedImage}
                alt={`Imagen por ID ${imageId}`}
              />
            </li>
          </ul>
        ) : (
          <p>Ingresa un ID válido y haz clic en "Obtener Imagen" para mostrar la imagen.</p>
        )}
      </div>
    </main>
  );
};

export default PicturePage;


