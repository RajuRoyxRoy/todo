import React, { useState } from 'react'; // Import useState
import Create from './Create';

function Home() {
  const [todos, setTodos] = useState([]);   

  return (
    <div>
      <h1>Todo list</h1>
      <Create />
      {
        todos.length === 0 ? 
        <div> No Records</div>
        :
        todos.map((todo, index) => (
          <div key={index}> {/* Add a unique key */}
            {todo}
          </div>
        ))
      }
    </div>
  );
}

export default Home;
