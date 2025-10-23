import { useState } from 'react';
import { actions } from '../../actions';
import addPhotoIcon from '../../assets/icons/addPhoto.svg';
import useAxios from '../../hooks/useAxios';
import useGetUser from '../../hooks/useGetUser';
import usePost from '../../hooks/usePost';

const PostEntry = () => {
  const user = useGetUser();
  const { dispatch, setShowPostEntry } = usePost();
  const { api } = useAxios();
  const [content, setContent] = useState('');

  //* Create New Post
  const handlePostSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('content', content);
    formData.append('image', e.target.image.files[0]);

    dispatch({ type: actions.post.DATA_FETCHING });

    try {
      const response = await api.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/posts`,
        formData
      );
      console.log('response =>', response);

      if (response.status === 200) {
        dispatch({ type: actions.post.DATA_CREATED, data: response.data });
        setShowPostEntry(false);
      }
    } catch (error) {
      dispatch({
        type: actions.post.DATA_FETCH_ERROR,
        error: error.message,
      });
    }
  };

  return (
    <div className="relative card">
      <h6 className="mb-3 text-lg font-bold text-center lg:text-xl">
        Create Post
      </h6>

      {/* form */}
      <form onSubmit={(e) => handlePostSubmit(e)}>
        <div className="flex items-center justify-between gap-2 mb-3 lg:mb-6 lg:gap-4">
          <div className="flex items-center gap-3">
            <img
              className="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]"
              src={`${import.meta.env.VITE_SERVER_BASE_URL}/${user?.avatar}`}
              alt="avatar"
            />
            <div>
              <h6 className="text-lg lg:text-xl">
                {user?.firstName} {user?.lastName}
              </h6>

              <span className="text-sm text-gray-400 lg:text-base">Public</span>
            </div>
          </div>

          <label
            className="btn-primary cursor-pointer !text-gray-100"
            htmlFor="photo"
          >
            <img src={addPhotoIcon} alt="Add Photo" />
            Add Photo
            <input
              // {...register('image')}
              type="file"
              name="image"
              id="photo"
              className="hidden"
              accept="image/*"
            />
          </label>
        </div>

        {/* Post Text Input  */}
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          name="content"
          id="textarea"
          placeholder="Share your thoughts..."
          className="h-[120px] w-full bg-transparent focus:outline-none lg:h-[160px]"
        />

        <div className="border-t border-[#3F3F3F] pt-4 lg:pt-6">
          <button
            type="submit"
            className="font-bold transition-all auth-input bg-lwsGreen text-deepDark hover:opacity-90"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostEntry;
