import { Check } from "lucide-react";
import TodoButton from "../todo-button/TodoButton";
import { useForm } from 'react-hook-form';
import "./CreateTodoForm.css";
import { useState } from "react";

type CreateTodo = {
    title: string;
    description: string;
}

export default function CreateTodoForm() {
    const { register, handleSubmit } = useForm<CreateTodo>();
    let [loading, setLoading] = useState<boolean>(false);

    async function createNewTodo(data: CreateTodo) {
        setLoading(true);
        try {
            const response = await fetch("https://td-api.up.railway.app/api/todos", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "Application/json"
                }
            })

            if (response.status != 201) {
                alert("Não foi possível criar uma nova tarefa.");
                setLoading(false);
            }
            setLoading(false);
        } catch (error) {
            alert(error);
            setLoading(false);
        }
    }

    return (
        <div className="create-todo-form">
            {
                loading ? <div className="loading">
                    <p>Carregando...</p>
                </div> :
                    <form onSubmit={handleSubmit(createNewTodo)}>
                        <label htmlFor="title">Título</label>
                        <input className="todo-input" {...register("title")} />
                        <label htmlFor="description">Descrição</label>
                        <input className="todo-input" {...register("description")} />
                        <TodoButton iconSize={"16px"} icon={Check} buttonType="submit" />
                    </form>
            }
        </div>
    );
}