import "./App.css"
import TodoHeader from "./components/todo-header/TodoHeader"
import TodoButton from "./shared/components/todo-button/TodoButton"

export default function App() {
  return (
    <main className="app" >
      <div className="todo-list">
        <TodoHeader />
        <div className="list-content">
          <div className="list">
            <ul>
              <li>
                <div className="task-content">
                  <h3>Tarefa n</h3>
                  <p>
                    Descrição da tarefa, informando detalhes, especificando processos e demais informações referentes à tarefa a ser executada.
                  </p>
                </div>
                <div className="task-status">
                  <TodoButton text="Iniciar" />
                  <div className="status">
                    <p>Status</p>
                    <div className="status-indicator"></div>
                  </div>
                </div>
              </li>
              <li>
                <div className="task-content">
                  <h3>Tarefa n</h3>
                  <p>
                    Descrição da tarefa, informando detalhes, especificando processos e demais informações referentes à tarefa a ser executada.
                  </p>
                </div>
                <div className="task-status">
                  <TodoButton text="Iniciar" />
                  <div className="status">
                    <p>Status</p>
                    <div className="status-indicator"></div>
                  </div>
                </div>
              </li>
              <li>
                <div className="task-content">
                  <h3>Tarefa n</h3>
                  <p>
                    Descrição da tarefa, informando detalhes, especificando processos e demais informações referentes à tarefa a ser executada.
                  </p>
                </div>
                <div className="task-status">
                  <TodoButton text="Iniciar" />
                  <div className="status">
                    <p>Status</p>
                    <div className="status-indicator"></div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
