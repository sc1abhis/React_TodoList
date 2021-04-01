import React, { Component } from 'react'

const Form = (props) => {


    const inputTextHandler = (e) => {
        props.setInputText(e.target.value)
    }

    const submitTodoHandler = (e) => {
        //console.log(e)
        e.preventDefault();
        props.setTodos([
            ...props.todos,{ id: Math.random() *1000 , text: props.inputText , completed : false }
        ])
        props.setInputText('');
    }

    return (
        <div>
            <form>
                <input type="text" className="todo-input" onChange={inputTextHandler} value ={props.inputText} />
                <button className="todo-button" type="submit" onClick = {submitTodoHandler}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    )

}

export default Form
