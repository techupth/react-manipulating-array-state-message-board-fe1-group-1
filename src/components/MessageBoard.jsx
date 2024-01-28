import { useState } from "react";

function MessageBoard() {
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState("");

  const addList = (index) => {
    index.preventDefault();
    const newTodo = [...todos];
    newTodo.push(message);
    setTodos(newTodo);
    console.log(todos);
  };

  const removeList = (index) => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <div className="message-input-container">
        <form>
          <label>
            <input
              id="message-text"
              name="message-text"
              type="text"
              placeholder="Enter message here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
          <button className="submit-message-button" onClick={addList}>
            Submit
          </button>
        </form>
      </div>
      <div className="board">
        <ul>
          <div >
            {todos.map((todo, index) => {
              return (
                <li key={index} className="message">
                  <h1>{todo}</h1>
                  <button
                    className="delete-button"
                    onClick={(index) => removeList(index)}
                  >
                    x
                  </button>
                </li>
              );
            })}
          </div>
        </ul>
      </div>
    </div>
  );
}

export default MessageBoard;
