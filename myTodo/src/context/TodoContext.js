import { useContext, createContext } from "react";

export const TodoContext= createContext(
    {}
)

export const TodoProvider = TodoContext.Provider

export default function useTodo(){
    return useContext(TodoContext)
}
