import { useContext } from 'react';
import { FavoriteContext } from '../../contexts/FavoriteContext';
import { LocationContext } from '../../contexts/LocationContext';

const FavoriteListModal = ({ handleShowModal }) => {
  const { favorites } = useContext(FavoriteContext);
  const { setSelectedLocation } = useContext(LocationContext);

  const handleSelectLocation = (fav) => {
    setSelectedLocation({ ...fav });
    handleShowModal();
  };

  return (
    <div className="absolute right-0 max-w-xs py-4 text-black bg-white border-gray-500 rounded-md shadow-lg top-16">
      <h3 className="px-4 text-lg font-bold">Favorite Locations</h3>
      <ul className="mt-4 space-y-2" role="menu">
        {favorites.length > 0 ? (
          favorites.map((fav) => (
            <li key={fav.location} role="none">
              <button
                onClick={() => handleSelectLocation(fav)}
                className="w-full px-4 py-2 text-left cursor-pointer hover:bg-gray-200"
                role="menuitem"
              >
                {fav.location}
              </button>
            </li>
          ))
        ) : (
          <li className="px-4 py-2">
            <p>Nothing is added to Favorites!</p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default FavoriteListModal;
