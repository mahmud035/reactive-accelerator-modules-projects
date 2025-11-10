import { useState } from 'react';

const SearchTask = ({ handleSearchTask }) => {
  const [searchText, setSearchText] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    handleSearchTask(searchText);
  };

  return (
    <div className="flex justify-end p-2">
      <form>
        <div className="flex">
          <div className="relative overflow-hidden rounded-lg text-gray-50 md:min-w-[380px] lg:min-w-[440px]">
            <input
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              type="search"
              id="search-dropdown"
              className="z-20 block w-full px-4 py-2 pr-10 bg-gray-800 focus:outline-none"
              placeholder="Search Task"
              required
            />
            <button
              onClick={handleClick}
              type="submit"
              className="absolute top-0 h-full text-white right-2 rounded-e-lg md:right-4"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchTask;
