import { useState } from 'react';
import Favorite from './Favorite';
import FavoriteListModal from './FavoriteListModal';
import Logo from './Logo';
import Search from './Search';

const Header = () => {
  const [showFavModal, setShowFavModal] = useState(false);

  const handleShowModal = () => {
    setShowFavModal(!showFavModal);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full pb-10 bg-gradient-to-b from-black/60 to-black/0">
      <nav className="container flex items-center justify-between py-6">
        <Logo />

        <div className="relative flex items-center gap-4">
          <Search />
          <Favorite handleShowModal={handleShowModal} />

          {showFavModal && (
            <FavoriteListModal handleShowModal={handleShowModal} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
