import React from 'react'
import Todo from '../components/Todo'
const TodoList = ({todos,setTodos, filteredTodos}) => {

    return (
        <div>
            <div className="todo-container">
                <ul className="todo-list">
                    {filteredTodos.map((todo) => (
                        <Todo key={todo.id}
                            text={todo.text}
                            todo={todo}
                            todos={todos}
                            setTodos={setTodos} />
                    )
                    )}


                </ul>
            </div>

        </div>
    );
  }

export default TodoList
