import Task from './Task';

const TaskList = ({
  tasks,
  handleFavorite,
  handleDeleteTask,
  setShowAddTaskModal,
  handleEditTask,
}) => {
  return (
    <div className="overflow-auto">
      <table className="overflow-auto table-fixed xl:w-full">
        <thead>
          <tr>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
              Title
            </th>
            <th className="w-full p-4 pb-8 text-sm font-semibold capitalize">
              Description
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
              Tags
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
              Priority
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
              Options
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks?.map((task, index) => (
            <Task
              task={task}
              key={task.id}
              index={index}
              handleFavorite={handleFavorite}
              handleDeleteTask={handleDeleteTask}
              setShowAddTaskModal={setShowAddTaskModal}
              handleEditTask={handleEditTask}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
