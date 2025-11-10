import { useState } from 'react';
import AddTaskModal from './AddTaskModal';
import NoTaskFound from './NoTaskFound';
import SearchTask from './SearchTask';
import TaskActions from './TaskActions';
import TaskList from './TaskList';

const TaskBoard = () => {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: 'Learn React & NEXT.js',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    tags: ['web', 'react', 'js'],
    priority: 'High',
    isFavorite: true,
  };

  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddTaskModal, setShowAddTaskModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  //* Add & Edit Task
  const handleAddEditTask = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      // handle update task logic
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }
    setShowAddTaskModal(false);
  };

  //* Edit Task
  const handleEditTask = (task) => {
    setTaskToUpdate(task);
    setShowAddTaskModal(true);
  };

  //* Search Task
  const handleSearchTask = (searchText) => {
    const searchedTasks = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchText.toLowerCase())
    );

    setTasks([...searchedTasks]);
  };

  //* Delete Task
  const handleDeleteTask = (title) => {
    const remainingTasks = tasks.filter((task) => task.title !== title);
    setTasks([...remainingTasks]);
  };

  //* Toggle Favorite Task
  const handleFavorite = (title, index) => {
    const clickedTask = tasks.find((task) => task.title === title);

    if (clickedTask.isFavorite === false) {
      clickedTask.isFavorite = true;
    } else {
      clickedTask.isFavorite = false;
    }

    // IMPORTANT: How to insert an item at a particular position that’s neither at the beginning nor at the end.
    // Documentation Link ==> https://react.dev/learn/updating-arrays-in-state#inserting-into-an-array:~:text=Show%20more-,Inserting%20into%20an%20array,-Sometimes%2C%20you%20may

    setTasks([
      ...tasks.slice(0, index),
      clickedTask,
      ...tasks.slice(index + 1),
    ]);
  };

  //* Delete All Task
  const handleDeleteAllTask = () => {
    setTasks([]);
  };

  // console.log(tasks);

  return (
    <section className="mb-20" id="tasks">
      <div className="container mx-auto">
        {/* SearchTask */}
        <SearchTask handleSearchTask={handleSearchTask} />

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          {/* TaskActions */}
          <TaskActions
            showAddTaskModal={showAddTaskModal}
            setShowAddTaskModal={setShowAddTaskModal}
            setTaskToUpdate={setTaskToUpdate}
            handleDeleteAllTask={handleDeleteAllTask}
          />

          {/* Toggle Modal */}
          {showAddTaskModal && (
            <AddTaskModal
              setShowAddTaskModal={setShowAddTaskModal}
              handleAddEditTask={handleAddEditTask}
              taskToUpdate={taskToUpdate}
            />
          )}

          {/* TaskList */}
          {tasks.length > 0 ? (
            <>
              <TaskList
                tasks={tasks}
                handleFavorite={handleFavorite}
                handleDeleteTask={handleDeleteTask}
                setShowAddTaskModal={setShowAddTaskModal}
                handleEditTask={handleEditTask}
              />
            </>
          ) : (
            <>
              <NoTaskFound />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
