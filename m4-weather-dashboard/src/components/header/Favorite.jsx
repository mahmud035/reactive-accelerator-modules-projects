import heartIcon from '../../assets/heart.svg';

const Favorite = ({ handleShowModal }) => {
  return (
    <div
      onClick={handleShowModal}
      className="flex items-center gap-2 p-2 transition-all rounded-md cursor-pointer hover:bg-black/30"
    >
      <img src={heartIcon} alt="" />
      <span>Favorite Locations</span>
    </div>
  );
};

export default Favorite;
