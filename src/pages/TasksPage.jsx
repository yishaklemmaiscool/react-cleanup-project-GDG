import React from "react";
import useTasks from "../hooks/useTasks";
import Loading from "../components/loading";
import TaskList from "../components/TaskList";

function TasksPage() {
  const { tasks, loading, error } = useTasks();

  if (loading) {
    return (
      <div className="text-center p-8">
        <Loading message="Loading your tasks..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 m-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded">
        <p className="font-bold">Error</p>
        <p>{error}</p>
      </div>
    );
  }

  return <TaskList tasks={tasks} title="My Task List" />;
}

export default TasksPage;
