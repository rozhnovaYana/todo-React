import React from 'react';
import AppHeader from '../app-header';
import FilterPanel from '../filter-panel/filter-panel';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import "./app.css"
const App=()=>{
    const todoList=[
        {title:"Learn JS", important:true, id:1},
        {title:"Drink Coffee", id:2},
        {title:"Read books", important:true, id:3}
    ]
    return(
        <div className="d-flex flex-column  app ">
            <AppHeader/>
            <div className="d-flex">
            <SearchPanel/>
            <FilterPanel/>
            </div>
            
            <TodoList todos={todoList}/>
        </div>
    )
}
export default App;