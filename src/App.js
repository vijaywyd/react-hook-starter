import React from 'react';
import { ToDos } from './EffectHook/ToDos';
import { ToDoById } from './EffectHook/ToDoId';
import ContextProvider from './ContextHook/ContextProvider';
import Main from './ReducerHook/components/Main';
import CallbackHook from './CallBackHook/CallbackHook';
import { UseMemo } from './Memohook/UseMemoHook';
import { ToggleButton } from './CustomHook/ToggleButton';
import ButtonRenderProp from './RenderPropsHooks/ButtonRenderProp';
import { ButtonHook } from './RenderPropsHooks/ButtonHook';

function App() {
  return (
    <div className="App">
      {/*<ToDoById/>*/}
      {/*<ContextProvider/>*/}
      {/*<Main/>*/}
     {/* <CallbackHook/>*/}
     {/*<UseMemo/>*/}
     {/*<ToggleButton/>*/}
     <ButtonHook/>
    </div>
  );
}

export default App;
