import React, { Component } from 'react'
import "./add-panel.css"
class AddPanel extends Component{
    state={
        label:""
    }
    onChangeInput=(e)=>{
        this.setState({
            label:e.target.value
        })
    }
    onSubmit=(e)=>{
        e.preventDefault()
        if(this.state.label.length>0){
            this.props.onCreate(this.state.label)
        }
        this.setState({
            label:""
        })
    }
    render(){
        return(
            <form className="add-panel d-flex" onSubmit={this.onSubmit}>
                <input placeholder="Add something" className="form-control" onChange={this.onChangeInput} value={this.state.label} />
                <button className="btn btn-success">
                    <i className="fas fa-plus-circle"></i>
                </button>
            </form>
        )
    }
    
}
export default AddPanel;