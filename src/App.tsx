import "./App.css"

function App() {
  return (
    <main className="app" >
      <div className="todo-list">
        <div className="list-content">
          <div className="list-header">
            <h2>Minha Lista</h2>
            <p> Veja o que há para fazer. Sua lista contém todas as suas tarefas, e o progresso de todas elas.</p>
            <div className="input-section">
              <input />
              <div className="input-actions">
                <button>X</button>
                <button>X</button>
              </div>
            </div>
          </div>
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
                  <button>Iniciar</button>
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
                  <button>Iniciar</button>
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
                  <button>Iniciar</button>
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

export default App
