import React from 'react';
import "./todo-list-item.css"
const Todolistitem=({title, important=false})=>{
    const style={
        color: important?"tomato":"black"
    }
    return (
        <div className="d-flex justify-content-between align-items-center">
            <span style={style}>{title}</span>
            <div>
                <button type="button" className="btn btn-outline-danger">
                    <i className="fa fa-trash-alt"/>
                </button>
                <button type="button" className="btn btn-outline-success">
                    <i className="fa fa-exclamation"/>
                </button>
            </div>
        </div>
    )

}
export default Todolistitem;