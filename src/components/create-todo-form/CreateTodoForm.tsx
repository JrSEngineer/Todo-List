import { Check } from "lucide-react";
import TodoButton from "../../shared/components/todo-button/TodoButton";
import { useForm } from 'react-hook-form';
import "./CreateTodoForm.css";
import "../../shared/components/todo-input/TodoInput.css";

type CreateTodo = {
    title: string;
    description: string;
}

export default function CreateTodoForm() {
    const { register, handleSubmit } = useForm<CreateTodo>()

    function createNewTodo(data: CreateTodo) {
        console.log(data);
    }

    return (
        <div className="create-todo-form">
            <form onSubmit={handleSubmit(createNewTodo)}>
                <label htmlFor="title">Título</label>
                <input className="todo-input" {...register("title")} />
                <label htmlFor="description">Descrição</label>
                <input className="todo-input" {...register("description")} />
                <TodoButton iconSize={"16px"} icon={Check} buttonType="submit" />
            </form>
        </div>
    );
}