import { Todo } from "../../models/todo";
import "./TodoStatus.css";

type TodoStatusProps = {
    todo?: Todo
}

export function TodoStatus({ todo }: TodoStatusProps) {
    return (
        <div className="status">
            <p>Status</p>
            {
                todo?.inProgress ?
                    <div className="in-progress"></div> :
                    todo?.completed ? <div className="completed"></div> :
                        <div className="waiting"></div>
            }
        </div>
    );
}