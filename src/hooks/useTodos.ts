import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodos = () => {
  const fetchTodos = async (): Promise<Todo[]> => {
    const response = axios.get<Todo[]>(
      "https://jsonplaceholder.typicode.com/todos"
    );
    return (await response).data;
  };

  const query =   useQuery({
    queryKey:['todos'],
    queryFn: fetchTodos 
  })

  return query
};

export default useTodos;
