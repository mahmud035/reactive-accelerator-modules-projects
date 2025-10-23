import { useState } from 'react';
import { actions } from '../../actions';
import threeDotsIcon from '../../assets/icons/3dots.svg';
import deleteIcon from '../../assets/icons/delete.svg';
import editIcon from '../../assets/icons/edit.svg';
import timeIcon from '../../assets/icons/time.svg';
import useAuth from '../../hooks/useAuth';
import useAvatar from '../../hooks/useAvatar';
import useAxios from '../../hooks/useAxios';
import usePost from '../../hooks/usePost';
import useProfile from '../../hooks/useProfile';
import { getDateDifferenceFromNow } from '../../utils/index';

const PostHeader = ({ post }) => {
  const [showAction, setShowAction] = useState(false);
  const { avatarURL } = useAvatar(post);
  const { auth } = useAuth();
  const { api } = useAxios();
  const { dispatch, setShowPostEntry, setEditPost } = usePost();
  const { dispatch: postDispatch } = useProfile();

  const { author: { name } = {}, createAt } = post || {};

  const shouldShowThreeDotIcon = post?.author?.id === auth?.user?.id;

  //* Delete Post
  const handleDeletePost = async () => {
    dispatch({ type: actions.post.DATA_FETCHING });

    try {
      const response = await api.delete(
        `${import.meta.env.VITE_SERVER_BASE_URL}/posts/${post?.id}`
      );
      console.log(response);

      if (response.status === 200) {
        dispatch({ type: actions.post.DATA_DELETED, data: post?.id });
        postDispatch({ type: actions.profile.DATA_DELETED, data: post?.id });
      }
    } catch (error) {
      dispatch({ type: actions.post.DATA_FETCH_ERROR, error: error.message });
    }
  };

  return (
    <header className="flex items-center justify-between gap-4">
      {/* author info  */}
      <div className="flex items-center gap-3">
        <img
          className="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]"
          src={avatarURL}
          alt="avatar"
        />
        <div>
          <h6 className="text-lg lg:text-xl">{name}</h6>
          <div className="flex items-center gap-1.5">
            <img src={timeIcon} alt="time" />
            <span className="text-sm text-gray-400 lg:text-base">
              {getDateDifferenceFromNow(createAt)}
            </span>
          </div>
        </div>
      </div>
      {/* author info ends  */}

      {/* action dot  */}
      <div className="relative">
        {shouldShowThreeDotIcon && (
          <button onClick={() => setShowAction((prevAction) => !prevAction)}>
            <img src={threeDotsIcon} alt="3dots of Action" />
          </button>
        )}

        {/* Action Menus Popup  */}
        {showAction && (
          <div className="action-modal-container">
            <button
              onClick={() => {
                setEditPost(post);
                setShowPostEntry(true);
              }}
              className="action-menu-item hover:text-lwsGreen"
            >
              <img src={editIcon} alt="Edit" />
              Edit
            </button>
            <button
              onClick={handleDeletePost}
              className="action-menu-item hover:text-red-500"
            >
              <img src={deleteIcon} alt="Delete" />
              Delete
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default PostHeader;
