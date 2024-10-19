import TodoButton from "../todo-button/TodoButton";
import { TodoStatus } from "../todo-status/TodoStatus";
import { LucideTrash } from "lucide-react";
import { Todo } from "../../models/todo";
import "./TodoCard.css";

type TodoCardProps = {
    todo: Todo;
    initTodo: () => void;
    finishTodo: () => void;
    deleteTodo: () => void;
}

export function TodoCard({ todo, initTodo, finishTodo, deleteTodo }: TodoCardProps) {
    return (
        <div className="todo-card">
            {
                <li key={todo.id}>
                    <div className="card-header">
                        <div >
                            <h3>{todo?.title}</h3>
                            <p>{todo?.description}</p>
                        </div>
                        <TodoButton iconSize="12" icon={LucideTrash} onClick={deleteTodo} />
                    </div>
                    <div className="task-status">
                        {
                            todo.completed ?
                                <div></div> :
                                todo.inProgress ?
                                    <TodoButton text={"Finalizar"} onClick={finishTodo} /> :
                                    <TodoButton text={"Iniciar"} onClick={initTodo} />
                        }
                        <TodoStatus todo={todo} />
                    </div>
                </li>
            }
        </div>
    );
}