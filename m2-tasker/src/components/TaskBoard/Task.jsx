import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';

const Task = ({
  task,
  index,
  handleFavorite,
  handleDeleteTask,
  handleEditTask,
}) => {
  const { title, description, tags, priority, isFavorite } = task;

  return (
    <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
      <td>
        <button onClick={() => handleFavorite(title, index)}>
          {isFavorite ? (
            <MdFavorite size={18} className="text-yellow-400" />
          ) : (
            <MdFavoriteBorder size={18} className="text-gray-400" />
          )}
        </button>
      </td>
      <td>{title}</td>
      <td>
        <div>{description}</div>
      </td>
      <td>
        <ul className="flex justify-center gap-1.5 flex-wrap">
          {tags?.map((tag) => (
            <li key={tag}>
              <span className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00D991A1] px-2.5 text-sm capitalize text-[#F4F5F6]">
                {tag}
              </span>
            </li>
          ))}
        </ul>
      </td>
      <td className="text-center">{priority}</td>
      <td>
        <div className="flex items-center justify-center space-x-3">
          <button
            onClick={() => handleDeleteTask(title)}
            className="text-red-500"
          >
            Delete
          </button>
          <button
            onClick={() => handleEditTask(task)}
            className="text-blue-500"
          >
            Edit
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Task;
