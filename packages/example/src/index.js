import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Page } from "library";

const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count > 2) {
      setCount(2);
    }
  }, [count]);
  const [count2, setCount2] = useState(0);

  return (
    <div>
      <h1>App</h1>
      <div>
        Count: {count} <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>Actual Count: {count2}</div>
      <Page />
    </div>
  );
};

const root = document.getElementById("root");
const reactRoot = createRoot(root);

reactRoot.render(<App />);
