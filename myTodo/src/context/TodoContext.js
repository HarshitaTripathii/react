import { useContext, createContext } from "react";

export const TodoContext= createContext(
    {
        todos: [
            {id:1,
            todo:"homework",
            completed:false
            }
        ],
        addTodo: (id, todo)=>{},
        deleteTodo: (id)=>{},
        updateTodo: (id, todo)=>{},
        toggleComplete:(id)=>{}
    }
)

export const TodoProvider = TodoContext.Provider
//custom hook
export default function useTodo(){
    return useContext(TodoContext)
}
