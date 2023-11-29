import React from "react";

export const Page = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1>Page</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Page;
