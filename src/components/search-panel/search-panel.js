import React from 'react';
const SearchPanel=({onSearch})=>{  
    return (
    <input className="form-control" placeholder="Search" onChange={onSearch}/>
    )
}
export default SearchPanel;