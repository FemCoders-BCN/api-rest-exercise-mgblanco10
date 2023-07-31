import axios from "axios";

// axios.defaults.baseURL = 'https://picsum.photos';
// axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.headers.post['Accept'] = 'application/json';

export const LoremPicsumService = () => {
  const baseURL = 'https://picsum.photos';
  const urlGetAll = '/v2/list';
  const urlGetById = '/id/{image}/{size}';
  const urlGetGrayscale = '/id/{image}/{size}/?grayscale'; 

  const getAll = () => {
    const response = axios.get(`${baseURL}${urlGetAll}`);
    return response;
  };
  
  const getById = (id, size) => {
    const response = axios.get(`${baseURL}${urlGetById}/${id}/${size}`);
    return response;
  }; 

  const getRandomGrayscale = (id, size) => {
    const response = axios.get(`${baseURL}${urlGetGrayscale}/${id}/${size}/?grayscale`);
    return response;
  }; 

  return {
    getAll,
    getById,
    getRandomGrayscale,
  }
}