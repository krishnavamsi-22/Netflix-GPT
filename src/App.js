import './App.css';

// function App() {
//   return (
//     <div className="text-3xl font-bold">
//       Hello!!!
//     </div>
//   );
// }

import { useState } from 'react';

function App() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count+10);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}




export default App;
