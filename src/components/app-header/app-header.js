import React from 'react';
import "./app-header.css"
const AppHeader=()=>{
    return (
        <div className="app-header d-flex align-items-end justify-content-between">
            <h1>Your Todo List</h1>
            <h2><span className="bold">1</span> in progress, <span className="bold">1</span> done</h2> 
        </div>
        
    )
}
export default AppHeader;