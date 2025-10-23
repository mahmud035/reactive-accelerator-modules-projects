import { getImageUrl } from '../../utils/movie-utility';

const MovieDetailsModal = ({ movie, handleAddToCart, handleModalClose }) => {
  const { cover, title, genre, description, price } = movie;

  return (
    <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-black/60 backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-4 max-h-[90vh] overflow-auto">
        <div className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl sm:grid sm:grid-cols-[2fr_1fr] overflow-hidden">
          <img
            className="sm:order-2 w-full object-cover h-full max-sm:max-h-[300px]"
            src={getImageUrl(cover)}
            alt=""
          />

          <div className="p-5 lg:p-11">
            <div className="">
              <h2 className="text-3xl lg:text-[50px] mb-2 font-bold">
                {title}
              </h2>
              <span className="block text-base text-[#9fa0a4] dark:text-[#575A6E] my-3">
                {genre}
              </span>
              <div></div>
            </div>
            <p className="mb-8 text-sm lg:text-base lg:mb-16">{description}</p>
            <div className="grid gap-2 lg:grid-cols-2">
              <a
                onClick={(e) => handleAddToCart(e, movie)}
                className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                href="#"
              >
                <span>${price} | Add to Cart</span>
              </a>
              <a
                onClick={handleModalClose}
                className="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#4b4949] dark:text-gray-200 font-semibold text-sm"
                href="#"
              >
                Cancel
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsModal;
