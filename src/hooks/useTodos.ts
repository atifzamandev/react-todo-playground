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

  const query = useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  return query;
};

export default useTodos;
