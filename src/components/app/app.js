import React, { Component } from 'react';
import AppHeader from '../app-header';
import FilterPanel from '../filter-panel/filter-panel';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import AddPanel from '../add-panel';
import "./app.css"
class App extends Component{
    maxId=100;
    createNewTodo=(title)=>{
        return {
            title, 
            important:false, 
            id:this.maxId++, 
            done:false}
    }
    state={
        todoList:[
            this.createNewTodo("Learn React"),
            this.createNewTodo("Drink Coffee"),
            this.createNewTodo("Listen to music")
        ]
    }
    findIndex=(id)=>{
        return this.state.todoList.findIndex(el=>el.id===id)
    }
    
    onDeleted=(id)=>{
        this.setState(({todoList})=>{
            const ind=this.findIndex(id)
            return {
                todoList:[...todoList.slice(0, ind), ...todoList.slice(ind+1)]
            }
        })
    }
    onCreate=(text)=>{
        this.setState(({todoList})=>{
            const newItem=this.createNewTodo(text)
            return {
                todoList:[...todoList,newItem ]
            }
        })
    }
    onToggleProp=(id, prop, todoList)=>{
        const ind=this.findIndex(id)
        const newItem={...todoList[ind], [prop]:!todoList[ind][prop]}
        return{
            todoList:[...todoList.slice(0, ind),
            newItem,
            ...todoList.slice(ind+1)]
        }
    }
    onImportant=(id)=>{
        this.setState(({todoList})=>{
            return this.onToggleProp(id, 'important', todoList)
        })
    }
    onDone=(id)=>{
        this.setState(({todoList})=>{
            return this.onToggleProp(id, 'done', todoList)
        })
    }
    render(){
        const done=this.state.todoList.filter(el=>el.done).length,
        important=this.state.todoList.filter(el=>el.important).length
        return(
            <div className="d-flex flex-column  app ">
                <AppHeader done={done} important={important} />
                <div className="d-flex">
                <SearchPanel/>
                <FilterPanel/>
                </div>
                <TodoList todos={this.state.todoList} 
                onDeleted={this.onDeleted}
                onImportant={this.onImportant}
                onDone={this.onDone}
                />
                <AddPanel onCreate={this.onCreate}/>
            </div>
        )
    }
    
}
export default App;