import './App.css';
import Header from './components/header';
import Form from './components/form';
import Todohero from './components/todohero';
import TodoList from './components/todoList';
import { useState,useEffect, useMemo } from 'react';
function App() {
  const initialState = useMemo(()=>
    {
       const local_state = localStorage.getItem('todos');
       if(local_state)
        return JSON.parse(local_state);
      return [];
    },[]);
  const [todos,setTodos] = useState(initialState);
  useEffect(()=>
    {
      localStorage.setItem('todos',JSON.stringify(todos));
    },[todos]);
  let completed = todos.filter(x=>x.isCompleted === true); 
  return (
  <div className='app'>
     <Header/>
     <Todohero length={[completed.length,todos.length]} />
     <Form  setTodos={setTodos}/>
     <TodoList todos={todos} setTodos={setTodos}/>
  </div>
  );
}

export default App;
