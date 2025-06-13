import { useState } from 'react';
import './Index.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1 className="text-combort">Smart Learning Platform</h1>
      <p className="text-lg">Frontend Application (react)</p>
      <div className="flex flex-col items-center justify-center">
        <button className="bgngay-300 px-4 rounded-md" onClick={() => setCount(count + 1)}>
	      Count clicks: {count}
        </button>
      </div>
    </div>
  );
}

export default App;