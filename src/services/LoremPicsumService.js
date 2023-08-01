import axios from "axios";

const baseURL = 'https://picsum.photos';
const urlGetAll = '/v2/list';
const urlGetById = '/id/{image}/{size}';
const urlGetGrayscale = '/id/{image}/{size}/?grayscale'; 

axios.defaults.baseURL = baseURL;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

export const LoremPicsumService = () => {
  const getAll = () => {
    const response = axios.get(urlGetAll);
    return response;
  };
  
  const getById = (id, size) => {
    const response = axios.get(`${baseURL}${urlGetById.replace('{image}', id).replace('{size}', size)}`);
    return response;
  }; 

  const getRandomGrayscale = (size) => {
    const response = axios.get(`${urlGetGrayscale.replace('{image}', '').replace('{size}', size)}`);
    return response;
  }; 

  return {
    getAll,
    getById,
    getRandomGrayscale,
  }
};

//Prueba de la URL GetById
// const testGetById = async () => {
//   try {
//     const imageId = 1; 
//     const imageSize = '200'; 
//     const response = await LoremPicsumService().getById(imageId, imageSize);
//     console.log("respuesta: " , response.config.url); 
//   } catch (error) {
//     console.error('Error al obtener la imagen por ID:', error);
//   }
// };

// testGetById();
