import { Todo } from "../../types/todo";
import APIClient from "./apiClient";

export default new APIClient<Todo>("/todos");
