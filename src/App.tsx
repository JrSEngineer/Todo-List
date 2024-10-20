import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { TodoLoading } from "./components/loading/TodoLoading";
import TodoButton from "./components/todo-button/TodoButton";
import { TodoCard } from "./components/todo-card/TodoCard";
import { Todo } from "./models/todo";
import "./App.css";

type CreateTodo = {
  title: string;
  description: string;
}

type TodoPorcentage = {
  waiting: number;
  inProgress: number;
  completed: number;
}


export default function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [todoPorcentage, setTodoPorcentage] = useState<TodoPorcentage>();
  const { register, reset, handleSubmit } = useForm<CreateTodo>();
  var [loading, setLoading] = useState<boolean>(false);
  var [todoListModified, setTodoListModifiedState] = useState<boolean>(false);

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

      const responseJson = await response.json();
      const data: Todo[] = responseJson["toDos"];
      const porcentage: TodoPorcentage = responseJson["porcentage"];

      data.reverse();

      setTodoList(data);
      setTodoPorcentage(porcentage);

      setLoading(false);
    } catch (error) {
      alert(error);
      setLoading(false);
    }
  }


  async function createNewTodo(data: CreateTodo) {
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
      }

      reset();

      await setTimeout(() => { }, 2000);
      setTodoListModifiedState(true);

    } catch (error) {
      alert(error);
    }
  }

  const initTodo = async (todo: Todo) => {
    try {
      const response = await fetch(`https://td-api.up.railway.app/api/todos/${todo.id}`, {
        method: 'PATCH'
      });

      if (!response.ok) {
        alert("Algo deu errado!");
      }

      await setTimeout(() => { }, 2000);
      setTodoListModifiedState(true);

    } catch (error) {
      alert(error);
    }
  }

  const finishTodo = async (todo: Todo) => {
    try {
      const data = {
        id: todo.id,
        title: todo.title,
        description: todo.description,
        inProgress: false,
        completed: true,
      };

      console.log(data);

      const response = await fetch(`https://td-api.up.railway.app/api/todos/${todo.id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          "Content-type": "Application/json"
        }
      });

      if (!response.ok) {
        alert("Algo deu errado!");
      }

      await setTimeout(() => { }, 2000);
      setTodoListModifiedState(true);

    } catch (error) {
      alert(error);
    }
  }

  const deleteTodo = async (todo: Todo) => {
    try {
      const response = await fetch(`https://td-api.up.railway.app/api/todos/${todo.id}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        alert("Algo deu errado!");
      }

      await setTimeout(() => { }, 2000);
      setTodoListModifiedState(true);

    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    getAllTodosFromApi();
    return () => {
      setTodoListModifiedState(false);
    }
  }, [
    todoListModified
  ]);

  return (
    <main className="app" >
      <div className="app-container">
        <div className="container">
          <div className="list-header">
            <h2>Minha Lista</h2>
            <h3> Veja o que há para fazer. Sua lista contém todas as suas tarefas, e o progresso de todas elas.</h3>
            <p>Voce também pode adicionar novas tarefas.</p>
            <h4>Adicionar Tarefa</h4>
            <div className="create-todo-form">
              <form onSubmit={handleSubmit(createNewTodo)}>
                <div>
                  <label htmlFor="title">Título</label>
                  <input className="todo-input" {...register("title")} />
                </div>
                <div>
                  <label htmlFor="description">Descrição</label>
                  <input className="todo-input" {...register("description")} />
                </div>
                <TodoButton text="Salvar" buttonType="submit" />
              </form>
            </div>
          </div>
          <div className="todo-list">
            {loading ?
              <TodoLoading /> :
              <ul>
                {todoList.length > 0 ? todoList.map((todo) => {
                  return (<TodoCard
                    todo={todo}
                    initTodo={async () => initTodo(todo)}
                    finishTodo={async () => finishTodo(todo)}
                    deleteTodo={async () => deleteTodo(todo)}
                  />)
                }) :
                  <div className="empty-list">
                    <h4>Você ainda não possui nenhuma tarefa registrada.</h4>
                    <p>Crie suas primeiras tarefas e se organize</p>
                  </div>}
              </ul>
            }
          </div>
        </div>
      </div>
      <div className="progress-bar-section">
        <div className="progress">
          <p>Não Iniciadas {todoPorcentage?.waiting} %</p>
          <div className="waiting-progress-bar">
            <div className="waiting-value" style={{ width: `${todoPorcentage?.waiting}%` }}></div>
          </div>
          <p>Em Andamento {todoPorcentage?.inProgress} %</p>
          <div className="inProgress-progress-bar">
            <div className="inProgress-value" style={{ width: `${todoPorcentage?.inProgress}%` }}></div>
          </div>
          <p>Concluídas {todoPorcentage?.completed} %</p>
          <div className="completed-progress-bar">
            <div className="completed-value" style={{ width: `${todoPorcentage?.completed}%` }}></div>
          </div>
        </div>
      </div>
    </main>
  )
}
