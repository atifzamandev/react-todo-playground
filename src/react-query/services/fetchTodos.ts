import axios from "axios";
import { Todo } from "../../types/todo";

export const fetchTodos = () => {
  async (): Promise<Todo[]> => {
    const response = axios.get<Todo[]>(
      "https://jsonplaceholder.typicode.com/todos"
    );
    return (await response).data;
  };
};
