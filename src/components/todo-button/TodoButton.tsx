import { ElementType } from 'react';
import './TodoButton.css';

export interface TodoButtonProps {
    icon?: ElementType;
    text?: string;
    buttonType?: "button" | "submit" | "reset" | undefined;
    iconSize?: string;
    onClick?: () => void;
}

export default function TodoButton({ icon: Icon, text, buttonType, iconSize, onClick }: TodoButtonProps) {
    return (
        <div className="todo-button">
            <button onClick={onClick} type={buttonType}>
                {Icon != null ? <Icon size={iconSize} /> : text}
            </button>
        </div>
    );
}