import LanguageSwitcher from './LanguageSwitcher';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className="py-4 border-b md:py-6">
      <div className="container flex items-center justify-between mx-auto gap-x-6">
        <Logo />
        <LanguageSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
