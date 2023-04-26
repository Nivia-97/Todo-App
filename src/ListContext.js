import React, { createContext, useState } from "react";

export const ListContext = createContext();

export function ListProvider(props){
    const [todoList, setToDoList] = useState([]);
    const [completedList, setCompletedList] = useState([]);

    return (
        <ListContext.Provider value = {{todoList, setToDoList, completedList, setCompletedList}}>
            {props.children}
        </ListContext.Provider>
    );
}