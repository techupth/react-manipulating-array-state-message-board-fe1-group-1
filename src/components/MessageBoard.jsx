import { useState } from "react";
function MessageBoard() {
  const [todo,setTodo]=useState(["Hello all ! This is first message."]);
  const [todoText,setTodoText]=useState("")

  const handleTodoTextchange=(event)=>{
    setTodoText(event.target.value);
  }

  const addTodoText=()=>{
    const newTodo = [...todo];
    newTodo.push(todoText);
    setTodo(newTodo);
  }

  const deleteTodo=(todoIndex)=>{
    const newTodo = [...todo];
    newTodo.splice(todoIndex,1);
    setTodo(newTodo);
  }

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={todoText}
            onChange={handleTodoTextchange}
          />
        </label>
        <button className="submit-message-button" onClick={addTodoText}>Submit</button>
      </div>
      <div class="board">
        <div className="message">
          <ul>
            {todo.map((item,index)=>{
              return(
                <li>
                  {item}<button className="delete-button" onClick={()=>{
                    deleteTodo(index);
                  }}>x</button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MessageBoard;
