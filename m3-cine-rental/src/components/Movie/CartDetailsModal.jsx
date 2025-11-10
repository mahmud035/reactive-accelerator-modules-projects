import { Fragment } from 'react';
import { toast } from 'react-toastify';
import checkout from '../../assets/icons/checkout.svg';
import deleteIcon from '../../assets/icons/delete.svg';
import { useCart, useCartDispatch } from '../../contexts/CartContext';
import { getImageUrl } from '../../utils/movie-utility';

const CartDetailsModal = ({ setShowCart }) => {
  const cart = useCart();
  const dispatch = useCartDispatch();

  //* event handlers
  const handleDeleteCart = (e, movie) => {
    e.preventDefault(); //* prevent button default behavior

    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: {
        ...movie,
      },
    });

    toast.success(`Removed ${movie.title} from Cart !`);
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-black/60 backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[790px] p-4 max-h-[90vh] overflow-auto">
        <div className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl overflow-hidden p-5 md:p-9">
          <h2 className="text-2xl lg:text-[30px] mb-10 font-bold">
            Your Carts
          </h2>
          <div className="space-y-8 lg:space-y-12 max-h-[450px] overflow-auto mb-10 lg:mb-14">
            {cart.length === 0 ? (
              <p className="text-3xl text-center">The Cart is Empty !!</p>
            ) : (
              cart.map((movie) => (
                <Fragment key={movie.id}>
                  <div className="grid grid-cols-[1fr_auto] gap-4">
                    <div className="flex items-center gap-4">
                      <img
                        className="w-12 overflow-hidden rounded h-14"
                        src={getImageUrl(movie.cover)}
                        alt=""
                      />
                      <div>
                        <h3 className="text-base font-bold md:text-xl">
                          {movie.title}
                        </h3>
                        <p className="max-md:text-xs text-[#575A6E]">
                          {movie.genre}
                        </p>
                        <span className="max-md:text-xs">$100</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <button
                        onClick={(e) => handleDeleteCart(e, movie)}
                        className="bg-[#D42967] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white"
                      >
                        <img className="w-5 h-5" src={deleteIcon} alt="" />
                        <span className="max-md:hidden">Remove</span>
                      </button>
                    </div>
                  </div>
                </Fragment>
              ))
            )}
          </div>
          <div className="flex items-center justify-end gap-2">
            <a
              className="rounded-md p-2 md:px-4 inline-flex items-center space-x-2 bg-primary text-[#171923] text-sm"
              href="#"
            >
              <img src={checkout} width="24" height="24" alt="" />
              <span>Checkout</span>
            </a>
            <a
              onClick={() => setShowCart(false)}
              className="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#6F6F6F] dark:text-gray-500 font-semibold text-sm"
              href="#"
            >
              Cancel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetailsModal;
