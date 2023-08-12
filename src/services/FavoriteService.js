export const FavoriteService = () => {
    const getAll = () => {
      const response = axios.get(urlFavorites);
      return response;
    };
    
    const getById = (id) => {
      const response = axios.get(`${urlFavorites}/${id}`);
      return response;
    };
  
    const create = (favoriteData) => {
      const response = axios.post(urlFavorites, favoriteData);
      return response;
    };
  
    const update = (id, favoriteData) => {
      const response = axios.put(`${urlFavorites}/${id}`, favoriteData);
      return response;
    };
  
    const remove = (id) => {
      const response = axios.delete(`${urlFavorites}/${id}`);
      return response;
    };
  
    return {
      getAll,
      getById,
      create,
      update,
      remove,
    }
  };