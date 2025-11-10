import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const FavoriteContext = createContext('');

const FavoriteProvider = ({ children }) => {
  //* Get favorites locations from localStorage
  const [favorites, setFavorites] = useLocalStorage('favorites', []);

  //* Add to favorites
  const addToFavorites = (latitude, longitude, location) => {
    setFavorites([
      ...favorites,
      {
        latitude,
        longitude,
        location,
      },
    ]);
  };

  //* Remove from favorites
  const removeFromFavorites = (location) => {
    const restFavorites = favorites.filter((fav) => fav.location !== location);
    setFavorites(restFavorites);
  };

  const favoritesInfo = {
    favorites,
    addToFavorites,
    removeFromFavorites,
  };

  return (
    <FavoriteContext.Provider value={favoritesInfo}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
