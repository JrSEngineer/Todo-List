import { useEffect, useState } from "react";
import { LoaderCircle } from "lucide-react";
import { TodoCard } from "../todo-card/TodoCard";
import { Todo } from "./todo";
import "./TodoList.css"

export function TodoList() {
    const [todoList, setTodoList] = useState<Todo[]>([]);
    let [loading, setLoading] = useState<boolean>(false);

    const getAllTodosFromApi = async () => {
        try {
            setLoading(true);
            const response = await fetch("https://td-api.up.railway.app/api/todos", {
                method: "GET",
                headers: { "Content-Type": "Application/json" }
            });
            if (!response.ok) {
                alert("Falha ao obter lista de tarefas!");
                setLoading(false);
            }
            const data: Todo[] = await response.json();
            setTodoList(data);
            setLoading(false);
        } catch (error) {
            alert(error)
            setLoading(false);
        }
    }
    useEffect(() => {
        getAllTodosFromApi()
    }, []);

    return (
        <div className="todo-list">
            {loading ?
                <div className="loading-animation">
                    <LoaderCircle />
                </div > :
                <ul>
                    {
                        todoList.map((todo) => {
                            return (<TodoCard todo={todo} />);
                        })
                    }
                </ul>}
        </div>
    );
}