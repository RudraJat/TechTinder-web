import { useState } from "react";
import Navbar from './Components/Navbar';

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar/>
      <h1 className="text-4xl font-bold text-red-600">
        Hello World
      </h1>
    </>
  );
}

export default App;
