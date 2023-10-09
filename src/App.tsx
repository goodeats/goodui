import { useState } from 'react';
import './App.css';
import { Button, Zutton } from './lib';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>GoodUI</h1>
      <p className="read-the-docs">Design system</p>
      <p>
        <a
          href="https://github.com/goodeats/goodui"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </p>
      <div className="card">
        <p>Default Button</p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <hr />
      <div className="card">
        <p>Library Button</p>
        <Button />
      </div>
      <div className="card">
        <p>Nested Library Button</p>
        <Zutton />
      </div>
    </>
  );
}

export default App;
