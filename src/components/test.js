import { useState } from "react";

function Test() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hej Isabelle, alltid en vinnare!</h1>
      <h5>Hej Adam, den ständige förloraren...</h5>
      <button onClick={() => setCount(count + 1)}>click me!</button>
      <h5>button clicked: {count}</h5>
    </div>
  );
}

export default Test;
