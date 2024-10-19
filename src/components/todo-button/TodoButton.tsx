import { ElementType } from 'react';
import './TodoButton.css';
import { TodoLoading } from '../loading/TodoLoading';

export interface TodoButtonProps {
    icon?: ElementType;
    text?: string;
    buttonType?: "button" | "submit" | "reset" | undefined;
    iconSize?: string;
    loading?: boolean
    onClick?: () => void;
}

export default function TodoButton({ icon: Icon, text, buttonType, iconSize, loading, onClick }: TodoButtonProps) {
    return (
        <div className="todo-button" >
            <button onClick={onClick} type={buttonType}>
                {loading ? <TodoLoading /> : Icon != null ? <Icon size={iconSize} /> : text}
            </button>
        </div>
    );
}