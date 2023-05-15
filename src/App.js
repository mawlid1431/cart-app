import "./App.css";
import React, { useState } from "react";

function App() {
  const [list, setList] = useState(["cake", "donut", "banana"]);
  const [input, setInput] = useState("");

  function addToList() {
    const newList = list.concat(input);
    setList(newList);
    setInput("");
  }

  return (
    <div>
      <h3>Shopping List 📃📃</h3>
      <div className="form">
        <input type="text" onChange={(e) => setInput(e.target.value)} value={input} />
        <button onClick={addToList}>+</button>
      </div>
      <ol>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
