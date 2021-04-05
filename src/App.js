import React , {useState , useEffect} from 'react';
import classes from './App.css';

//components --
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {



  const [inputText , setInputText] = useState("");
  const [todos , setTodos] = useState([]);
  const [status, setStatus] = useState(['All']);
  const [filteredTodos , setFilteredTodos] = useState([]);

  
  useEffect(() => {
    //console.log('hey')
    filterHandler();
  },[todos , status])

  const filterHandler =()=>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter( todo => todo.completed === true))
        break; 
      case 'uncompleted':
        setFilteredTodos(todos.filter( todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;

    }
  }

  return (
    <div className={classes.App}>
      <header>
        <h1>My Todo List</h1>
      </header>
      <Form inputText = {inputText} setInputText = {setInputText}
      todos = {todos} setTodos = {setTodos}
      setStatus = {setStatus}/>
      
      <TodoList todos = {todos} setTodos = {setTodos}
      filteredTodos = {filteredTodos}/>

    </div>


  );
}

export default App;
