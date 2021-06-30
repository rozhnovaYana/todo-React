import React from 'react';
import "./todo-list-item.css"
const Todolistitem =({title, onDeleted, done, important, onDoneClick, onImportantClick})=>{
    let classes="d-flex justify-content-between align-items-center todo-list-item"
    if(done){
        classes+=" done"
    }
    if (important){
        classes+=" important"
    }
    return (
        <div className={classes}>
            <span 
                onClick={onDoneClick}>
                {title}
            </span>
            <div>
                <button type="button" className="btn btn-outline-danger" onClick={onDeleted}>
                    <i className="fa fa-trash-alt"/>
                </button>
                <button type="button" className="btn btn-outline-success" onClick={onImportantClick}>
                    <i className="fa fa-exclamation"/>
                </button>
            </div>
        </div>
    )
    
}
export default Todolistitem;
