import React, { useContext } from "react";
import ToDoList from "./ToDoList";
import { ListContext } from "./ListContext";
import todoImage from "./images/todoappImage.jpeg";
import clearButtons from "./images/clear-button.png";

function ToDoApp() {
    const { todoList, setToDoList } = useContext(ListContext);
    const {completedList, setCompletedList} = useContext(ListContext);

    function handleClearAll(){
        setToDoList([]);
    }

    function handleClearCompleted(){
        const newList = todoList.filter(element => !completedList.includes(element));
        setToDoList([...newList]);
    }

    return <>
        <div className="row row-main">
            <div className="col-lg-5 todo-cover">
                <div className="row row1">
                    <div className="col image-col"></div>
                    <img src={todoImage} alt="" />
                </div>
                <div className="row row2">
                    <div className="col-6 button-col-one">
                        <img className="button-image" src={clearButtons} alt="" height="150px" width="200px" />
                        <button className="clear-buttons clear-button-one" onClick={handleClearAll}>Clear All</button>
                    </div>
                    <div className="col-6 button-col-two">
                        <img className="button-image" src={clearButtons} alt="" height="150px" width="200px" />
                        <button className="clear-buttons clear-button-two" onClick={handleClearCompleted}>Clear Completed</button>
                    </div>
                </div>
            </div>
            <div className="col-lg-7 todo-area">
                <ToDoList />
            </div>
        </div>
    </>;
}

export default ToDoApp;