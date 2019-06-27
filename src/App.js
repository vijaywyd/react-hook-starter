import React from 'react';
import { ToDos } from './EffectHook/ToDos';
import { ToDoById } from './EffectHook/ToDoId';
import ContextProvider from './ContextHook/ContextProvider';
import Main from './ReducerHook/components/Main';
import CallbackHook from './CallBackHook/CallbackHook';
import { UseMemo } from './Memohook/UseMemoHook';

function App() {
  return (
    <div className="App">
      {/*<ToDoById/>*/}
      {/*<ContextProvider/>*/}
      {/*<Main/>*/}
     {/* <CallbackHook/>*/}
     <UseMemo/>
    </div>
  );
}

export default App;
