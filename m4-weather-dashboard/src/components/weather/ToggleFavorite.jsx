import { useContext, useEffect, useState } from 'react';
import redHeartIcon from '../../assets/heart-red.svg';
import heartIcon from '../../assets/heart.svg';
import { FavoriteContext } from '../../contexts/FavoriteContext';
import { WeatherContext } from '../../contexts/WeatherContext';

const ToggleFavorite = () => {
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoriteContext); // get favoritesInfo from context

  const { weatherData } = useContext(WeatherContext); // get weatherData from context
  const { latitude, longitude, location } = weatherData;
  const [isFavorite, toggleFavorite] = useState(false); // state variable for toggle favorite

  // When the page reloads, check whether the current location is already in favorites or not.
  useEffect(() => {
    const found = favorites.find((fav) => fav.location === location);
    toggleFavorite(found);
  }, [favorites, location]);

  const handleFavorites = () => {
    const found = favorites.find((fav) => fav.location === location);

    if (!found) {
      addToFavorites(latitude, longitude, location);
    } else {
      removeFromFavorites(location);
    }
    toggleFavorite(!isFavorite);
  };

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          onClick={handleFavorites}
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
        >
          <span>Add to Favorite</span>
          <img src={isFavorite ? redHeartIcon : heartIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default ToggleFavorite;
