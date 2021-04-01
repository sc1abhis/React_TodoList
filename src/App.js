import React , {useState} from 'react';
import classes from './App.css';

//components --
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
  const [inputText , setInputText] = useState("");
  const [todos , setTodos] = useState([]);
  

  return (
    <div className={classes.App}>
      <header>
        <h1>My Todo List</h1>
      </header>
      <Form inputText = {inputText} setInputText = {setInputText}
      todos = {todos} setTodos = {setTodos}/>
      
      <TodoList />

    </div>


  );
}

export default App;
