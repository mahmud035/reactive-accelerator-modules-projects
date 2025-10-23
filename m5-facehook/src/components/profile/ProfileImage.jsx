import { useRef } from 'react';
import { actions } from '../../actions';
import editIcon from '../../assets/icons/edit.svg';
import useAxios from '../../hooks/useAxios';
import useProfile from '../../hooks/useProfile';

const ProfileImage = () => {
  const { state, dispatch } = useProfile();
  const { api } = useAxios();
  const fileUploadRef = useRef();

  // Show dummy image if user's avatar is not found
  const userNameFirstChar = state?.user?.firstName?.slice(0, 1)?.toUpperCase();
  const userAvatar =
    state?.user?.avatar !== null
      ? `${import.meta.env.VITE_SERVER_BASE_URL}/${state?.user?.avatar}`
      : `https://dummyimage.com/200x200&text=${userNameFirstChar}`;

  const handleImageUpload = (event) => {
    event.preventDefault();
    fileUploadRef.current.addEventListener('change', updateImageDisplay);
    fileUploadRef.current.click();
  };

  // Image Upload
  const updateImageDisplay = async () => {
    try {
      const formData = new FormData();

      for (const file of fileUploadRef.current.files) {
        formData.append('avatar', file);
      }

      const response = await api.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${
          state?.user?.id
        }/avatar`,
        formData
      );

      if (response.status === 200) {
        // set user's avatar to state
        dispatch({ type: actions.profile.IMAGE_UPDATED, data: response.data });
      }
    } catch (error) {
      // set error message to state
      dispatch({
        type: actions.profile.DATA_FETCH_ERROR,
        error: error.message,
      });
    }
  };

  return (
    <div className="relative mb-8 max-h-[180px] max-w-[180px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
      <img
        className="max-w-full rounded-full"
        src={userAvatar}
        alt="Profile Image"
      />

      <form>
        <button
          onClick={handleImageUpload}
          type="submit"
          className="absolute rounded-full flex-center bottom-4 right-4 h-7 w-7 bg-black/50 hover:bg-black/80"
        >
          <img src={editIcon} alt="Edit" />
        </button>
        <input
          type="file"
          id="file"
          accept="image/*"
          ref={fileUploadRef}
          hidden
        />
      </form>
    </div>
  );
};

export default ProfileImage;
