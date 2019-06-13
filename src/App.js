import React from 'react';
import { ToDos } from './ToDos/ToDos';
import { ToDoById } from './ToDos/ToDoId';
import ContextProvider from './ContextHook/ContextProvider';

function App() {
  return (
    <div className="App">
      <ToDoById/>
      <ContextProvider/>
    </div>
  );
}

export default App;
