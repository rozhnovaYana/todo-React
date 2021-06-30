import React from 'react';
import Todolistitem from '../todo-list-item';
import "./todo-list.css"
const TodoList=({todos, onDeleted, onImportant, onDone})=>{
    const elements=todos.map(item=>{
        const {id,...itemProps}=item;
        return(
            <li className="list-group-item todo-list-item" key={id}>
                <Todolistitem 
                {...itemProps} 
                onDeleted={()=>onDeleted(id)}
                onImportantClick={()=>onImportant(id)}
                onDoneClick={()=>onDone(id)}/>
            </li>
        )
    })
    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    )
}
export default TodoList;