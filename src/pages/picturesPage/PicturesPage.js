import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar'
import PictureObject from '../../components/pictureObject/PictureObject'
import {LoremPicsumService} from '../../services/LoremPicsumService'


// function PicturesPage() {
  
//   return (
//     <main>
//         <h2>Aquí estarán todos los objetos de la primera llamada</h2>
//         <Navbar/>
//         <ul>
//             <p>INSTRUCCIONES</p>
//             <li>Crea los componentes que necesites para imprimir una lista o tarjetas que contengan lo siguiente (deberán estar todos los objetos de la llamada a la API):</li>
//             <ol>
//                 <li>El id de la imagen.</li>
//                 <li>Su autor.</li>
//                 <li>La fotografía (queremos ver la imagen en nuestra app, no queremos la url).</li>
//             </ol>
//             <li>Has de borrar estas instrucciones cuando lo tengas.</li>
//             <li>Los estilos los has de realizar tú misma.</li>
//         </ul>
//         <PictureObject/>
//     </main>
//   )
// }

// export default PicturesPage


function PicturesPage() {
  const loremPicsumService = LoremPicsumService(); 
  const [pictures, setPictures] = useState([]); 

  useEffect(() => {
    const fetchPictures = async () => {
      try {
        const response = await loremPicsumService.getAll(); 
        setPictures(response.data); 
      } catch (error) {
        console.error('Error fetching pictures:', error);
      }
    };

    fetchPictures(); 
  }, []);
  return (
    <main>
      <h2>Aquí estarán todos los objetos de la primera llamada</h2>
      <Navbar />
      <ul>
        {/* ...Instrucciones... */}
      </ul>
      {/* Renderiza los componentes PictureObject y pasa las imágenes como prop */}
      <PictureObject pictures={pictures} />
    </main>
  );
}

export default PicturesPage;