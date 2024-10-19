import { LoaderCircle } from "lucide-react";
import "./TodoLoading.css";

export function TodoLoading() {
    return (
        <div className="loading-animation">
            <LoaderCircle />
        </div >
    )
}