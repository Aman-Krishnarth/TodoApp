import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TodoProvider } from "./Contexts/TodoContext";
import TodoForm from "./Components/TodoForm";
import TodoItem from "./Components/TodoItem";

function App() {
    const [todos, setTodo] = useState([]);

    const addTodo = (todo) => {
        setTodo([...todos, todo]);
    };

    const updateTodo = (id, todo) => {
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id === id) {
                todos[i].todo = todo;
            }
        }

        setTodo(todos);
    };

    const deleteTodo = (id) => {

        console.log("delete todo call kar diya bro")
        console.log(`id = ${typeof id}`)
        console.log(`id = ${typeof id}`)

        let tempTodo = [];

        for(let i = 0 ; i<todos.length; i++){
            if (todos[i].id !== id) {
                tempTodo.push(todos[i]);
            }
        }

        console.log(tempTodo)
        setTodo(tempTodo);
    };

    const todoCompleted = (id) => {

        setTodo((prev) => 
        prev.map((prevTodo) => 
          prevTodo.id === id ? { ...prevTodo, 
            completed: !prevTodo.completed } : prevTodo))
    };

    //get from localStorage
    useEffect(() => {
        const todo = JSON.parse(localStorage.getItem("todos"));
        if (todo && todo.length > 0) {
            setTodo(todo)
          }
    }, []);

    //set in localStorage
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <TodoProvider
            value={{ todos, todoCompleted, addTodo, deleteTodo, updateTodo }}
        >
            <div className="bg-[#172842] min-h-screen py-8 w-full h-dvh">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">
                        Manage Your Todos
                    </h1>
                    <div className="mb-4">
                        <TodoForm/>    
                    </div>
                    <div className="flex flex-wrap gap-y-3">

                        {todos.map((todo)=>{

                            return <div key={todo.id} className="w-full">

                                <TodoItem todo={todo}/>

                            </div>

                        })}

                    </div>
                </div>
            </div>
        </TodoProvider>
    );
}

export default App;
