import "./TodoHeader.css";
import CreateTodoForm from "../create-todo-form/CreateTodoForm";

export default function TodoHeader() {
    return (<>
        <div className="list-header">
            <h2>Minha Lista</h2>
            <h3> Veja o que há para fazer. Sua lista contém todas as suas tarefas, e o progresso de todas elas.</h3>
            <p>Voce também pode adicionar novas tarefas.</p>
            <h4>Adicionar Tarefa</h4>
                <CreateTodoForm />
        </div>
    </>);
}