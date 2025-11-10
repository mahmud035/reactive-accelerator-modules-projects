import { useState } from 'react';
import { toast } from 'react-toastify';
import logo from '../assets/icons/logo.svg';
import moon from '../assets/icons/moon.svg';
import ring from '../assets/icons/ring.svg';
import shoppingCart from '../assets/icons/shopping-cart.svg';
import sun from '../assets/icons/sun.svg';
import CartDetailsModal from '../components/Movie/CartDetailsModal';
import { useCart } from '../contexts/CartContext';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const cart = useCart();
  const { themeMode, lightMode, darkMode } = useTheme();

  //* event handlers
  const handleShowCart = () => {
    if (cart.length > 0) {
      setShowCart(true);
    } else {
      setShowCart(false);
      toast.error('Cart is Empty !');
    }
  };

  const handleToggleTheme = (themeMode) => {
    if (themeMode === 'dark') {
      lightMode();
    } else {
      darkMode();
    }
  };

  return (
    <header>
      {/* Modal */}
      {showCart && <CartDetailsModal setShowCart={setShowCart} />}

      <nav className="container flex items-center justify-between py-6 space-x-10">
        <a href="index.html">
          <img src={logo} width="139" height="26" alt="logo" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ring} width="24" height="24" alt="ring" />
            </a>
          </li>
          <li>
            <a
              onClick={() => handleToggleTheme(themeMode)}
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img
                src={themeMode === 'dark' ? sun : moon}
                width="24"
                height="24"
                alt="sun"
              />
            </a>
          </li>
          <li>
            <a
              onClick={handleShowCart}
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={shoppingCart} width="24" height="24" alt="cart" />

              {/* Cart item number */}
              {cart.length > 0 && (
                <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                  {cart.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
