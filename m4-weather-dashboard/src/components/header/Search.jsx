import { useContext } from 'react';
import searchIcon from '../../assets/search.svg';
import { LocationContext } from '../../contexts/LocationContext';
import { getLocationByName } from '../../data/location-data';
import useDebounce from '../../hooks/useDebounce';

const Search = () => {
  const { setSelectedLocation } = useContext(LocationContext);

  // use debounce for searching
  const doSearch = useDebounce((term) => {
    const fetchedLocation = getLocationByName(term);
    setSelectedLocation({ ...fetchedLocation });
  }, 500);

  const handleChange = (e) => {
    const value = e.target.value;
    doSearch(value);
  };

  return (
    <form action="#">
      <div className="flex items-center px-3 py-2 space-x-2 transition-all border-b group focus-within:bg-black/30 border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          onChange={handleChange}
          className="w-full text-xs text-white bg-transparent border-none outline-none placeholder:text-white md:text-base"
          type="search"
          placeholder="Search Location"
          required
        />
        <button>
          <img src={searchIcon} />
        </button>
      </div>
    </form>
  );
};

export default Search;
