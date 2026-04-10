import "./App.css";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addTodo = () => {
    if (input === "") return;

    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = input;
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      setTodos([...todos, input]);
    }

    setInput("");
  };
  const editTodo = (index) => {
    setInput(todos[index]);
    setEditIndex(index);
  };
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <div className="todo-box">
        <h1>🎀 Lavin’in Günlük Planı 🎀</h1>

        <div className="input-area">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Görev yaz..."
          />
          <button onClick={addTodo}>
            {editIndex !== null ? "Güncelle" : "Ekle"}
          </button>
        </div>

        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <span>{todo}</span>
              <div>
                <button onClick={() => editTodo(index)}>Düzenle</button>
                <button onClick={() => deleteTodo(index)}>Sil</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;