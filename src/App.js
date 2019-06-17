import React from 'react';
import { ToDos } from './ToDos/ToDos';
import { ToDoById } from './ToDos/ToDoId';
import ContextProvider from './ContextHook/ContextProvider';
import Main from './GlobalState/components/Main';

function App() {
  return (
    <div className="App">
      {/*<ToDoById/>*/}
      <ContextProvider/>
      <Main/>
    </div>
  );
}

export default App;
