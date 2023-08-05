// import React, { useState } from 'react';
// import Navbar from '../../components/navbar/Navbar';
// import { LoremPicsumService } from '../../services/LoremPicsumService';

// function GrayscalePage() {
//   const [randomImage, setRandomImage] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleGetRandomGrayscale = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const size = '300';
//       const response = await LoremPicsumService().getRandomGrayscale(size);
//       console.log(response.data);

//       if (response.data && typeof response.data === 'string') {
//         setRandomImage(response.data);
//       } else {
//         setError('Error al obtener la imagen aleatoria en escala de grises');
//       }
//     } catch (error) {
//       setError('Error al obtener la imagen aleatoria en escala de grises');
//     }
//     setLoading(false);
//   };

//   return (
//     <main>
//       <h2>Aquí estará la imagen aleatoria en escala de grises de la tercera llamada</h2>
//       <Navbar />
//       <ul>
//         <p>INSTRUCCIONES</p>
//         <li>Crea los componentes que necesites para imprimir lo siguiente (siguiendo el ejemplo del componente PictureObject):</li>
//         <ol>
//           <li>La fotografía (queremos ver la imagen en nuestra app, no queremos la URL).</li>
//         </ol>
//         <li>Has de borrar estas instrucciones cuando lo tengas.</li>
//         <li>Los estilos los has de realizar tú misma.</li>
//       </ul>

//       {loading && <p>Cargando imagen...</p>}

//       {error && <p>Error: {error}</p>}

//       {randomImage && (
//         <div>
//           <img
//             src={randomImage}
//             alt="Imagen aleatoria en escala de grises"
//             onError={() => setError('Error al cargar la imagen')}
//           />
//         </div>
//       )}

//       <button onClick={handleGetRandomGrayscale} disabled={loading}>
//         Obtener imagen en escala de grises
//       </button>
//     </main>
//   );
// }

// export default GrayscalePage;



import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { LoremPicsumService } from '../../services/LoremPicsumService';

function GrayscalePage() {
  const [randomImage, setRandomImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGetRandomGrayscale = async () => {
    setLoading(true);
    setError(null);
    try {
      const size = '300';
      const response = await LoremPicsumService().getRandomGrayscale(size);
      console.log(response.data);

      if (response.data && typeof response.data === 'string') {
        setRandomImage(response.data);
      } else {
        setError('Error al obtener la imagen aleatoria en escala de grises');
      }
    } catch (error) {
      setError('Error al obtener la imagen aleatoria en escala de grises');
    }
    setLoading(false);
  };

  return (
    <main>
      <h2>Aquí estará la imagen aleatoria en escala de grises de la tercera llamada</h2>
      <Navbar />
      <ul>
        <p>INSTRUCCIONES</p>
        <li>Crea los componentes que necesites para imprimir lo siguiente (siguiendo el ejemplo del componente PictureObject):</li>
        <ol>
          <li>La fotografía (queremos ver la imagen en nuestra app, no queremos la URL).</li>
        </ol>
        <li>Has de borrar estas instrucciones cuando lo tengas.</li>
        <li>Los estilos los has de realizar tú misma.</li>
      </ul>

      {loading && <p>Cargando imagen...</p>}

      {error && <p>Error: {error}</p>}

      {randomImage ? (
        <div>
          <img
            src={randomImage}
            alt="Imagen aleatoria en escala de grises"
            onError={() => setError('Error al cargar la imagen')}
          />
        </div>
      ) : (
        <p>No se pudo cargar la imagen.</p>
      )}

      <button onClick={handleGetRandomGrayscale} disabled={loading}>
        Obtener imagen en escala de grises
      </button>
    </main>
  );
}

export default GrayscalePage;
