import React from 'react';
import "./app-header.css"
const AppHeader=({done, important})=>{
    return (
        <div className="app-header d-flex align-items-end justify-content-between">
            <h1>Your Todo List</h1>
            <h2><span className="bold">{important}</span> is important, <span className="bold">{done}</span> done</h2> 
        </div>
        
    )
}
export default AppHeader;