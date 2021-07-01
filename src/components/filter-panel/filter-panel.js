import React, { Component } from "react"
class FilterPanel extends Component{
    maxKey=100
    state={
        btns:[
            {title:"All",active:true},
            {title:"Done",active:false},
            {title:"Important",active:false}
        ] 
    } 
    onFilter=(title)=>{
        this.setState(({btns})=>{
            const newArr=btns.forEach(el=>{
                el.active=false
                if(el.title===title){
                    el.active=true  
                }
            }
            )
            this.props.onFilter(title)
            return{
                btn:newArr
            }
        })
    }
    render(){
        const {btns}=this.state
        return(
            <div className="d-flex">
                {btns.map(el=>{
                    let className="btn"
                    if(el.active){
                        className+=" btn-primary"
                    }else{
                        className+=" btn-outline-secondary"
                    }
                    return <button className={className} 
                                    onClick={()=>this.onFilter(el.title)}
                                    key={this.maxKey++}>
                                {el.title}
                            </button>
                })}
            </div>
        )
    }
}

export default FilterPanel;