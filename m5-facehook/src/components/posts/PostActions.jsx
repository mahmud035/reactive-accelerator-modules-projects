import { useState } from 'react';
import commentIcon from '../../assets/icons/comment.svg';
import likeIcon from '../../assets/icons/like.svg';
import likeFilledIcon from '../../assets/icons/likeFilled.svg';
import shareIcon from '../../assets/icons/share.svg';
import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';

const PostActions = ({ post, commentCount }) => {
  const { auth } = useAuth();
  const { api } = useAxios();
  const [liked, setLiked] = useState(post?.likes?.includes(auth?.user?.id));

  //* Handle Post Like
  const handleLike = async () => {
    try {
      const response = await api.patch(
        `${import.meta.env.VITE_SERVER_BASE_URL}/posts/${post?.id}/like`
      );

      if (response.status === 200) {
        setLiked(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between py-6 lg:px-10 lg:py-8">
      {/* Like Button  */}
      <button
        onClick={handleLike}
        className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm"
      >
        <img
          src={liked ? likeFilledIcon : likeIcon}
          className="w-6"
          alt="Like"
        />
        {<span> {liked ? 'Liked' : 'Like'}</span>}
      </button>

      {/* Comment Button  */}
      <button className="px-6 py-3 space-x-2 text-xs icon-btn lg:px-12 lg:text-sm">
        <img src={commentIcon} alt="Comment" />
        <span>Comment({commentCount ?? 0})</span>
      </button>
      {/* Share Button  */}

      {/* Like Button  */}
      <button className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm">
        <img src={shareIcon} alt="Share" />
        <span>Share</span>
      </button>
    </div>
  );
};

export default PostActions;
