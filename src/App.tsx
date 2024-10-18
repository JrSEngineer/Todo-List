import "./App.css"
import TodoHeader from "./components/todo-header/TodoHeader"
import { TodoList } from "./components/todo-list/TodoList"

export default function App() {
  return (
    <main className="app" >
      <div className="container">
        <TodoHeader />
        <TodoList />
      </div>
    </main>
  )
}
