import React from "react";
import ToDoApp from "./ToDoApp";
import { ListProvider } from "./ListContext";


function App() {
  return (
    <ListProvider >
      <>
        <ToDoApp />
      </>
    </ListProvider>);
}

export default App;


