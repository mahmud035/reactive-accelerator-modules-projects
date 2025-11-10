import heartIcon from '../../assets/heart.svg';

const Favorite = ({ handleShowModal }) => {
  return (
    <button
      onClick={handleShowModal}
      className="flex items-center w-full gap-2 p-2 text-left transition-all rounded-md cursor-pointer hover:bg-black/30"
    >
      <img src={heartIcon} alt="" />
      <span>Favorite Locations</span>
    </button>
  );
};

export default Favorite;
