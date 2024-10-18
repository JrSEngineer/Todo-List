import TodoButton from "../todo-button/TodoButton";
import { Todo } from "../todo-list/todo";
import { TodoStatus } from "../todo-status/TodoStatus";
import "./TodoCard.css";

type TodoCardProps = {
    todo?: Todo
}


export function TodoCard({ todo }: TodoCardProps) {
    return (
        <div className="todo-card">
            <li key={todo?.id}>
                <div >
                    <h3>{todo?.title}</h3>
                    <p>{todo?.description}</p>
                </div>
                <div className="task-status">
                    <TodoButton text="Iniciar" />
                    <TodoStatus todo={todo} />
                </div>
            </li>
        </div>
    );
}