import { useContext } from 'react';
import { FavoriteContext } from '../../contexts/FavoriteContext';
import { LocationContext } from '../../contexts/LocationContext';

const FavoriteListModal = ({ handleShowModal }) => {
  const { favorites } = useContext(FavoriteContext);
  const { setSelectedLocation } = useContext(LocationContext);

  return (
    <div className="absolute right-0 max-w-xs py-4 text-black bg-white border-gray-500 rounded-md shadow-lg top-16 ">
      <h3 className="px-4 text-lg font-bold">Favorite Locations</h3>
      <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
        {favorites.length > 0 ? (
          favorites.map((fav) => (
            <li
              key={fav.location}
              className="hover:bg-gray-200"
              onClick={() => {
                setSelectedLocation({ ...fav }); // set selected location to LocationContext
                handleShowModal(); // close modal
              }}
            >
              {fav.location}
            </li>
          ))
        ) : (
          <p>Nothing is added to Favorites!</p>
        )}
      </ul>
    </div>
  );
};

export default FavoriteListModal;
