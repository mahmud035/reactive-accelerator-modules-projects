import useGetUser from '../../hooks/useGetUser';
import usePost from '../../hooks/usePost';
import EditPost from './EditPost';
import PostEntry from './PostEntry';

const NewPost = () => {
  const { showPostEntry, setShowPostEntry, editPost } = usePost();
  const user = useGetUser();

  //* Decide what to render on UI
  let content;

  if (showPostEntry && !editPost) {
    content = <PostEntry />;
  } else if (showPostEntry && editPost) {
    content = <EditPost />;
  } else if (!showPostEntry && !editPost) {
    content = (
      <div className="card">
        <div className="gap-2 mb-3 flex-center lg:gap-4">
          <img
            className="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]"
            src={`${import.meta.env.VITE_SERVER_BASE_URL}/${user?.avatar}`}
            alt="avatar"
          />

          <div className="flex-1">
            <textarea
              onClick={() => setShowPostEntry(true)}
              className="w-full h-16 p-3 rounded-md bg-lighterDark focus:outline-none sm:h-20 sm:p-6"
              name="post"
              id="post"
              placeholder="What's on your mind?"
            ></textarea>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {content}

      {/* {showPostEntry ? (
        <PostEntry />
      ) : (
        <div className="card">
          <div className="gap-2 mb-3 flex-center lg:gap-4">
            <img
              className="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]"
              src={`${import.meta.env.VITE_SERVER_BASE_URL}/${user?.avatar}`}
              alt="avatar"
            />

            <div className="flex-1">
              <textarea
                onClick={() => setShowPostEntry(true)}
                className="w-full h-16 p-3 rounded-md bg-lighterDark focus:outline-none sm:h-20 sm:p-6"
                name="post"
                id="post"
                placeholder="What's on your mind?"
              ></textarea>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};

export default NewPost;
