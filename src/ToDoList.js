import React, { useState, useContext } from "react";
import ToDoItem from "./ToDoItem";
import { ListContext } from "./ListContext";

function ToDoList() {
    const [todoItem, setTODoItem] = useState(" ");
    const {todoList, setToDoList} = useContext(ListContext);

    function updateToDo(event){
        setTODoItem(event.target.value);
    }

    function addItem(){
        todoItem!==" " && setToDoList(prevList => [...prevList, todoItem]);
        setTODoItem(" ");
    }

    return <div className="container">
        <div className="heading">
            <h1>To-Do List</h1>
        </div>
        <div className="form">
            <input onChange={updateToDo} type="text" value={todoItem}/>
            <button className="add-button" onClick={addItem}>
                <span>Add</span>
            </button>
        </div>
        <div>
            <ul>
            {todoList.map((item, index) => <ToDoItem key={index} item={item} />)}
            </ul>
        </div>
    </div>;
}

export default ToDoList;