import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const usePostList = (userId: number | undefined) => {
  const fetchPostList = async (userId: number | undefined): Promise<Post[]> => {
    const response = await axios.get<Post[]>(
      "https://jsonplaceholder.typicode.com/posts",
      {
        params: {
          userId,
        },
      }
    );
    return response.data;
  };

  const query = useQuery<Post[], Error>({
    queryKey: userId ? ["users", userId, "posts"] : ["posts"],
    queryFn: () => fetchPostList(userId),
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return query;
};

export default usePostList;
