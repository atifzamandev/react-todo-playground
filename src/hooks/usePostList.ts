import {
  useInfiniteQuery
} from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostQuery {
  pageSize: number;
}

const usePostList = (query: PostQuery) => {
  const fetchPostList = async (pageParam: number): Promise<Post[]> => {
    const response = await axios.get<Post[]>(
      "https://jsonplaceholder.typicode.com/posts",
      {
        params: {
          _start: (pageParam - 1) * query.pageSize,
          _limit: query.pageSize,
        },
      }
    );
    return response.data;
  };

  const postQuery = useInfiniteQuery<Post[], Error>({
    queryKey: ["posts", query],
    queryFn: ({ pageParam = 1 }) => fetchPostList(pageParam as number),
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });

  return postQuery;
};

export default usePostList;
