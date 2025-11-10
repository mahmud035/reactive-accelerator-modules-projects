import { useState } from 'react';
import { SlClose } from 'react-icons/sl';

const AddTaskModal = ({
  setShowAddTaskModal,
  handleAddEditTask,
  taskToUpdate,
}) => {
  const [task, setTask] = useState(
    taskToUpdate || {
      id: crypto.randomUUID(),
      title: '',
      description: '',
      tags: [],
      priority: '',
      isFavorite: false,
    }
  );

  const [isAdd, setIsAdd] = useState(Object.is(taskToUpdate, null));

  // IMPORTANT: Using a single event handler for multiple fields
  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    if (name === 'tags') {
      value = value.split(','); // convert string into an array
    }

    setTask({ ...task, [name]: value });
  };

  return (
    <>
      <div className="absolute inset-0 z-10 w-full h-full bg-black bg-opacity-70"></div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11 z-10 absolute top-1/4 left-1/3"
      >
        <div className="flex">
          <h2 className="mb-9 w-full text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
            {isAdd ? 'Add New Task' : 'Edit Task'}
          </h2>
          <SlClose
            onClick={() => setShowAddTaskModal(false)}
            size={30}
            className="ml-auto font-bold text-red-500 cursor-pointer"
          />
        </div>

        <div className="text-white space-y-9 lg:space-y-10">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              value={task.title}
              onChange={handleChange}
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              id="title"
              required
            />
          </div>

          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description</label>
            <textarea
              value={task.description}
              onChange={handleChange}
              className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
              type="text"
              name="description"
              id="description"
              required
            ></textarea>
          </div>

          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="tags">Tags</label>
              <input
                value={task.tags}
                onChange={handleChange}
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="tags"
                id="tags"
                required
              />
            </div>

            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select
                value={task.priority}
                onChange={handleChange}
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                name="priority"
                id="priority"
                required
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16 lg:mt-20">
          <button
            onClick={() => handleAddEditTask(task, isAdd)}
            type="submit"
            className="px-4 py-2 text-white transition-all bg-blue-600 rounded hover:opacity-80"
          >
            {isAdd ? 'Create New Task' : 'Save Edited Task'}
          </button>
        </div>
      </form>
    </>
  );
};

export default AddTaskModal;
