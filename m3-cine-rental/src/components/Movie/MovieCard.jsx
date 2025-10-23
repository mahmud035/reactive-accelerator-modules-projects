import { useState } from 'react';
import { toast } from 'react-toastify';
import { useCart, useCartDispatch } from '../../contexts/CartContext';
import { getImageUrl } from '../../utils/movie-utility';
import MovieDetailsModal from './MovieDetailsModal';
import Rating from './Rating';

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const cart = useCart();
  const dispatch = useCartDispatch();
  const { cover, title, genre, rating, price } = movie;

  //* event handlers
  const handleModalShow = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleAddToCart = (e, movie) => {
    e.stopPropagation(); //* stop event bubbling

    const isExists = cart.find((cartMovie) => cartMovie.id === movie.id);

    if (isExists) {
      return toast.error(
        `The movie ${movie.title} has been added to the Cart already !!`
      );
    }

    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        ...movie,
      },
    });

    toast.success(`Added ${movie.title} to Cart !`);
  };

  return (
    <>
      {/* Modal */}
      {showModal && (
        <MovieDetailsModal
          movie={movie}
          handleAddToCart={handleAddToCart}
          handleModalClose={handleModalClose}
        />
      )}

      <figure
        onClick={handleModalShow}
        className="p-4 border shadow-sm cursor-pointer border-black/10 dark:border-white/10 rounded-xl"
      >
        <img
          className="object-cover object-center w-full "
          src={getImageUrl(cover)}
          alt="movie-cover"
        />
        <figcaption className="pt-4">
          <h3 className="mb-1 text-xl">{title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">{genre}</p>
          <div className="flex items-center mb-5 space-x-1">
            <Rating value={rating} />
          </div>
          <a
            onClick={(e) => handleAddToCart(e, movie)}
            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            href="#"
          >
            <span>${price} | Add to Cart</span>
          </a>
        </figcaption>
      </figure>
    </>
  );
};

export default MovieCard;
