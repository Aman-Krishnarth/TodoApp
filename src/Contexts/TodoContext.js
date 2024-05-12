import React, { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [{
        id: 0,
        todo: "",
        completed: false
    }],
    addTodo: (todo) =>{},
    updateTodo: (id , todo)=>{},
    deleteTodo: (id)=>{},
    todoCompleted: (id)=>{}
})

export const useTodo = ()=>{

    return useContext(TodoContext)

}

export const TodoProvider = TodoContext.Provider