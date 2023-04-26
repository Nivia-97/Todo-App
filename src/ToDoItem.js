import React, { useState, useContext } from "react";
import { ListContext } from "./ListContext";


function ToDoItem(props) {
    const {completedList, setCompletedList} = useContext(ListContext);
    const isDone = completedList.includes(props.item);

    function strikeItem() {
        if (!isDone) {
          setCompletedList(prevList => [...prevList, props.item]);
        } else {
          setCompletedList(prevList => prevList.filter(item => item !== props.item));
        }
      }
      
    return <div onClick={strikeItem}>
        <li style={{ textDecoration: isDone ? "line-through" : "none" }}>{props.item}</li>
    </div>;
}

export default ToDoItem;