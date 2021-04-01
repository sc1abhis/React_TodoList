import classes from './App.css';
import Form from './components/Form'
function App() {
  return (
    <div className={classes.App}>
      <header>
        <h1>My Todo List</h1>
      </header>
      <Form />

    </div>


  );
}

export default App;
