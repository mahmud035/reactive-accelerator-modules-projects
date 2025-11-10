import { useState } from 'react';
import { actions } from '../../actions';
import checkIcon from '../../assets/icons/check.svg';
import editIcon from '../../assets/icons/edit.svg';
import useAxios from '../../hooks/useAxios';
import useProfile from '../../hooks/useProfile';

const Bio = () => {
  const { state, dispatch } = useProfile();
  const { api } = useAxios();
  const [bio, setBio] = useState(state?.user?.bio);
  const [editMode, setEditMode] = useState(false);

  // Update Bio
  const handleBioEdit = async () => {
    // set loading to true
    dispatch({ type: actions.profile.DATA_FETCHING });

    try {
      const response = await api.patch(
        `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${state?.user?.id}`,
        { bio }
      );

      if (response.status === 200) {
        // set user data to state
        dispatch({
          type: actions.profile.USER_DATA_EDITED,
          data: response.data,
        });
      }
      setEditMode(false);
    } catch (error) {
      // set error message to state
      dispatch({
        type: actions.profile.DATA_FETCH_ERROR,
        error: error.message,
      });
    }
  };

  return (
    <div className="flex items-start gap-2 mt-4 lg:mt-6">
      <div className="flex-1">
        {!editMode ? (
          <p className="leading-[188%] text-gray-400 lg:text-lg">
            {state?.user?.bio?.length > 0
              ? `${state?.user?.bio}`
              : 'No Bio Found'}
          </p>
        ) : (
          <textarea
            onChange={(e) => setBio(e.target.value)}
            value={bio}
            className="p-2 leading-[188%] text-gray-400 lg:text-lg"
            cols="55"
            rows="4"
          />
        )}
      </div>

      {/* Edit Bio button. The Above bio will be editable when clicking on the button  */}
      {!editMode ? (
        <button
          onClick={() => setEditMode(true)}
          className="rounded-full flex-center h-7 w-7"
        >
          <img src={editIcon} alt="Edit" />
        </button>
      ) : (
        <button
          onClick={handleBioEdit}
          className="rounded-full flex-center h-7 w-7"
        >
          <img src={checkIcon} alt="Check" />
        </button>
      )}
    </div>
  );
};

export default Bio;
