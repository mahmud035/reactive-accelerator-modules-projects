const TaskActions = ({
  showAddTaskModal,
  setShowAddTaskModal,
  setTaskToUpdate,
  handleDeleteAllTask,
}) => {
  return (
    <div className="items-center justify-between mb-14 sm:flex">
      <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
      <div className="flex items-center space-x-5">
        {!showAddTaskModal && (
          <button
            onClick={() => {
              setTaskToUpdate(null);
              setShowAddTaskModal(true);
            }}
            className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
          >
            Add New Task
          </button>
        )}
        <button
          onClick={handleDeleteAllTask}
          className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
        >
          Delete All
        </button>
      </div>
    </div>
  );
};

export default TaskActions;
