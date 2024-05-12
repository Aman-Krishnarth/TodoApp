import { useState } from "react";
import { useTodo } from "../Contexts/TodoContext";

function TodoForm() {
    const [todo, setTodo] = useState("");
    const { addTodo } = useTodo();
    const [number, setNumber] = useState(1);

    function handleChange(e) {
        setTodo(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (todo) {
            addTodo({
                id: number,
                todo: todo,
                completed: false,
            });
            setNumber(number + 1);
            setTodo("")
        }
    }

    return (
        <form className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                onChange={handleChange}
                value={todo}
            />
            <button
                type="submit"
                className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
                onClick={handleSubmit}
            >
                Add
            </button>
        </form>
    );
}

export default TodoForm;
