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
        ],
        searchValue:"",
        filter:"All"
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
    onSearch=(e)=>{
        this.setState({
            searchValue:e.target.value
        })
    } 
    onFilter=(filter)=>{
        this.setState({
            filter
        })
    }
    onFilterHandler=()=>{
        const {todoList, filter}=this.state
        if(filter=="All"){
            return todoList
        }else if(filter=="Done"){
            return todoList.filter(el=>el.done)
        }else if(filter=="Important"){
            return todoList.filter(el=>el.important)
        }
    }
    onTodoRender=()=>{
        const arr=this.onFilterHandler()
        const {searchValue}=this.state
        if(searchValue.length==0){
            return arr
        }else{
            const newArr=arr.filter(el=>{
                return (el.title.toUpperCase().indexOf(searchValue.toUpperCase())!==-1)
            })
            return newArr
        }
    }
    
    render(){
        const done=this.state.todoList.filter(el=>el.done).length,
        important=this.state.todoList.filter(el=>el.important).length
        return(
            <div className="d-flex flex-column  app ">
                <AppHeader done={done} important={important} />
                <div className="d-flex">
                <SearchPanel onSearch={this.onSearch}/>
                <FilterPanel onFilter={this.onFilter}/>
                </div>
                <TodoList todos={this.onTodoRender()} 
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