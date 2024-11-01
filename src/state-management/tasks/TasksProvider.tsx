import { ReactNode, useMemo, useReducer } from "react";
import TaskContext from "./tasksContext";

export interface Task {
  id: number;
  title: string;
}
interface AddTask {
  type: "ADD";
  task: Task;
}

interface DeleteTask {
  type: "DELETE";
  taskId: number;
}

export type TaskAction = AddTask | DeleteTask;

const tasksReducer = (tasks: Task[], taskAction: TaskAction): Task[] => {
  switch (taskAction.type) {
    case "ADD":
      return [taskAction.task, ...tasks];
    case "DELETE":
      const taskFiltering = useMemo(
        () => tasks.filter((t) => t.id !== taskAction.taskId),
        [tasks]
      );

      return taskFiltering;
    default:
      return [...tasks];
  }
};

interface Props {
  children: ReactNode;
}
const TasksProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TasksProvider;
