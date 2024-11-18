import "./App.css";
import HomePage from "./routing/HomePage";
import NavBar from "./routing/NavBar";
import LoginStatus from "./state-management/auth/LoginStatus";
import Counter from "./state-management/counter/Counter";
import { TaskList, TasksProvider } from "./state-management/tasks";

function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <TodoForm />
      <TodoList />; */}
      {/* <LoginStatus /> */}
      <TasksProvider>
        <Counter />
        <TaskList />
        <NavBar />
        <HomePage />
      </TasksProvider>
    </>
  );

  //return <PostList />;
}

export default App;
